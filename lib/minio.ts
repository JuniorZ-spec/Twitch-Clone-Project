import { S3Client, CreateBucketCommand, HeadBucketCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const bucketName = process.env.MINIO_BUCKET ?? "twitch-clone";
const region = process.env.MINIO_REGION ?? "us-east-1";
const endpoint = process.env.MINIO_ENDPOINT;
const accessKeyId = process.env.MINIO_ACCESS_KEY;
const secretAccessKey = process.env.MINIO_SECRET_KEY;

const hasMinioConfig = Boolean(endpoint && accessKeyId && secretAccessKey);

const client = hasMinioConfig
    ? new S3Client({
        region,
        endpoint,
        credentials: {
            accessKeyId: accessKeyId as string,
            secretAccessKey: secretAccessKey as string,
        },
        forcePathStyle: true,
    })
    : null;

export const THUMBNAIL_BUCKET = bucketName;

function assertMinioConfigured() {
    if (!hasMinioConfig || !client) {
        throw new Error(
            "MinIO is not configured. Set MINIO_ENDPOINT, MINIO_ACCESS_KEY and MINIO_SECRET_KEY."
        );
    }
    return client;
}

export async function ensureBucketExists() {
    if (!hasMinioConfig || !client) {
        return;
    }

    try {
        await client.send(new HeadBucketCommand({ Bucket: bucketName }));
    } catch (error) {
        await client.send(new CreateBucketCommand({ Bucket: bucketName }));
    }
}

export async function uploadThumbnail(key: string, body: ArrayBuffer, contentType: string) {
    const configuredClient = assertMinioConfigured();
    await configuredClient.send(
        new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: Buffer.from(body),
            ContentType: contentType,
        })
    );
}
