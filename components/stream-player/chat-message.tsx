"use client";

import { format } from "date-fns";

import { stringToColor } from "@/lib/utils";

interface ChatMessageProps {
  data: any;
}

export const ChatMessage = ({ data }: ChatMessageProps) => {
  const name = data?.from?.name || data?.sender || "user";
  const message = data?.message || data?.text || "";
  const timestamp = data?.timestamp ? new Date(data.timestamp) : new Date();
  const color = stringToColor(name || "");

  return (
    <div className="flex gap-2 p-2 rounded-md hover:bg-white/5">
      <p className="text-sm text-white/40">{format(timestamp, "HH:mm")}</p>
      <div className="flex flex-wrap items-baseline gap-1 grow">
        <p className="text-sm font-semibold whitespace-nowrap">
          <span className="truncate" style={{ color: color }}>
            {name}
          </span>:
        </p>
        <p className="text-sm break-all">{message}</p>
      </div>
    </div>
  );
};
