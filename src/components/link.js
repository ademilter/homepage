import React from 'react'

import styles from './link.module.css'

function Link({ url = '/', children }) {
  return (
    <a
      className={styles.link}
      rel="noopener noreferrer"
      target="_blank"
      href={url}
    >
      {children}
    </a>
  )
}

export default Link
