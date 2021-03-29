<<<<<<< HEAD
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
=======
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'

import styles from './styles.module.scss'

export function TableUsers() {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Comunidade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucas Lopes Nogueira</td>
            <td>lucas@mail.com</td>
            <td>Belo Horizonte/MG</td>
            <td>Ativo</td>
            <td>
              <Link href="/users/1">
                <a title="Editar usuário">
                  <FiEdit />
                </a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
>>>>>>> 603671b799ed46a5556a28ca055dad3683a2289d
  )
}
