import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Tag,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'

export function TableWithdrawals() {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Status</Th>
          <Th>Saída</Th>
          <Th>Retorno</Th>
          <Th>Usuário</Th>
          <Th>Bicicleta</Th>
          <Th>Motivo</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Tag variant="solid" colorScheme="green">
              Finalizado
            </Tag>
          </Td>
          <Td>31/03/21 14:00</Td>
          <Td>31/03/21 16:00</Td>
          <Td>
            <NextLink href="">
              <Link color="cyan.500">Lucas Lopes</Link>
            </NextLink>
          </Td>
          <Td>Monark Tunada</Td>
          <Td>Consulta médica</Td>
        </Tr>
        <Tr>
          <Td>
            <Tag variant="solid" colorScheme="yellow">
              Em andamento
            </Tag>
          </Td>
          <Td>31/03/21 14:00</Td>
          <Td>Sem registro</Td>
          <Td>
            <NextLink href="">
              <Link color="cyan.500">Lucas Lopes</Link>
            </NextLink>
          </Td>
          <Td>Monark Tunada</Td>
          <Td>Consulta médica</Td>
        </Tr>
        <Tr>
          <Td>
            <Tag variant="solid" colorScheme="red">
              Em atraso
            </Tag>
          </Td>
          <Td>31/03/21 14:00</Td>
          <Td>Sem registro</Td>
          <Td>
            <NextLink href="">
              <Link color="cyan.500">Lucas Lopes</Link>
            </NextLink>
          </Td>
          <Td>Monark Tunada</Td>
          <Td>Consulta médica</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Status</Th>
          <Th>Saída</Th>
          <Th>Retorno</Th>
          <Th>Usuário</Th>
          <Th>Bicicleta</Th>
          <Th>Motivo</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}
