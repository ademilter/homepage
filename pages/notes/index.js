import { getAllNodes } from 'next-mdx';
import NextLink from 'next/link';
import PageTransition from 'components/page-transition';
import PageTitle from 'components/page-title';
import Head from 'next/head';

function NotePage({ posts }) {
  return (
    <PageTransition>
      <Head>
        <title>Notes - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>Kendime notlar</PageTitle>
        <p>
          bu sayfa henüz beta aşamasında. medium'da yayınladığım yazıları en
          kısa sürede buraya taşıyacağım inş :)
        </p>

        <div className="mt-20">
          {posts.length ? (
            posts.map((post) => (
              <article key={post.slug} className="mb-10">
                <NextLink href={post.url} passHref>
                  <a className="text-lg leading-6 font-bold text-highlight">
                    {post.frontMatter.title}
                  </a>
                </NextLink>
                <p>
                  <time>{post.frontMatter.date}</time>
                </p>
              </article>
            ))
          ) : (
            <p>Hiç not yazılmamış. İlginç...</p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const posts = await getAllNodes('post');

  return {
    props: {
      posts,
    },
  };
}

export default NotePage;
