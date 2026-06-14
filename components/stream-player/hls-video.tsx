"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

import { VolumeControl } from "./volume-control";
import { FullscreenControl } from "./fullscreen-control";

interface HlsVideoProps {
    src: string;
}

export const HlsVideo = ({ src }: HlsVideoProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    // 1. On force le volume initial à 0 (Muted) pour contourner le blocage de sécurité des navigateurs
    const [volume, setVolume] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: Hls | undefined;

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = src;
            // 2. On force la lecture sur Safari/iOS
            video.play().catch((e) => console.log("Autoplay blocked:", e));
        } else if (Hls.isSupported()) {
            hls = new Hls({
                maxLoadingDelay: 4,
                lowLatencyMode: true,
            });
            hls.loadSource(src);
            hls.attachMedia(video);

            // 3. ON FORCE LE LANCEMENT AUTOMATIQUE DÈS QUE LE FLUX EST PRÊT
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch((e) => console.log("Playback started after user interaction", e));
            });
        }

        return () => {
            hls?.destroy();
        };
    }, [src]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume / 100;
            videoRef.current.muted = volume === 0;
        }
    }, [volume]);

    const toggleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (wrapperRef.current) {
            wrapperRef.current.requestFullscreen();
        }
    };

    const handleFullscreenChange = () => {
        setIsFullscreen(document.fullscreenElement !== null);
    };

    useEffect(() => {
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    return (
        <div ref={wrapperRef} className="relative h-full flex w-full bg-black">
            <video
                ref={videoRef}
                className="h-full w-full object-contain"
                playsInline
                autoPlay
                muted // 4. Obligatoire pour que le navigateur accepte de charger la vidéo sans action utilisateur !
            />
            <div className="absolute inset-x-0 bottom-0 flex h-14 items-center justify-between bg-gradient-to-t from-neutral-950/90 px-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <VolumeControl
                    onChange={(value) => setVolume(value)}
                    value={volume}
                    onToggle={() => setVolume(volume === 0 ? 50 : 0)}
                />
                <FullscreenControl isFullscreen={isFullscreen} onToggle={toggleFullscreen} />
            </div>
        </div>
    );
};