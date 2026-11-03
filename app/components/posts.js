import { getPostFromS3, getAllPostsFromS3 } from "@/lib/s3"
import Link from "next/link";

export async function Post(props) {
  const { slug } = await props.params;
  const fileKey = `posts/${slug}.md`;
  const { metadata, content } = await getPostFromS3(fileKey);

  return (
    <article className="bg-gray-300 dark:bg-gray-900 rounded-xl p-8">
      <h2 className="mx-12 mb-4">{metadata.title}</h2>
      <p className="text-gray-500 mx-12">{metadata.date}&emsp;○&emsp;{metadata.author}</p>
      <br></br>
      <hr className="mx-12"></hr>
      <br></br>
      <p className="mx-12">{content}</p>
    </article>
  )
}

export async function PostsData() {
  const allPostsData = await getAllPostsFromS3("posts/");

  return (
    <div className="space-y-4">
      {allPostsData.map((post) => (
        <article key={post.slug} className="bg-gray-300 dark:bg-gray-900 rounded-xl p-8">
          <Link href={`/posts/${post.slug}`} className="font-bold text-2xl mx-4 hover:underline">{post.title}</Link>
          <p className="text-gray-500 mx-4">{post.date}&emsp;○&emsp;{post.author}</p>
          <br></br>
          <hr className="mx-4"></hr>
          <br></br>
          <p className="mx-4">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
