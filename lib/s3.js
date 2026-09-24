import { S3Client, GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import matter from "gray-matter";

const s3Client = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET = process.env.S3_BUCKET_NAME;

export async function getPostFromS3(fileKey) {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: fileKey,
  });

  const response = await s3Client.send(command);
  const markdownText = await response.Body.transformToString("utf-8");
  const { data, content } = matter(markdownText);

  return {
    slug: fileKey.replace(/^posts\//, "").replace(/\.md$/, ""),
    metadata: {
      title: data.title || "No Title",
      date: data.date || "",
      author: data.author || "Anonymous",
      excerpt: data.excerpt || "",
    },
    content,
  };
}

export async function getAllPostsFromS3(prefix) {
  const command = new ListObjectsV2Command({
    Bucket: process.env.S3_BUCKET_NAME,
    Prefix: prefix,
  });

  const response = await s3Client.send(command);

  if (!response.Contents) { return null; }

  const mdKeys = response.Contents
    .map((item) => item.Key)
    .filter((key) => key.endsWith(".md"));

  const posts = await Promise.all(
    mdKeys.map(async (key) => {
      const post = await getPostFromS3(key);
      return {
        slug: post.slug,
        ...post.metadata,
      };
    })
  );
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
