import { useState } from 'react'
import {
  Text,
  Box,
  HStack,
  Input,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

function Newsletter2() {
  // const formBgColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
  // const [email, emailSet] = useState('')
  //
  // const subscribe = async (event) => {
  //   event.preventDefault()
  //
  //   try {
  //     const response = await fetch('https://adem.substack.com/api/v1/free', {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         current_referrer: 'https://ademilter.com/',
  //         current_url: 'https://adem.substack.com/embed',
  //         first_referrer: 'https://substack.com/',
  //         first_url: 'https://adem.substack.com/publish?utm_source=menu',
  //         referral_code: '',
  //         source: 'embed',
  //         email: email
  //       })
  //     })
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return (
    <Box bgColor="white" borderRadius="xl" w="full">
      <iframe src="https://adem.substack.com/embed" width="100%" height="300" />

      {/*<Box p={10} bgColor={formBgColor} borderRadius="xl">*/}
      {/*  <Box as="form" mx="auto" onSubmit={subscribe}>*/}
      {/*    <Text align="center" fontSize="lg">*/}
      {/*      Tasarım, deneyim ve hayata dair aklımdan geçenlerin kısa yazılara*/}
      {/*      dökülmüş halini mail olarak almak istersen kayıt ol!*/}
      {/*    </Text>*/}
      {/*    <HStack spacing={2} align="center" mt={6}>*/}
      {/*      <Input*/}
      {/*        type="email"*/}
      {/*        name="email"*/}
      {/*        placeholder="Eposta adresiniz"*/}
      {/*        bgColor="whiteAlpha.900"*/}
      {/*        color="blackAlpha.900"*/}
      {/*        _placeholder={{*/}
      {/*          color: 'blackAlpha.500'*/}
      {/*        }}*/}
      {/*        focusBorderColor="yellow.400"*/}
      {/*        value={email}*/}
      {/*        onChange={(event) => {*/}
      {/*          emailSet(event.target.value)*/}
      {/*        }}*/}
      {/*      />*/}
      {/*      <Button type="submit" colorScheme="yellow" px={6}>*/}
      {/*        Abone ol*/}
      {/*      </Button>*/}
      {/*    </HStack>*/}
      {/*  </Box>*/}
      {/*</Box>*/}
    </Box>
  )
}

export default Newsletter2
