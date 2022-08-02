import { allPosts, Post } from "contentlayer/generated";
import PageTransition from "components/page-transition";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "components/mdx-components";
import { tr } from "date-fns/locale";
import cx from "classnames";
import Claps from "@upstash/claps";

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

        <article className="post c-small">
          <header>
            <h1 className="text-3xl font-semibold">{post.title}</h1>
            <h2 className="mt-2 text-xl opacity-70">{post.subtitle}</h2>

            <div className="mt-10 flex items-center space-x-2 opacity-50">
              <time dateTime={post.date}>
                {format(parseISO(post.date), "d LLLL yyyy", {
                  locale: tr,
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime.text}</span>
            </div>
          </header>

          <div className="post-body mt-10 leading-relaxed">
            <Component
              components={{
                ...MDXComponents,
                strong: (props) => {
                  return <strong className="font-semibold" {...props} />;
                },
                a: (props) => {
                  return (
                    <a
                      className="underline decoration-zinc-400 decoration-2 underline-offset-1 dark:decoration-zinc-500"
                      {...props}
                    />
                  );
                },
                hr: () => {
                  return (
                    <hr className="my-14 border-0 border-b border-black opacity-10 dark:border-white" />
                  );
                },
                ul: (props) => {
                  return (
                    <ul
                      className="list-inside list-disc space-y-2 marker:text-zinc-400 dark:marker:text-zinc-600"
                      {...props}
                    />
                  );
                },
                ol: (props) => {
                  return (
                    <ol
                      className="list-inside list-decimal space-y-2"
                      {...props}
                    />
                  );
                },
                blockquote: (props) => {
                  return (
                    <blockquote
                      className="border-l-4 border-l-zinc-300 px-4 py-2 italic dark:border-l-zinc-600"
                      {...props}
                    />
                  );
                },
                Quote: ({ caption, cite, children, ...props }) => {
                  return (
                    <figure
                      className="-mx-6 bg-indigo-50 p-6 italic text-indigo-900 shadow dark:bg-indigo-900 dark:bg-opacity-60 dark:text-indigo-200 sm:rounded-lg"
                      {...props}
                    >
                      <blockquote>{children}</blockquote>
                      <figcaption className="mt-4 text-sm opacity-60">
                        {`— ${caption}, `} <cite>{cite}</cite>
                      </figcaption>
                    </figure>
                  );
                },
                Figure: ({ src, title, full = true, width }) => {
                  const imageStyle = {};

                  if (width) {
                    imageStyle["width"] = "100%";
                    imageStyle["maxWidth"] = width;
                  }

                  return (
                    <figure
                      className={cx(
                        "text-center",
                        full && "md:-mx-24 lg:-mx-40 xl:-mx-60"
                      )}
                    >
                      <img
                        className="inline-flex rounded-lg"
                        src={src}
                        style={imageStyle}
                      />
                      <figcaption className="mx-16 mt-4 text-sm opacity-50">
                        {title}
                      </figcaption>
                    </figure>
                  );
                },
                h2: (props) => {
                  return (
                    <h2
                      className="text-2xl font-bold leading-tight"
                      {...props}
                    />
                  );
                },
                h3: (props) => {
                  return (
                    <h3
                      className="!mb-2 text-xl font-semibold leading-tight"
                      {...props}
                    />
                  );
                },
                h4: (props) => {
                  return (
                    <h4
                      className="!mb-1 text-lg font-semibold leading-snug"
                      {...props}
                    />
                  );
                },
                h5: (props) => {
                  return <h5 className="font-semibold" {...props} />;
                },
              }}
            />
          </div>
        </article>

        <Claps fixed="center" replyUrl={post.tweetUrl} />
      </PageTransition>
    </>
  );
}
