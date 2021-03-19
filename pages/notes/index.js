import { getAllNodes } from 'next-mdx'
import NextLink from 'next/link'
import PageTransition from '@comp/page-transition'

function NotePage({ posts }) {
  return (
    <PageTransition>
      <div className="c-sm">
        <p className="text-2xl">Kendime notlar</p>

        <div className="mt-20">
          {posts.length ? (
            posts.map((post) => (
              <article key={post.slug}>
                <NextLink href={post.url} passHref>
                  <a>{post.frontMatter.title}</a>
                </NextLink>
              </article>
            ))
          ) : (
            <p>Hiç not yazılmamış. İlginç...</p>
          )}
        </div>
      </div>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const posts = await getAllNodes('post')

  return {
    props: {
      posts
    }
  }
}

export default NotePage
