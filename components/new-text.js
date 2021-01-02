import styled from 'styled-components'
import { compose, variant, color, typography } from 'styled-system'

const NewText = styled('span')(
  variant({
    variants: {
      primary: {
        color: 'black',
        bg: 'primary'
      }
    }
  }),
  compose(color, typography)
)

export default NewText
