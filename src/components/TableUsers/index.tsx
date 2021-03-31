import NextLink from 'next/link'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button
} from '@chakra-ui/react'

import { User } from 'pages/users'

type TableUsersProps = {
  users: User[]
}

export function TableUsers({ users }: TableUsersProps) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>E-mail</Th>
          <Th>Comunidade</Th>
          <Th>Status</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>lucas@mail.com</Td>
            <Td>Aglomerado da Serra</Td>
            <Td>{user.available ? 'Ativo' : 'Desativado'}</Td>
            <Td>
              <NextLink href="/users/1">
                <Button colorScheme="green">Editar</Button>
              </NextLink>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Nome</Th>
          <Th>E-mail</Th>
          <Th>Comunidade</Th>
          <Th>Status</Th>
          <Th>Ações</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}
