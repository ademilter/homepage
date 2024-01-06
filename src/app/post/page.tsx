import NextLink from "next/link";
import { tr } from "date-fns/locale";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yazılar",
  description: "Blog yazıları ve kısa notlar",
};

function getData() {
  const posts: Post[] = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return posts.map((post: Post) => post);
}

export default function PostsPage() {
  const posts: Post[] = getData();

  return (
    <>
      <Container>
        <h1 className="text-2xl">{metadata.description}</h1>
      </Container>

      <Container className="mt-16 md:mt-12">
        <div className="">
          {posts.map((post) => {
            return (
              <article
                key={post._id}
                className="border-b border-b-zinc-200 py-4 md:py-8 dark:border-b-zinc-800"
              >
                <header>
                  <h3 className="font-semibold">
                    <NextLink href={`/post/${post.slug}`}>
                      {post.title}
                    </NextLink>
                  </h3>
                  <p className="mt-1 opacity-70 dark:opacity-60">
                    {post.subtitle}
                  </p>
                </header>

                <footer className="mt-1 flex items-center space-x-2 font-mono text-sm uppercase tracking-wider opacity-50 dark:opacity-40">
                  <time dateTime={post.date}>
                    {format(parseISO(post.date!), "d LLLL yyyy", {
                      locale: tr,
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime.text}</span>
                </footer>
              </article>
            );
          })}
        </div>
      </Container>
    </>
  );
}
