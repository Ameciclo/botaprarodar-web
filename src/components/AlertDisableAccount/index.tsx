import { Button } from '@chakra-ui/button'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay
} from '@chakra-ui/modal'

type AlertDisableAccountProps = {
  isOpen: boolean
  onClose: () => void
  cancelRef: any
}

export function AlertDisableAccount({
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

          <AlertDialogBody>
            Essa conta não poderá ser acessada pelo usuário.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="red" onClick={onClose} ml={3}>
              Desativar conta
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
