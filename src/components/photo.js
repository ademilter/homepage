import React from 'react'
import Img from 'gatsby-image'

import styles from './photo.module.css'

function Photo({ img, aspectRatio = '16-9', children }) {
  return (
    <figure className={styles.photo}>
      {img && (
        <div className={`aspect-ratio size-${aspectRatio}`}>
          <Img
            className={['aspect-ratio-item', styles.photoHover].join(' ')}
            fluid={img}
          />
        </div>
      )}
      {children && (
        <figcaption className={styles.caption}>{children}</figcaption>
      )}
    </figure>
  )
}

export default Photo
