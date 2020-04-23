import React from 'react'

import styles from './sidebar-title.module.css'

function SidebarTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>
}

export default SidebarTitle
