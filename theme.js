import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
      bg: mode('white', 'customBlack')(props)
    }
  })
}

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif'
  },
  colors: {
    customBlack: '#202020'
  },
  components: {
    Link: {
      baseStyle: (props) => {
        return {
          textDecoration: 'underline',
          textDecorationColor: mode(
            props.theme.colors.blackAlpha[400],
            props.theme.colors.whiteAlpha[400]
          )(props),
          _hover: {
            color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
            textDecorationColor: mode(
              props.theme.colors.blue[200],
              props.theme.colors.yellow[200]
            )(props)
          }
        }
      }
    }
  },
  styles
})

export default theme
