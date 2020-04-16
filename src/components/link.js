import React from 'react'

import styles from './link.module.css'

function Link({ children }) {
  return (
    <a
      href=""
      className={styles.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}

export default Link
