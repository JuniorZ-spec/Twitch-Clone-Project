"use client";

import { VerifiedMark } from "@/components/verified-mark";

import { BioModal } from "./bio-modal";

interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  bio: string | null;
  followedByCount: number;
};

export const AboutCard = ({
  hostName,
  hostIdentity,
  viewerIdentity,
  bio,
  followedByCount,
}: AboutCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  const followedByLabel = followedByCount === 1 ? "follower" : "followers";

  return (
    <div className="px-4">
      <div className="group rounded-xl bg-background p-4 lg:p-6 flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-semibold text-base lg:text-xl">
            About {hostName}
            <VerifiedMark />
          </div>
          {isHost && (
            <BioModal initialValue={bio} />
          )}
        </div>
        <div className="text-xs text-muted-foreground">
          <span className="font-semibold text-primary">
            {followedByCount}
          </span> {followedByLabel}
        </div>
        <p className="text-xs leading-relaxed">
          {bio || "Streaming, gaming, and good vibes."}
        </p>
      </div>
    </div>
  );
};