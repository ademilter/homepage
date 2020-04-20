import React from 'react'

import { Link, Meta, Photo } from './index'

import styles from './photo-post.module.css'

function PhotoPost({ aspectRatio, url, desc, photo, title, location, device }) {
  return (
    <article className={styles.post}>
      <Link url={url}>
        <Photo aspectRatio={aspectRatio} img={photo.childImageSharp.fluid}>
          <Meta
            title={title}
            desc1={desc}
            desc2={[location, device].join(' • ')}
          />
        </Photo>
      </Link>
    </article>
  )
}

export default PhotoPost
