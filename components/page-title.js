import React from 'react'
import cn from 'classnames'

function PageTitle({ children, className, ...props }) {
  return (
    <p className={cn('text-2xl text-highlight', className)} {...props}>
      {children}
    </p>
  )
}

export default PageTitle
