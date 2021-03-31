import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import Link from 'next/link'

export function UserActionButton() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme="green"
      >
        Ver todas
      </MenuButton>
      <MenuList bgColor="gray.900">
        <Link href="/users/1">
          <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
            Editar
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
