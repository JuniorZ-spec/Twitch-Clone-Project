"use client";

import { cn } from "@/lib/utils";
import { useChatSidebar } from "@/store/use-chat-sidebar";

import { InfoCard } from "./info-card";
import { AboutCard } from "./about-card";
import { Video, VideoSkeleton } from "./video";
import { Header } from "./header"; // Assure-toi que l'import existe
import { Chat } from "./chat";     // ON IMPORTE LE VRAI COMPOSANT CHAT

interface StreamPlayerUser {
  id: string;
  username: string;
  imageUrl: string;
  bio: string | null;
  _count: { followedBy: number };
}

interface StreamPlayerStream {
  id: string;
  name: string;
  thumbnailUrl: string | null;
  streamKey: string | null;
  isLive: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

interface StreamPlayerProps {
  user: StreamPlayerUser;
  stream: StreamPlayerStream;
  isFollowing: boolean;
}

export const StreamPlayer = ({ user, stream, isFollowing }: StreamPlayerProps) => {
  const { collapsed } = useChatSidebar((state) => state);

  // On harmonise tout : Vidéo via SRS et Chat via LiveKit côte à côte !
  return (
    <div className={cn(
      "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full",
      collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-5"
    )}>
      {/* Colonne de Gauche : Flux Vidéo et Infos */}
      <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
        <Video hostName={user.username} hostIdentity={user.id} streamKey={stream.streamKey} />
        <Header
          hostName={user.username}
          hostIdentity={user.id}
          viewerIdentity={user.id} // ID temporaire pour le viewer
          imageUrl={user.imageUrl}
          isFollowing={isFollowing}
          name={stream.name}
        />
        <InfoCard hostIdentity={user.id} viewerIdentity="" name={stream.name} thumbnailUrl={stream.thumbnailUrl} />
        <AboutCard
          hostName={user.username}
          hostIdentity={user.id}
          viewerIdentity=""
          bio={user.bio || "🎮 Streaming, gaming, and good vibes. Come hang out!"}
          followedByCount={user._count.followedBy}
        />
      </div>

      {/* Colonne de Droite : Le Vrai Chat LiveKit connecté */}
      <div className={cn("col-span-1", collapsed && "hidden")}>
        <Chat
          viewerName={user.username}
          hostName={user.username}
          hostIdentity={user.id}
          isFollowing={isFollowing}
          isChatEnabled={stream.isChatEnabled}
          isChatDelayed={stream.isChatDelayed}
          isChatFollowersOnly={stream.isChatFollowersOnly}
        />
      </div>
    </div>
  );
};

export const StreamPlayerSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full">
      <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
        <div className="aspect-video bg-background rounded-xl" />
        <div className="h-32 bg-background rounded-xl" />
      </div>
      <div className="col-span-1 bg-background border-l border-border h-full" />
    </div>
  );
};