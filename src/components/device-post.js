import React from 'react'
import { graphql } from 'gatsby'

import { Meta, Photo } from './index'

import styles from './device-post.module.css'

function DevicePost({ name, what, good, bad, photo }) {
  return (
    <article className={styles.post}>
      <Photo aspectRatio="4-3" img={photo.childImageSharp.fluid}>
        <Meta title={name} desc1={what} />
      </Photo>
    </article>
  )
}

export const query = graphql`
  fragment DevicePost on MarkdownRemark {
    id
    frontmatter {
      name
      what
      category
      good
      bad
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

export default DevicePost
