import Link from 'next/link'
import { useRouter } from 'next/router'
import { Stack } from '@chakra-ui/react'
import React from 'react'

const MENU = [
  { name: 'Giriş', url: '/' },
  // { name: 'Hakkımda', url: '/about' },
  { name: 'Fotoğraf', url: '/photos' },
  { name: 'Eğitim', url: '/videos' },
  { name: 'Notlar', url: '/notes' },
  { name: 'Masam', url: '/desk' },
  { name: 'Yer imleri', url: '/bookmarks' }
  // { name: 'S.S.S.', url: '/faq' },
  // { name: 'Alıntılar', url: '/quotes' },
]

function MenuLink({ url, name }) {
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
    <header className="py-6 bg-gray-900 text-gray-400">
      <div className="max-w-3xl mx-auto">
        <Stack as="nav" spacing={4} direction={['column', 'row']}>
          {MENU.map((item) => (
            <MenuLink key={item.url} {...item} />
          ))}
        </Stack>
      </div>
    </header>
  )
}

export default Header
