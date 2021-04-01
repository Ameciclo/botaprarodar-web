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

import { AlertDisableCommunity } from 'components/AlertDisableCommunity'

export function CommunityActionMenu() {
  const [
    alertDisableCommunityIsOpen,
    setAlertDisableCommunityIsOpen
  ] = useState(false)

  const alertDisableCommunityOnClose = () =>
    setAlertDisableCommunityIsOpen(false)

  const alertDisableCommunityCancelRef = useRef()

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

          <Link href="/communities/1/bikes">
            <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
              Bicicletas
            </MenuItem>
          </Link>

          <Link href="/communities/1/withdrawals">
            <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
              Movimentações
            </MenuItem>
          </Link>

          <MenuDivider />

          <MenuItem
            _hover={{ bg: 'red.500' }}
            _focus={{ bg: 'red.500' }}
            onClick={() => setAlertDisableCommunityIsOpen(true)}
          >
            Desativar comunidade
          </MenuItem>
        </MenuList>
      </Menu>

      <AlertDisableCommunity
        isOpen={alertDisableCommunityIsOpen}
        onClose={alertDisableCommunityOnClose}
        cancelRef={alertDisableCommunityCancelRef}
      />
    </>
  )
}
