import styled from 'styled-components'
import {
  compose,
  margin,
  padding,
  space,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid
} from 'styled-system'

const Box = styled('div')(
  compose(
    margin,
    padding,
    space,
    color,
    layout,
    flexbox,
    border,
    background,
    position,
    grid
  )
)

export default Box
