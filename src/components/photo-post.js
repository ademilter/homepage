import React from 'react'
import { graphql } from 'gatsby'

import { Link, Meta, Photo } from './index'

import styles from './photo-post.module.css'

function PhotoPost({ aspectRatio, url, desc, photo, title, location, device }) {
  return (
    <article className={styles.post}>
      <Link url={url}>
        <Photo aspectRatio={aspectRatio} img={photo.childImageSharp.fluid}>
          <Meta
            title={title}
            desc1={[location, device].join(' • ')}
            desc2={desc}
          />
        </Photo>
      </Link>
    </article>
  )
}

export const query = graphql`
  fragment PhotoPost on MarkdownRemark {
    id
    frontmatter {
      title
      desc
      location
      device
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

export default PhotoPost
