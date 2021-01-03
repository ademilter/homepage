import NextLink from 'next/link'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  Avatar,
  HStack,
  Text,
  Box,
  Container
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const MENU = [
  { name: 'Anasayfa', url: '/' },
  { name: 'Fotoğraflar', url: '/photos' },
  // { name: 'Hakkımda', url: '/about' },
  { name: 'Eğitimler', url: '/videos' },
  { name: 'Masam', url: '/desk' },
  { name: 'Yer imleri', url: '/bookmarks' }
  // { name: 'Yazılar', url: '/blog' },
  // { name: 'S.S.S.', url: '/faq' },
  // { name: 'Alıntılar', url: '/quotes' },
]

function Header() {
  return (
    <Box as="header" py={10}>
      <Container maxW="2xl">
        <Menu as="nav">
          <MenuButton
            as={Button}
            ml={-3}
            px={3}
            py={2}
            h="auto"
            bg="transparent"
          >
            {/* visible */}
            <HStack spacing={2}>
              <Avatar size="sm" src="/ademilter.jpg" name="Adem ilter" />
              <Text>Profile</Text>
              <ChevronDownIcon />
            </HStack>
          </MenuButton>

          {/* dropdown */}
          <MenuList>
            {/* row */}
            {MENU.map((item) => {
              return (
                <MenuItem p={0} key={item.url} passHref>
                  <NextLink href={item.url}>
                    <Link px={3} py={2} w="full">
                      {item.name}
                    </Link>
                  </NextLink>
                </MenuItem>
              )
            })}
            <MenuDivider />

            {/* row */}
            <MenuItem p={0}>
              <Link px={3} py={2} w="full">
                Twitter
              </Link>
            </MenuItem>
            <MenuItem p={0}>
              <Link px={3} py={2} w="full">
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Container>
    </Box>
  )
}

export default Header
