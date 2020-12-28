import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { X, ChevronDown } from './icons'

import styles from './header.module.css'

const MENU = [
  { name: 'Anasayfa', url: '/' },
  { name: 'Fotoğraflar', url: '/photos' },
  { name: 'Eğitimler', url: '/videos' },
  { name: 'Masam', url: '/desk' },
  { name: 'Beğendiklerim', url: '/likes' }
  // { name: 'Yazılar', url: '/blog' },
  // { name: 'S.S.S.', url: '/faq' },
  // { name: 'Alıntılar', url: '/quotes' },
]

function Header() {
  const router = useRouter()

  const [showNav, setShowMenu] = useState(false)
  const activePage = MENU.find((_) => _.url === router.pathname)

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setShowMenu(!showNav)}
      >
        {!showNav && <span>{activePage && activePage.name}</span>}
        <span>{showNav ? <X /> : <ChevronDown />}</span>
      </button>

      {showNav && (
        <nav>
          {MENU.map((page) => {
            return (
              <Link key={page.url} href={page.url}>
                <a className={styles.link}>{page.name}</a>
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Header
