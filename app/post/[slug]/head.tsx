import { allPosts, Post } from "contentlayer/generated";
import { notFound } from "next/navigation";

function getPost(params) {
  return allPosts.find((post: Post) => post.slug === params.slug);
}

export default async function Head({ params }) {
  const post: Post = getPost(params);

  if (!post) {
    return null;
  }

  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.subtitle} />
    </>
  );
}
