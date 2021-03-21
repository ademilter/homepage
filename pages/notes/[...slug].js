import { useHydrate } from 'next-mdx/client'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { mdxComponents } from 'components/mdx-components'
import React from 'react'
import PageTransition from '@comp/page-transition'

function PostPage({ post }) {
  const content = useHydrate(post, {
    components: mdxComponents
  })

  return (
    <PageTransition>
      <div className="c-small">
        <article>
          <header>
            <h1 className="text-4xl font-bold text-highlight">
              {post.frontMatter.title}
            </h1>
            {post.frontMatter.summary ? (
              <p className="mt-2 text-2xl">{post.frontMatter.summary}</p>
            ) : null}
          </header>
          <hr className="my-6" />
          <div className="prose lg:prose-lg dark:prose-dark">{content}</div>
        </article>
      </div>
    </PageTransition>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}

export default PostPage
