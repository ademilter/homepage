import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MENU = [
  { name: 'Giriş', url: '/' },
  { name: 'Fotoğraf', url: '/photos' },
  { name: 'Eğitim', url: '/videos' },
  { name: 'Notlar', url: '/notes' },
  { name: 'Masam', url: '/desk' },
  { name: 'Yer imleri', url: '/bookmarks' }
  // { name: 'Hakkımda', url: '/about' },
  // { name: 'S.S.S.', url: '/faq' },
  // { name: 'Alıntılar', url: '/quotes' },
]

function NavLink({ url, name }) {
  const router = useRouter()
  const activePage = url === router.pathname

  return (
    <Link href={url}>
      <a>{name}</a>
    </Link>
  )
}

function Header() {
  return (
    <header className="py-6 bg-gray-100">
      <div className="c-sm">
        <nav
          className="
          flex flex-col space-y-2
          md:space-y-0 md:space-x-4 md:flex-row"
        >
          {MENU.map((item) => (
            <NavLink key={item.url} {...item} />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
