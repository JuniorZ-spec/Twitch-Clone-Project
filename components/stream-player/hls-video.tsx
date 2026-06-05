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
    const [volume, setVolume] = useState(50);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: Hls | undefined;

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = src;
        } else if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);
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
        <div ref={wrapperRef} className="relative h-full flex">
            <video
                ref={videoRef}
                className="h-full w-full object-cover"
                controls
                playsInline
            />
            <div className="absolute inset-x-0 bottom-0 flex h-14 items-center justify-between bg-gradient-to-r from-neutral-950/90 px-4 text-white">
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
