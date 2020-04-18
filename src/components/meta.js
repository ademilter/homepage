import React from 'react'

import styles from './meta.module.css'

function Meta({ title, desc1, desc2, desc3, ...props }) {
  return (
    <div {...props}>
      {title && (
        <h5 className={['meta-title', styles.title].join(' ')}>{title}</h5>
      )}
      {desc1 && <p className={styles.desc}>{desc1}</p>}
      {desc2 && <p className={styles.desc}>{desc2}</p>}
      {desc3 && <p className={styles.desc}>{desc3}</p>}
    </div>
  )
}

export default Meta
