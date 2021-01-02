// import Footer from './footer'
import Header from '@comp/header'
import { Switch, Grid, GridItem, Container } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Container maxW="4xl" py={20}>
      <Grid templateColumns={{ sm: '1fr', md: '200px 1fr' }} gap={4}>
        <GridItem>
          <Header />
          <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
        </GridItem>
        <GridItem>
          <main>{children}</main>
          {/*<Footer />*/}
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Layout
