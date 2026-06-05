import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";
import { ensureBucketExists, uploadThumbnail, THUMBNAIL_BUCKET } from "@/lib/minio";

export async function POST(req: Request) {
    const self = await getSelf();

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
        return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const key = `thumbnails/${self.id}/${Date.now()}-${file.name}`;

    await ensureBucketExists();
    await uploadThumbnail(key, arrayBuffer, file.type || "application/octet-stream");

    const endpoint = process.env.MINIO_ENDPOINT;
    const url = `${endpoint}/${THUMBNAIL_BUCKET}/${encodeURIComponent(key)}`;

    await db.stream.update({
        where: {
            userId: self.id,
        },
        data: {
            thumbnailUrl: url,
        },
    });

    return NextResponse.json({ url });
}
