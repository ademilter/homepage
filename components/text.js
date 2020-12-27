import React from 'react'
import cn from 'classnames'

import styles from './text.module.css'

export function TextTitle({ children, className, ...props }) {
  return (
    <h5 className={cn(styles.title, className)} {...props}>
      {children}
    </h5>
  )
}

export function TextSmall({ children, className, ...props }) {
  return (
    <p className={cn(styles.desc, className)} {...props}>
      {children}
    </p>
  )
}
