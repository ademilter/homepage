import React from 'react'
import cn from 'classnames'

import styles from './grid.module.css'

export default function Grid({ children, className, props }) {
  return (
    <div
      col="2"
      col-t="4"
      col-d="12"
      className={cn(styles.grid, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function ColSidebar({ children, className, props }) {
  return (
    <div
      span="2"
      span-t="1"
      span-d="1-2"
      className={cn(styles.col, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function ColContent({ children, className, props }) {
  return (
    <div
      span="2"
      span-t="2-4"
      span-d="3-10"
      className={cn(styles.col, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function ColExtra({ children, className, props }) {
  return (
    <div
      span="2"
      span-t="2-4"
      span-d="11-12"
      className={cn(styles.col, className)}
      {...props}
    >
      {children}
    </div>
  )
}
