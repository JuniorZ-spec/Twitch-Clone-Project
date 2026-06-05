"use client";

import { Stream, User } from "@prisma/client";

import { cn } from "@/lib/utils";
import { useChatSidebar } from "@/store/use-chat-sidebar";

import { InfoCard } from "./info-card";
import { AboutCard } from "./about-card";
import { Video, VideoSkeleton } from "./video";
import { HeaderSkeleton } from "./header";
import { ChatSkeleton } from "./chat";

type CustomStream = {
  id: string;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
  isLive: boolean;
  thumbnailUrl: string | null;
  name: string;
  streamKey?: string | null;
};

type CustomUser = {
  id: string;
  username: string;
  bio: string | null;
  stream: CustomStream | null;
  imageUrl: string;
  _count: { followedBy: number }
};

interface StreamPlayerProps {
  user: CustomUser;
  stream: CustomStream;
  isFollowing: boolean;
}

export const StreamPlayer = ({ user, stream, isFollowing }: StreamPlayerProps) => {
  const { collapsed } = useChatSidebar((state) => state);
  const useSrs = process.env.NEXT_PUBLIC_USE_SRS === "true";

  if (useSrs) {
    return (
      <div className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full">
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
          <Video hostName={user.username} hostIdentity={user.id} streamKey={stream.streamKey} />
          <div className="rounded-xl bg-background p-6">
            <h2 className="text-lg font-semibold">SRS playback enabled</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This stream is delivered using SRS HLS instead of LiveKit.
            </p>
            {stream.streamKey ? (
              <p className="mt-3 text-sm break-all">
                HLS URL: <span className="font-mono">{process.env.NEXT_PUBLIC_SRS_HLS_URL}/{stream.streamKey}.m3u8</span>
              </p>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">No stream key generated yet.</p>
            )}
          </div>
          <InfoCard hostIdentity={user.id} viewerIdentity="" name={stream.name} thumbnailUrl={stream.thumbnailUrl} />
          <AboutCard hostName={user.username} hostIdentity={user.id} viewerIdentity="" bio={user.bio} followedByCount={user._count.followedBy} />
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="rounded-xl bg-background p-6">
            <h3 className="text-lg font-semibold">Chat unavailable</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Live chat is disabled in SRS-only mode.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full", collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2")}>
      <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
        <Video hostName={user.username} hostIdentity={user.id} streamKey={stream.streamKey} />
        <InfoCard hostIdentity={user.id} viewerIdentity="" name={stream.name} thumbnailUrl={stream.thumbnailUrl} />
        <AboutCard hostName={user.username} hostIdentity={user.id} viewerIdentity="" bio={user.bio} followedByCount={user._count.followedBy} />
      </div>
      <div className={cn("col-span-1", collapsed && "hidden")}></div>
    </div>
  );
};

export const StreamPlayerSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full">
      <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
        <VideoSkeleton />
        <HeaderSkeleton />
      </div>
      <div className="col-span-1 bg-background">
        <ChatSkeleton />
      </div>
    </div>
  )
}