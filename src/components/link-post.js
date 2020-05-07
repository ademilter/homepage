import React from 'react'
import Url from 'url'
import { graphql } from 'gatsby'

import Post from './post'

import styles from './link-post.module.css'

function BlogPost({ title, url }) {
  const { host } = Url.parse(url)

  return (
    <Post title={title} url={url} className={styles.post}>
      <Post.Meta>
        <span>{host}</span>
      </Post.Meta>
    </Post>
  )
}

export const query = graphql`
  fragment LinkPost on MarkdownRemark {
    id
    frontmatter {
      title
      url
      date
    }
  }
`

export default BlogPost
