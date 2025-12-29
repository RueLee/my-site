import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { getAllApiPosts } from "@/lib/api";
import { BlogPost } from "@/lib/struct";

export default async function Page() {
  let allPostsData = null;
  try {
    allPostsData = await getAllApiPosts();
  }
  catch (error) {
    allPostsData = null;
  }

  return (
    <div id="home-page">
      <section aria-label="Welcome display">
        <div className="container">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold mb-8">Welcome!</h1>
              <p className="text-xl">UC Irvine Graduates - B.S. Computer Science</p>
            </div>
            <div className="hero-heading-right">
              <Image
                src="/sollycommission.jpg"
                alt="RueLee Profile Pic"
                width={180}
                height={180}
                style={{
                  borderRadius: "50%"
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Latest Post Blog">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Latest Posts</h1>

          {allPostsData === null ? (
            <p className="text-center text-red-500 text-xl">Failed to fetch data!</p>
          ) : (
            <ul className="space-y-4">
            {allPostsData.map((post: BlogPost) => (
              <li key={post.slug} className="bg-gray-300 dark:bg-gray-900 rounded-xl p-8">
                <Link href={`/posts/${post.slug}`} className="font-bold text-2xl mx-4 hover:underline">{post.title}</Link>
                <p className="text-gray-500 mx-4">{post.date_posted}&emsp;○&emsp;{post.author}</p>
                <br></br>
                <hr className="mx-4"></hr>
                <br></br>
                <p className="mx-4">{post.excerpt}</p>
              </li>
            ))}
            </ul>
          )}
        </div>
      </section>
      <section aria-label="Email Contact">
        <div className="container bg-gradient-to-r from-blue-500 to-gray-200 dark:from-blue-950 dark:to-gray-950 border-x-4 border-black dark:border-white rounded-xl mb-12">
          <h1 className="text-5xl font-bold mb-8 text-center">Let&apos;s Connect</h1>
          <p className="text-center m-4">Feel free to reach me out on email! I am open for questions and opportunities!</p>

          <div className="flex justify-center">
            <Link href="mailto:ruleonl@uci.edu" className="transition ease-in-out duration-200 bg-cyan-200 dark:bg-cyan-950 hover:bg-cyan-500 dark:hover:bg-cyan-800 p-4 rounded-full">
              <p className="text-center">Email at <span className="tracking-wide font-bold">ruleonl@uci.edu</span> <FontAwesomeIcon icon={faEnvelopesBulk} /></p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

{/* <a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
    <span class="relative group-hover:text-white">Button Text</span>
</a> */}