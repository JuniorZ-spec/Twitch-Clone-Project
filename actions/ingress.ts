"use server";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";
import { revalidatePath } from "next/cache";

const srsRtmpUrl = process.env.SRS_RTMP_URL ?? "rtmp://srs/live";

export const resetIngresses = async (externalUserId: string) => {
  const user = await db.user.findUnique({
    where: { externalUserId },
  });

  if (!user) {
    return;
  }

  await db.stream.updateMany({
    where: { userId: user.id },
    data: {
      streamKey: null,
      serverUrl: null,
      isLive: false,
    },
  });
};

export const createIngress = async (_ingressType?: number) => {
  const self = await getSelf();

  const streamKey = `${self.id}-${Date.now()}`;

  await db.stream.update({
    where: { userId: self.id },
    data: {
      streamKey,
      serverUrl: srsRtmpUrl,
      isLive: false,
    },
  });

  revalidatePath(`/u/${self.username}/keys`);
};
