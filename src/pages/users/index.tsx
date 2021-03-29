import NextLink from 'next/link'

import { Base } from 'components/Base'
import { TableUsers } from 'components/TableUsers'
import { Button } from '@chakra-ui/button'

export default function Users() {
  return (
    <Base title="Todos os usuários">
      <NextLink href="/users/new">
        <Button variant="outline" _hover={{ bg: 'white', color: 'gray.900' }}>
          Novo usuário
        </Button>
      </NextLink>
      <TableUsers />
    </Base>
  )
}
