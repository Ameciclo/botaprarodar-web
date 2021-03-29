import { Container, Flex, Heading } from '@chakra-ui/react'

import { FormSignIn } from 'components/FormSignIn'

export default function Login() {
  return (
    <Flex
      w="100%"
      h="100vh"
      bg="gray.900"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Heading color="white" mb={4}>
          Login
        </Heading>
        <FormSignIn />
      </Container>
    </Flex>
  )
}
