import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react'
import { CommunityActionMenu } from 'components/CommunityActionMenu'

export function TableCommunities() {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Organizador</Th>
          <Th>E-mail</Th>
          <Th>Status</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Aglomerado da Serra</Td>
          <Td>Lucas Lopes</Td>
          <Td>contato@mail.com</Td>
          <Td>Ativa</Td>
          <Td>
            <CommunityActionMenu />
          </Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Nome</Th>
          <Th>Organizador</Th>
          <Th>E-mail</Th>
          <Th>Status</Th>
          <Th>Ações</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}
