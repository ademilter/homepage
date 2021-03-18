import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Text,
  Stack,
  Link,
  Container,
  useColorModeValue
} from '@chakra-ui/react'

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
  const linkColor = useColorModeValue(
    activePage ? 'blackAlpha.600' : 'blackAlpha.800',
    activePage ? 'whiteAlpha.600' : 'whiteAlpha.800'
  )
  const linkHoverColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <NextLink href={url} passHref>
      <Text
        as={Link}
        decoration="none"
        color={linkColor}
        _hover={{ color: linkHoverColor }}
      >
        {name}
      </Text>
    </NextLink>
  )
}

function Header() {
  const bgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  return (
    <Box as="header" py={6} bg={bgColor}>
      <Container maxW="2xl">
        <Stack as="nav" spacing={4} direction={['column', 'row']}>
          {MENU.map((item) => (
            <MenuLink key={item.url} {...item} />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default Header
