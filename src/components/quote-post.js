import React from 'react'
import { graphql } from 'gatsby'

import Post from './post'

function QuotePost({ quote, url, author }) {
  return (
    <Post title={quote} url={url}>
      <Post.Meta>{author}</Post.Meta>
    </Post>
  )
}

export const query = graphql`
  fragment QuotePost on MarkdownRemark {
    id
    frontmatter {
      quote
      author
      url
      date
    }
  }
`

export default QuotePost
