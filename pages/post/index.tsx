import Head from "next/head";
import NextLink from "next/link";
import { tr } from "date-fns/locale";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import PageTransition from "@/components/page-transition";
import Title from "@/components/title";
import Container from "@/components/container";

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

        <Container>
          <Title>Blog yazıları ve kısa notlar</Title>
        </Container>

        <Container className="mt-20">
          <div className="space-y-8">
            {posts.map((post: Post) => {
              return (
                <article key={post._id}>
                  <header>
                    <h3 className="shine font-semibold">
                      <NextLink href={`/post/${post.slug}`}>
                        <a>{post.title}</a>
                      </NextLink>
                    </h3>
                    <p className="mt-1">{post.subtitle}</p>
                  </header>

                  <footer className="mt-1 flex items-center space-x-2">
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
        </Container>
      </PageTransition>
    </>
  );
}
