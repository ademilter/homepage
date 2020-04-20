import React from 'react'
import { graphql } from 'gatsby'

import { Link, Meta, Photo } from './index'

import styles from './video-post.module.css'

function VidepPost({ title, totalVideo, totalDuration, url, photo }) {
  return (
    <article className={styles.post}>
      <Link url={url}>
        <Photo img={photo.childImageSharp.fluid}>
          <Meta
            title={title}
            desc1={[`${totalVideo} video`, `${totalDuration} dakika`].join(
              ' • '
            )}
          />
        </Photo>
      </Link>
    </article>
  )
}

export const query = graphql`
  fragment VideoPost on MarkdownRemark {
    id
    frontmatter {
      title
      desc
      totalVideo
      totalDuration
      url
      date
      category
      photo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default VidepPost
