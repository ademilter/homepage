import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

import styles from './header.module.css'

const MENU = [
  { name: 'Anasayfa', url: '/' },
  { name: 'Fotoğraflar', url: '/photos' },
  { name: 'Eğitimler', url: '/videos' },
  { name: 'Masam', url: '/desk' },
  { name: 'Yer imleri', url: '/bookmarks' }
  // { name: 'Yazılar', url: '/blog' },
  // { name: 'S.S.S.', url: '/faq' },
  // { name: 'Alıntılar', url: '/quotes' },
]

function Header() {
  return (
    <header>
      <nav>
        {MENU.map((page) => {
          return (
            <Link as={NextLink} key={page.url} href={page.url}>
              <a className={styles.link}>{page.name}</a>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
