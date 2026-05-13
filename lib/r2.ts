import { PutObjectCommand, S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const r2Endpoint = process.env.R2_ENDPOINT;
const r2Bucket = process.env.R2_BUCKET;

if (!r2Endpoint || !r2Bucket) {
  throw new Error("Missing Cloudflare R2 configuration in environment variables.");
}

const s3Client = new S3Client({
  endpoint: r2Endpoint,
  region: "auto",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
  },
});

export async function uploadBufferToR2(key: string, buffer: Buffer, contentType: string) {
  const command = new PutObjectCommand({
    Bucket: r2Bucket,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  });

  await s3Client.send(command);
  return getR2PublicUrl(key);
}

export async function downloadBufferFromR2(key: string) {
  const command = new GetObjectCommand({
    Bucket: r2Bucket,
    Key: key,
  });

  const response = await s3Client.send(command);
  const body = response.Body as any;
  if (!body) {
    throw new Error(`R2 object not found: ${key}`);
  }

  const chunks: Uint8Array[] = [];
  for await (const chunk of body) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks);
}

export function getR2ObjectKeyFromUrl(url: string) {
  try {
    const parsed = new URL(url);
    const endpointHost = (r2Endpoint ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "");
    const bucket = (r2Bucket ?? "").replace(/\/+$/, "");

    if (parsed.hostname === endpointHost || parsed.hostname === `www.${endpointHost}`) {
      const path = parsed.pathname.replace(/^\//, "");
      if (path.startsWith(`${bucket}/`)) {
        return path.slice(bucket.length + 1);
      }
      return path;
    }

    if (parsed.hostname === `${bucket}.${endpointHost}`) {
      return parsed.pathname.replace(/^\//, "");
    }

    return null;
  } catch {
    return null;
  }
}

export function getR2PublicUrl(key: string) {
  const rawEndpoint = (r2Endpoint ?? "").replace(/\/+$/, "");
  const bucket = (r2Bucket ?? "").replace(/\/+$/, "");
  const encodedKey = key.split('/').map((segment) => encodeURIComponent(segment)).join('/');

  const endpointHost = rawEndpoint.replace(/^https?:\/\//, "");
  const isLocal = endpointHost.includes("localhost");

  if (isLocal) {
    return `${rawEndpoint}/${bucket}/${encodedKey}`;
  }

  return `https://${bucket}.${endpointHost}/${encodedKey}`;
}
