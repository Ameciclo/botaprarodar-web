import { Button } from '@chakra-ui/button'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay
} from '@chakra-ui/modal'
import { MutableRefObject } from 'react'

type AlertDisableAccountProps = {
  isOpen: boolean
  onClose: () => void
  cancelRef: MutableRefObject<undefined>
}

export function AlertDisableCommunity({
  isOpen,
  onClose,
  cancelRef
}: AlertDisableAccountProps) {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Você tem certeza?
          </AlertDialogHeader>

          <AlertDialogBody>A comunidade ficará indisponível.</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="red" onClick={onClose} ml={3}>
              Desativar comunidade
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
