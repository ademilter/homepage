import React from 'react'

function Meta({ title, description }) {
  return (
    <div>
      {title && <p>{title}</p>}
      {description && <p className="c-default-light fs-small">{description}</p>}
    </div>
  )
}

export default Meta
