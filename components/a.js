import React from 'react'
import cn from 'classnames'

function A({ children, href, blank, className, ...props }) {
  const isBlank = blank
    ? {
        rel: 'noopener noreferrer',
        target: '_blank'
      }
    : {}

  return (
    <a
      href={href}
      {...isBlank}
      className={cn('underline hover:underline', className)}
      {...props}
    >
      {children}
    </a>
  )
}

export default A
