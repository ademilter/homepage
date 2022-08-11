import { allPosts, Post } from "contentlayer/generated";
import PageTransition from "@/components/page-transition";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/mdx-components";
import { tr } from "date-fns/locale";
import Claps from "@upstash/claps";
import Container from "@/components/container";
import cx from "classnames";

export async function getStaticPaths() {
  const paths = allPosts.map((post: Post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find((post: Post) => post.slug === params.slug);

  if (!post) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <PageTransition>
        <Head>
          <title>{post.title} - Adem ilter</title>
        </Head>

        <Container>
          <article className="post">
            <header>
              <h1 className="shine text-2xl font-semibold">{post.title}</h1>
              <h2 className="mt-2 text-xl">{post.subtitle}</h2>

              <div className="mt-10 flex items-center space-x-2 opacity-60">
                <time dateTime={post.date}>
                  {format(parseISO(post.date), "d LLLL yyyy", {
                    locale: tr,
                  })}
                </time>
                <span>·</span>
                <span>{post.readingTime.text}</span>
              </div>
            </header>

            <div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-zinc-200">
              <Component
                components={{
                  ...MDXComponents,
                }}
              />
            </div>

            <div
              className={cx(
                "pointer-events-none sticky left-0 right-0 bottom-0 z-10 h-32 md:-mx-24 lg:-mx-40 xl:-mx-60",
                "bg-gradient-to-t from-white to-transparent dark:from-zinc-900"
              )}
            />

            <div className="fixed z-50">
              <Claps fixed="center" replyUrl={post.tweetUrl} />
            </div>
          </article>
        </Container>
      </PageTransition>
    </>
  );
}
