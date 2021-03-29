import { Base } from 'components/Base'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'

export default function Users() {
  return (
    <Base title="Todos os usuários">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>E-mail</Th>
            <Th>Comunidade</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Lucas Lopes</Td>
            <Td>lucas@mail.com</Td>
            <Td>Aglomerado da Serra</Td>
            <Td>Ativo</Td>
          </Tr>
          <Tr>
            <Td>Lucas Lopes</Td>
            <Td>lucas@mail.com</Td>
            <Td>Aglomerado da Serra</Td>
            <Td>Ativo</Td>
          </Tr>
          <Tr>
            <Td>Lucas Lopes</Td>
            <Td>lucas@mail.com</Td>
            <Td>Aglomerado da Serra</Td>
            <Td>Ativo</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Nome</Th>
            <Th>E-mail</Th>
            <Th>Comunidade</Th>
            <Th>Status</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Base>
  )
}
