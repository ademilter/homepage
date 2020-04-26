import React from 'react'
import { graphql } from 'gatsby'

import Post from './post'

function QuotePost({ quote, author }) {
  return (
    <Post title={quote}>
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
      date
    }
  }
`

export default QuotePost
