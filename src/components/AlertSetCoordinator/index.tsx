import { Button } from '@chakra-ui/button'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay
} from '@chakra-ui/modal'

type AlertSetCoordinatorProps = {
  isOpen: boolean
  onClose: () => void
  cancelRef: any
}

export function AlertSetCoordinator({
  isOpen,
  onClose,
  cancelRef
}: AlertSetCoordinatorProps) {
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
            Deseja definir <strong>Lucas Lopes Nogueira</strong> como
            coordenador da comunidade <strong>Aglomerado da Serra?</strong>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="yellow" onClick={onClose} ml={3}>
              Salvar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
