import React from 'react'
import cn from 'classnames'

import styles from './container.module.css'

function Container({ children, className, ...props }) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  )
}

export default Container
