import { Suspense } from "react";
import { Spinner } from "../../components/ui/spinner";
import { getPostFromS3 } from "@/lib/s3"

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

export default async function BlogPostPage(props) {
  return (
    <div className="container">
      <Suspense fallback={<div className="flex justify-center"><Spinner className="size-8 md:size-12" /></div>}>
        <Post params={props.params} />
      </Suspense>
    </div>
  );
}
