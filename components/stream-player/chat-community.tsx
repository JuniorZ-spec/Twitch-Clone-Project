"use client";

interface ChatCommunityProps {
  isHidden: boolean;
}

export const ChatCommunity = ({ isHidden }: ChatCommunityProps) => {
  if (isHidden) return null;

  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold mb-2">Community</h3>
      <div className="text-sm text-muted-foreground">Community list is unavailable.</div>
    </div>
  );
};