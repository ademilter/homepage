import React from 'react'

function Meta({ title, desc1, desc2 }) {
  return (
    <div>
      {title && <p>{title}</p>}
      {desc1 && <p className="c-default-light fs-small">{desc1}</p>}
      {desc2 && <p className="c-default-light fs-small">{desc2}</p>}
    </div>
  )
}

export default Meta
