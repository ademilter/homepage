import React from 'react'

import styles from './aspect-ratio.module.css'

function AspectRatio({ children, ratio = '16-9' }) {
  return (
    <div className={[styles.container, `--${ratio}`].join(' ')}>{children}</div>
  )
}

export default AspectRatio
