import { getApiPost, getAllApiPosts } from "@/lib/api";
import { BlogPost } from "@/lib/struct";

export async function generateStaticParams() {
  let posts = null;
  try {
    posts = await getAllApiPosts();
  }
  catch (error) {
    return [];
  }
  return posts.map((post: BlogPost) => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getApiPost(params.slug);

  return (
    <div className="container">
      <article className="bg-gray-300 dark:bg-gray-900 rounded-xl p-8">
        <h1 className="font-bold text-4xl mx-12 mb-4">{post.title}</h1>
        <p className="text-gray-500 mx-12">{post.date_posted}&emsp;○&emsp;{post.author}</p>
        <br></br>
        <hr className="mx-12"></hr>
        <br></br>
        <p className="mx-12">{post.excerpt}</p>
      </article>
    </div>
  );
}
