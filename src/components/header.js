// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import { X, Menu } from './icons'

import styles from './header.module.css'

const MENU = [
  { name: 'Anasayfa', url: '/' },
  { name: 'Fotoğraflar', url: '/photos' },
  { name: 'Eğitim Videoları', url: '/videos' },
  { name: 'Blog Yazıları', url: '/blog' },
  { name: 'S.S.S', url: '/faq' },
  { name: 'Alıntılar', url: '/excerpts' },
  { name: 'Çalışma Masam', url: '/my-desk' }
]

function Header({ pathname }) {
  const [showNav, setShowMenu] = React.useState(false)
  const activePage = MENU.find(_ => _.url === pathname)

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setShowMenu(!showNav)}
      >
        {showNav ? (
          <X className={styles.iconMenu} />
        ) : (
          <>
            {activePage && activePage.name}
            <Menu className={styles.iconMenu} />
          </>
        )}
      </button>

      {showNav && (
        <nav>
          {MENU.map(page => {
            return (
              <Link
                key={page.url}
                to={page.url}
                activeClassName="active"
                className={styles.link}
              >
                {page.name}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}

Header.propTypes = {
  // siteTitle: PropTypes.string
}

Header.defaultProps = {
  // siteTitle: ''
}

export default Header
