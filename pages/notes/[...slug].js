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
            <time>{post.frontMatter.date}</time>
            {post.frontMatter.excerpt ? (
              <p className="mt-2 text-xl">{post.frontMatter.excerpt}</p>
            ) : null}
          </header>
          <hr className="my-6 border-gray-700" />
          <div className="prose dark:prose-dark">{content}</div>
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
