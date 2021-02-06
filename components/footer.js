import React from 'react'
import { Text, Link, Box, Container, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  const textColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')

  return (
    <Box as="footer" pb={10}>
      <Container maxW="2xl">
        <Text color={textColor}>
          Bu web sitesinin{' '}
          <Text
            as={Link}
            href="https://github.com/ademilter/homepage"
            isExternal
          >
            <Text as="b">kaynak kodlarına</Text>
          </Text>{' '}
          Github üzerinden ulaşabilirsiniz ❤️
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
