import React from 'react'
import cn from 'classnames'

import styles from './grid.module.css'

export function Grid({ children, className, ...props }) {
  return (
    <div className={cn(styles.grid, className)} {...props}>
      {children}
    </div>
  )
}

export function Col({ children, className, ...props }) {
  return (
    <div className={cn(styles.col, className)} {...props}>
      {children}
    </div>
  )
}
