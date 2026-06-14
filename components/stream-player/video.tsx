"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { OfflineVideo } from "./offline-video";
import { LoadingVideo } from "./loading-video";
import { HlsVideo } from "./hls-video";

interface VideoProps {
  hostName: string;
  hostIdentity: string;
  streamKey?: string | null;
}

export const Video = ({ hostName, streamKey }: VideoProps) => {
  // FORCE L'UTILISATION DE TON IP WSL POUR LE NAVIGATEUR
  const hlsUrl = streamKey
    ? `http://172.31.56.11:8080/live/${streamKey}.m3u8`
    : undefined;

  if (hlsUrl) {
    return (
      <div className="aspect-video border-b group relative">
        <HlsVideo src={hlsUrl} />
      </div>
    );
  }

  return (
    <div className="aspect-video border-b group relative">
      <OfflineVideo username={hostName} />
    </div>
  );
};

export const VideoSkeleton = () => {
  return (
    <div className="aspect-video border-x border-background">
      <Skeleton className="h-full w-full rounded-none" />
    </div>
  );
};
