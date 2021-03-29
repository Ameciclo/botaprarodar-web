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

export function TableUsers() {
  return (
    <Table variant="striped" colorScheme="green">
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
        <Tr>
          <Td>Lucas Lopes</Td>
          <Td>lucas@mail.com</Td>
          <Td>Aglomerado da Serra</Td>
          <Td>Ativo</Td>
          <Td>
            <NextLink href="/users/1">
              <Button colorScheme="green">Editar</Button>
            </NextLink>
          </Td>
        </Tr>
        <Tr>
          <Td>Lucas Lopes</Td>
          <Td>lucas@mail.com</Td>
          <Td>Aglomerado da Serra</Td>
          <Td>Ativo</Td>
          <Td>
            <NextLink href="/users/1">
              <Button colorScheme="green">Editar</Button>
            </NextLink>
          </Td>
        </Tr>
        <Tr>
          <Td>Lucas Lopes</Td>
          <Td>lucas@mail.com</Td>
          <Td>Aglomerado da Serra</Td>
          <Td>Ativo</Td>
          <Td>
            <NextLink href="/users/1">
              <Button colorScheme="green">Editar</Button>
            </NextLink>
          </Td>
        </Tr>
        <Tr>
          <Td>Lucas Lopes</Td>
          <Td>lucas@mail.com</Td>
          <Td>Aglomerado da Serra</Td>
          <Td>Ativo</Td>
          <Td>
            <NextLink href="/users/1">
              <Button colorScheme="green">Editar</Button>
            </NextLink>
          </Td>
        </Tr>
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
