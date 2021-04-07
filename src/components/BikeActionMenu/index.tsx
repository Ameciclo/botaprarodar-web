import { useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'

import { AlertDisableBike } from 'components/AlertDisableBike'

export function BikeActionMenu() {
  const [alertDisableBikeIsOpen, setAlertDisableBikeIsOpen] = useState(false)

  const alertDisableBikeOnClose = () => setAlertDisableBikeIsOpen(false)

  const alertDisableBikeCancelRef = useRef()

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
          <Link href="#">
            <MenuItem _hover={{ bg: 'gray.400' }} _focus={{ bg: 'gray.400' }}>
              Movimentações
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <AlertDisableBike
        isOpen={alertDisableBikeIsOpen}
        onClose={alertDisableBikeOnClose}
        cancelRef={alertDisableBikeCancelRef}
      />
    </>
  )
}
