import { getPostFromS3 } from "@/lib/s3"

export const revalidate = 240;

export default async function BlogPostPage(props) {
  const { slug } = await props.params;
  const fileKey = `posts/${slug}.md`;
  const { metadata, content } = await getPostFromS3(fileKey);

  return (
    <div className="container">
      <article className="bg-gray-300 dark:bg-gray-900 rounded-xl p-8">
        <h1 className="font-bold text-4xl mx-12 mb-4">{metadata.title}</h1>
        <p className="text-gray-500 mx-12">{metadata.date}&emsp;○&emsp;{metadata.author}</p>
        <br></br>
        <hr className="mx-12"></hr>
        <br></br>
        <p className="mx-12">{content}</p>
      </article>
    </div>
  );
}
