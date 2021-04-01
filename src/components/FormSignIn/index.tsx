import { Button, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNotification } from '../../hooks/notification'

export function FormSignIn() {
  const erroCredenciais = useNotification({
    message: 'Credenciais Inválidas.',
    type: 'error'
  })

  return (
    <form>
      <Stack spacing={4}>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <Button colorScheme="green" onClick={() => erroCredenciais()}>
          Entrar
        </Button>
      </Stack>
    </form>
  )
}
