import { Button, Input, Stack } from '@chakra-ui/react'

export function FormSignIn() {
  return (
    <form>
      <Stack spacing={4}>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <Button colorScheme="green">Entrar</Button>
      </Stack>
    </form>
  )
}
