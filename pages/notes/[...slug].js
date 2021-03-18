import { useHydrate } from 'next-mdx/client'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { mdxComponents } from 'components/mdx-components'
import { Container } from '@chakra-ui/react'
import React from 'react'
import PageTransition from '@comp/page-transition'

function PostPage({ post }) {
  const content = useHydrate(post, {
    components: mdxComponents
  })
  return (
    <PageTransition>
      <Container maxW="2xl">
        <article>
          <h1 className="text-4xl font-extrabold">{post.frontMatter.title}</h1>
          {post.frontMatter.excerpt ? (
            <p className="text-xl">{post.frontMatter.excerpt}</p>
          ) : null}
          <hr />
          {content}
        </article>
      </Container>
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
