import { Suspense } from "react";
import { Spinner } from "../../components/ui/spinner";
import { Post } from "../../components/posts";

export default function BlogPostPage(props) {
  return (
    <div className="container">
      <Suspense fallback={<div className="flex justify-center"><Spinner className="size-8 md:size-12" /></div>}>
        <Post params={props.params} />
      </Suspense>
    </div>
  );
}
