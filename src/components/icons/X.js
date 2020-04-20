import * as React from 'react'

function SvgX(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export default SvgX
