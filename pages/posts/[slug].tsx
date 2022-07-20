import { allPosts, Post } from "contentlayer/generated";
import PageTransition from "components/page-transition";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "components/mdx-components";
import { tr } from "date-fns/locale";

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
          <title>Yazılar - Adem ilter</title>
        </Head>

        <article className="post c-small">
          <header>
            <h1 className="text-highlight text-3xl font-semibold">
              {post.title}
            </h1>

            <div className="mt-2 flex items-center space-x-2 text-zinc-500">
              <time dateTime={post.date}>
                {format(parseISO(post.date), "d LLLL yyyy", {
                  locale: tr,
                })}
              </time>
              <span className="opacity-50">·</span>
              <span>{post.readingTime.text}</span>
            </div>
          </header>

          <div className="post-body mt-10 leading-relaxed">
            <Component
              components={{
                ...MDXComponents,
                h2: (props) => {
                  return (
                    <h2
                      className="text-highlight text-2xl font-semibold leading-tight"
                      {...props}
                    />
                  );
                },
                h3: (props) => {
                  return (
                    <h3
                      className="text-highlight text-xl font-semibold leading-tight"
                      {...props}
                    />
                  );
                },
                h4: (props) => {
                  return (
                    <h4
                      className="text-highlight text-lg font-semibold leading-snug"
                      {...props}
                    />
                  );
                },
                h5: (props) => {
                  return (
                    <h5 className="text-highlight font-semibold" {...props} />
                  );
                },
              }}
            />
          </div>
        </article>
      </PageTransition>
    </>
  );
}
