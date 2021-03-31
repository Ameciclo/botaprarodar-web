import { useEffect, useState } from 'react'
import NextLink from 'next/link'

import { Base } from 'components/Base'
import { TableUsers } from 'components/TableUsers'
import { Button } from '@chakra-ui/button'

import { getData } from 'services/firebase'

export type User = {
  id: string
  address: string
  available: boolean
  community: string
  gender: number
  name: string
}

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getData({ nodePath: 'users' }, (data) => setUsers(data))
  }, [])

  return (
    <Base title="Todos os usuários">
      <NextLink href="/users/new">
        <Button variant="outline" _hover={{ bg: 'white', color: 'gray.900' }}>
          Novo usuário
        </Button>
      </NextLink>

      <TableUsers users={users} />
    </Base>
  )
}
