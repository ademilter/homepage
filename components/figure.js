import React from 'react'

import styles from './figure.module.css'
import AspectRatio from '@comp/aspect-ratio'

function Figure({ src, alt, ratio, children }) {
  return (
    <figure className={styles.figure}>
      <AspectRatio ratio={ratio}>
        <img src={src} alt={alt} />
      </AspectRatio>

      {children && (
        <figcaption className={styles.caption}>{children}</figcaption>
      )}
    </figure>
  )
}

export default Figure
