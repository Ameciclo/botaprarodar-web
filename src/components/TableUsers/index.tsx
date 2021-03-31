import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react'

import { User } from 'pages/users'
import { UserActionMenu } from 'components/UserActionMenu'

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
          <Th>Tipo de conta</Th>
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
            <Td>Coordenador</Td>
            <Td>{user.available ? 'Ativo' : 'Desativado'}</Td>
            <Td>
              <UserActionMenu />
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Nome</Th>
          <Th>E-mail</Th>
          <Th>Comunidade</Th>
          <Th>Tipo de conta</Th>
          <Th>Status</Th>
          <Th>Ações</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}
