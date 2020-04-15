import React from 'react'
import Img from 'gatsby-image'

import Meta from './meta'

import styles from './photo.module.css'

function Photo({ img, title, description, aspectRatio = '16-9' }) {
  return (
    <figure className={styles.photo}>
      {img && (
        <div className={`aspect-ratio size-${aspectRatio}`}>
          <Img className="aspect-ratio-item" fluid={img} backgroundColor />
        </div>
      )}
      <figcaption className={styles.caption}>
        <Meta title={title} description={description} />
      </figcaption>
    </figure>
  )
}

export default Photo
