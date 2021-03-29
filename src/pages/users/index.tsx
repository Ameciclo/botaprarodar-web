<<<<<<< HEAD
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
=======
import { Base } from 'components/Base'
import { TableUsers } from 'components/TableUsers'

export default function Home() {
  return (
    <Base title="Todos usuários">
>>>>>>> 603671b799ed46a5556a28ca055dad3683a2289d
      <TableUsers />
    </Base>
  )
}
