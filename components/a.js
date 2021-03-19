import React from 'react'

function A({ children, href, blank, ...props }) {
  const isBlank = blank
    ? {
        rel: 'noopener noreferrer',
        target: '_blank'
      }
    : {}

  return (
    <a href={href} {...isBlank} className="underline" {...props}>
      {children}
    </a>
  )
}

export default A
