import React from 'react'
import { Box, Container } from '@chakra-ui/react'

function Footer() {
  return (
    <Box as="footer" py={10}>
      <Container maxW="2xl">
        <p>
          Bu web sitesini NextJS ile kodlayıp,{' '}
          <a
            href="https://github.com/ademilter/homepage"
            target="_blank"
            rel="noopener noreferrer"
          >
            kaynak kodlarını
          </a>{' '}
          github üzerinden paylaştım &lt;3
        </p>
      </Container>
    </Box>
  )
}

export default Footer
