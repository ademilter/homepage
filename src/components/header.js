import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './header.module.css'

function Header({ siteTitle }) {
  return (
    <header className={styles.header}>
      <div className="grid">
        <div className="col-sidebar">
          <Link to="/">{siteTitle}</Link>
        </div>
        <div className="col-extra">c</div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
