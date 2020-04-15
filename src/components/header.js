import PropTypes from 'prop-types'
import React from 'react'

import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <r-grid columns="12">
          <r-cell span="2">
            <button type="button" className={styles.button}>
              Fotoğraflar
            </button>
          </r-cell>
        </r-grid>
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
