import React from 'react'

import styles from './button.module.css'

function Button({ children, className, ...props }) {
  return (
    <a
      role="button"
      className={[styles.button, className].join(' ')}
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

export default Button
