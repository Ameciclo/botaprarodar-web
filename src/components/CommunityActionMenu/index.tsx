import Link from 'next/link'
import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/menu'

export function CommunityActionMenu() {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          variant="outline"
          _expanded={{
            bg: 'gray.400',
            color: 'gray.900'
          }}
        >
          Ver todas
        </MenuButton>
        <MenuList bgColor="gray.900">
          <Link href="/communities/1">
            <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
              Editar
            </MenuItem>
          </Link>
          <Link href="#">
            <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
              Lista de membros
            </MenuItem>
          </Link>

          <Link href="#">
            <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
              Bicicletas
            </MenuItem>
          </Link>

          <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
            Movimentações
          </MenuItem>
          <MenuDivider />
          <MenuItem _hover={{ bg: 'red.500' }} _focus={{ bg: 'red.500' }}>
            Desativar comunidade
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}
