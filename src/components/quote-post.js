import React from 'react'
import { graphql } from 'gatsby'

import Post from './post'

import styles from './quote-post.module.css'

function QuotePost({ quote, author }) {
  return (
    <Post title={`${quote}`} className={styles.post}>
      <Post.Meta>
        <span>{author}</span>
        {' • '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://twitter.com/intent/tweet?url=${encodeURI(
            window.location.href
          )}&text=${encodeURI(`❝${quote}❞`)}`}
        >
          Tweet
        </a>
      </Post.Meta>
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
