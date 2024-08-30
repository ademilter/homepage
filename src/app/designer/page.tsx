import { allPosts } from "@content";
import { MDXContent } from "@content-collections/mdx/react";
import components from "@/components/mdx";

export default function App() {
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post._meta.path} className="mt-6">
            <h2>{post.title}</h2>
            <div>{post.subtitle}</div>
            <div>{post.date}</div>
            {/*<div>{post.draft}</div>*/}
            {/*<div>{post.tweetUrl}</div>*/}
            {/*<div className="text-xs">{JSON.stringify(post.content)}</div>*/}
            {/*<MDXContent code={post.mdx} components={components} />*/}
          </li>
        ))}
      </ul>
    </main>
  );
}
