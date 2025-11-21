import { getPost, getAllPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPost(params.slug);

  return (
    <div className="container">
      <article className="bg-gray-300 dark:bg-gray-900 rounded-xl p-8">
        <h1 className="font-bold text-4xl mx-12 mb-4">{post.metadata.title}</h1>
        <p className="text-gray-500 mx-12">{post.metadata.date}&emsp;○&emsp;{post.metadata.author}</p>
        <br></br>
        <hr className="mx-12"></hr>
        <br></br>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} className="text-lg mx-12" />
      </article>
    </div>
  );
}
