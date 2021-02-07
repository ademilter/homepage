import { Box, useColorModeValue } from '@chakra-ui/react'

function Newsletter() {
  const formBgColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.900')

  return (
    <Box bgColor={formBgColor} borderRadius="xl" w="full">
      <iframe src="https://adem.substack.com/embed" width="100%" height="300" />
    </Box>
  )
}

export default Newsletter
