import { allPosts, Post } from "contentlayer/generated";
import { format, formatDistanceToNowStrict, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx";
import { tr } from "date-fns/locale";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import ClapsButton from "@/components/claps";
import BaseLink from "@/components/link";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: Props["params"];
}) {
  const post = allPosts.find((post: Post) => post.slug === params.slug) as Post;

  return {
    title: post.title,
    description: post.subtitle,
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostCommits(filePath: string) {
  const res = await fetch(
    `https://api.github.com/repos/ademilter/homepage/commits?path=${filePath}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKENS}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BlogPost({ params }) {
  const post: Post = allPosts.find(
    (post: Post) => post.slug === params.slug
  ) as Post;

  if (!post) {
    notFound();
  }

  const data = await getPostCommits(post._raw.sourceFilePath);

  return (
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

        <Mdx code={post.body.code} />

        <div className="mt-20 flex justify-center">
          <ClapsButton url={post.tweetUrl} />
        </div>

        <div className="mt-20 divide-y rounded border dark:divide-zinc-800 dark:border-zinc-800">
          {data.map((c) => (
            <BaseLink
              key={c.node_id}
              href={c.html_url}
              className="flex px-2 py-3 text-sm"
            >
              <span className="grow">{c.commit.message}</span>
              <span>
                {formatDistanceToNowStrict(parseISO(c.commit.committer.date), {
                  addSuffix: true,
                  locale: tr,
                })}
              </span>
            </BaseLink>
          ))}
        </div>
      </article>
    </Container>
  );
}
