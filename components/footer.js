import React from 'react'
import { Text, Link, Box, Container } from '@chakra-ui/react'

function Footer() {
  return (
    <Box as="footer" py={10}>
      <Container maxW="2xl">
        <Text>
          Bu web sitesinin{' '}
          <Link href="https://github.com/ademilter/homepage" isExternal>
            kaynak kodlarına
          </Link>{' '}
          açıktır ❤️
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
