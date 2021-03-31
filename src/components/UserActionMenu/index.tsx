import { useRef, useState } from 'react'
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
import { AlertDisableAccount } from 'components/AlertDisableAccount'

export function UserActionMenu() {
  const [alertDisableAccountIsOpen, setAlertDisableAccountIsOpen] = useState(
    false
  )

  const alertDisableAccountOnClose = () => setAlertDisableAccountIsOpen(false)

  const alertDisableaccountCancelRef = useRef()

  return (
    <>
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
          <MenuDivider />
          <MenuItem
            _hover={{ bg: 'red.500' }}
            _focus={{ bg: 'red.500' }}
            onClick={() => setAlertDisableAccountIsOpen(true)}
          >
            Desativar conta
          </MenuItem>
        </MenuList>
      </Menu>

      <AlertDisableAccount
        isOpen={alertDisableAccountIsOpen}
        onClose={alertDisableAccountOnClose}
        cancelRef={alertDisableaccountCancelRef}
      />
    </>
  )
}
