import React from 'react'
import { Text, Link, Box, Container } from '@chakra-ui/react'

function Footer() {
  return (
    <Box as="footer" py={10}>
      <Container maxW="2xl">
        <Text color="gray.500">
          Bu web sitesinin{' '}
          <Link href="https://github.com/ademilter/homepage" isExternal>
            <b>kaynak kodlarına</b>
          </Link>{' '}
          Github üzerinden ulaşabilirsiniz ❤️
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
