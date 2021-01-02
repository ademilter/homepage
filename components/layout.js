import Footer from './footer'
import Header from '@comp/header'
import { Grid, GridItem, Container } from '@chakra-ui/react'

function Layout({ children }) {
  return (
    <Container maxW="4xl">
      <Grid templateColumns="200px 1fr" gap={4}>
        <GridItem>
          <Header />
        </GridItem>
        <GridItem>
          <main>{children}</main>
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Layout
