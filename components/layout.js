import Footer from './footer'
import Header from '@comp/header'
// import { Switch, Container } from '@chakra-ui/react'
// import { useColorMode } from '@chakra-ui/react'

function Layout({ children }) {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const isDark = colorMode === 'dark'

  return (
    <>
      <Header />
      {/*<Switch color="green" isChecked={isDark} onChange={toggleColorMode} />*/}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
