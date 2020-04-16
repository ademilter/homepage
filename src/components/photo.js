import React from 'react'
import Img from 'gatsby-image'

import Meta from './meta'

import styles from './photo.module.css'

function Photo({ img, title, desc1, desc2, aspectRatio = '16-9' }) {
  return (
    <figure className={styles.photo}>
      {img && (
        <div className={`aspect-ratio size-${aspectRatio}`}>
          <Img className="aspect-ratio-item" fluid={img} />
        </div>
      )}
      <figcaption className={styles.caption}>
        <Meta title={title} desc1={desc1} desc2={desc2} />
      </figcaption>
    </figure>
  )
}

export default Photo
