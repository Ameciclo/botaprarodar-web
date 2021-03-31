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
import { AlertSetCoordinator } from 'components/AlertSetCoordinator'

export function UserActionMenu() {
  const [alertDisableAccountIsOpen, setAlertDisableAccountIsOpen] = useState(
    false
  )
  const [alertSetCoordinatorIsOpen, setAlertSetCoordinatorIsOpen] = useState(
    false
  )

  const alertDisableAccountOnClose = () => setAlertDisableAccountIsOpen(false)

  const alertSetCoordinatorOnClose = () => setAlertSetCoordinatorIsOpen(false)

  const alertDisableaccountCancelRef = useRef()

  const alertSetCoordinatorCancelRef = useRef()

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

          <Link href="/users/1/documents">
            <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
              Documentos
            </MenuItem>
          </Link>

          <MenuItem
            _hover={{ bg: 'yellow.500' }}
            _focus={{ bg: 'yellow.500' }}
            onClick={() => setAlertSetCoordinatorIsOpen(true)}
          >
            Definir como coordenador
          </MenuItem>

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

      <AlertSetCoordinator
        isOpen={alertSetCoordinatorIsOpen}
        onClose={alertSetCoordinatorOnClose}
        cancelRef={alertSetCoordinatorCancelRef}
      />
    </>
  )
}
