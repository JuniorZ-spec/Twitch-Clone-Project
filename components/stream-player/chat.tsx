"use client";

import { useState } from "react";
import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";
import { ChatHeader } from "./chat-header";
import { ChatList } from "./chat-list";
import { ChatForm } from "./chat-form";
import { ChatInfo } from "./chat-info";

interface ChatProps {
  hostName: string;
  hostIdentity: string;
  viewerName: string;
  isFollowing: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat = ({
  hostName,
  hostIdentity,
  viewerName,
  isFollowing,
  isChatEnabled,
  isChatDelayed,
  isChatFollowersOnly,
}: ChatProps) => {
  const { variant } = useChatSidebar((state) => state);
  const [chatValue, setChatValue] = useState("");

  const handleChatSubmit = () => {
    // TODO: Envoyer le message via LiveKit ou WebSocket
    setChatValue("");
  };

  return (
    <div className="flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)]">
      {variant === ChatVariant.CHAT ? (
        <>
          <ChatHeader />
          <ChatList
            messages={[]}
            isHidden={!isChatEnabled}
          />
          <ChatForm
            onSubmit={handleChatSubmit}
            value={chatValue}
            onChange={setChatValue}
            isHidden={!isChatEnabled}
            isFollowersOnly={isChatFollowersOnly}
            isFollowing={isFollowing}
            isDelayed={isChatDelayed}
          />
        </>
      ) : (
        <ChatInfo
          isDelayed={isChatDelayed}
          isFollowersOnly={isChatFollowersOnly}
        />
      )}
    </div>
  );
};

export const ChatSkeleton = () => {
  return (
    <div className="flex flex-col border-l border-b pt-0 h-[calc(100vh-80px)] border-2"></div>
  );
};