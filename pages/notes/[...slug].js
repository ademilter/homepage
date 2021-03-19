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
      <div className="c-sm">
        <article className="prose lg:prose-lg">
          <h1>{post.frontMatter.title}</h1>
          {post.frontMatter.excerpt ? <p>{post.frontMatter.excerpt}</p> : null}
          {content}
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
