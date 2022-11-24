import { allPosts, Post } from "contentlayer/generated";

function getPost(params) {
  return allPosts.find((post: Post) => post.slug === params.slug);
}

export default async function Head({ params }) {
  const post: Post = getPost(params);

  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.subtitle} />
    </>
  );
}
