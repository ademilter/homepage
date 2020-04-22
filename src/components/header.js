import React from 'react'
import { Link } from 'gatsby'

import { X, ChevronDown } from './icons'

import styles from './header.module.css'

const MENU = [
  { name: 'Anasayfa', url: '/' },
  { name: 'Fotoğraflar', url: '/photos' },
  { name: 'Eğitimler', url: '/videos' },
  { name: 'Yazılar', url: '/blog' },
  { name: 'S.S.S', url: '/faq' },
  { name: 'Alıntılar', url: '/quotes' }
  // { name: 'Çalışma Masam', url: '/my-desk' }
]

function trailingSlashes(pathname) {
  const hasSlashes = pathname.split('/').length > 2
  return hasSlashes ? pathname.slice(0, -1) : pathname
}

function Header({ pathname }) {
  const [showNav, setShowMenu] = React.useState(false)
  const activePage = MENU.find(_ => _.url === trailingSlashes(pathname))

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setShowMenu(!showNav)}
      >
        <span>{activePage && activePage.name}</span>
        <span className={styles.icon}>{showNav ? <X /> : <ChevronDown />}</span>
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
