import React from 'react'
import { Text, Link, Box, Container, useColorModeValue } from '@chakra-ui/react'
import Newsletter from '@comp/newsletter'

function Footer() {
  const textColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')

  return (
    <Box as="footer" pb={14}>
      <Container maxW="2xl" centerContent>
        <Newsletter />

        <Box mt={14}>
          <Text color={textColor}>
            Bu web sitesinin kaynak kodlarına{' '}
            <Text
              as={Link}
              href="https://github.com/ademilter/homepage"
              isExternal
            >
              Github üzerinden
            </Text>{' '}
            ulaşabilirsiniz ❤️
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
