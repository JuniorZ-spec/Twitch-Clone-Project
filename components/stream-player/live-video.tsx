"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { OfflineVideo } from "./offline-video";

interface LiveVideoProps {
  username?: string;
}

export const LiveVideo = ({ username = "host" }: LiveVideoProps) => {
  // LiveKit removed: show offline / HLS placeholder
  return (
    <div className="h-full w-full">
      <OfflineVideo username={username} />
    </div>
  );
};

export const LiveVideoSkeleton = () => {
  return <Skeleton className="h-full w-full" />;
};
