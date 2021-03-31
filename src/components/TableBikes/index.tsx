import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react'
import { BikeActionMenu } from 'components/BikeActionMenu'

export function TableBikes() {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Status</Th>
          <Th>Cadastrada em</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Monark Tunada</Td>
          <Td>Disponível</Td>
          <Td>01/04/2020</Td>
          <Td>
            <BikeActionMenu />
          </Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Nome</Th>
          <Th>Status</Th>
          <Th>Cadastrada em</Th>
          <Th>Ações</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}
