import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import PageTransition from "components/page-transition";
import Head from "next/head";
import NextLink from "next/link";
import { tr } from "date-fns/locale";
import Text from "components/text";

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      posts: posts.map((post: Post) => {
        const { body, type, _raw, ...rest } = post;
        return rest;
      }),
    },
  };
}

export default function PostsPage({ posts }: { posts: Post[] }) {
  return (
    <>
      <PageTransition>
        <Head>
          <title>Yazılar - Adem ilter</title>
        </Head>

        <div className="c-small">
          <Text as="h2" size="pageTitle">
            Blog yazıları ve kısa notlar
          </Text>
        </div>

        <div className="c-small mt-20">
          {posts.map((post: Post) => {
            return (
              <article key={post._id}>
                <h3 className="font-semibold">
                  <NextLink href={`/post/${post.slug}`}>
                    <a>{post.title}</a>
                  </NextLink>
                </h3>
                <footer className="flex items-center space-x-2 text-zinc-500">
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), "d LLLL yyyy", {
                      locale: tr,
                    })}
                  </time>
                  <span className="opacity-50">·</span>
                  <span>{post.readingTime.text}</span>
                </footer>
              </article>
            );
          })}
        </div>
      </PageTransition>
    </>
  );
}
