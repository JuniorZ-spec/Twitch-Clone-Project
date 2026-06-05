"use client";

import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";

interface ChatProps {
  hostName: string;
  hostIdentity: string;
  viewerName: string;
  isFollowing: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat = (_props: ChatProps) => {
  const { variant } = useChatSidebar((state) => state);

  return (
    <div className="flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)] p-6">
      {variant === ChatVariant.CHAT ? (
        <div className="text-sm text-muted-foreground">Chat is not available in this deployment.</div>
      ) : (
        <div className="text-sm text-muted-foreground">Community view is not available.</div>
      )}
    </div>
  );
};

export const ChatSkeleton = () => {
  return (
    <div className="flex flex-col border-l border-b pt-0 h-[calc(100vh-80px)] border-2"></div>
  );
};
