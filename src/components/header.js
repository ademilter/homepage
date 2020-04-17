import React from 'react'
import { Link } from 'gatsby'

import { X, ChevronDown } from './icons'

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
          <X className={styles.iconClose} />
        ) : (
          <>
            {activePage && activePage.name}
            <ChevronDown className={styles.iconArrow} />
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

export default Header
