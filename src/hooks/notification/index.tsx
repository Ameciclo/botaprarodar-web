import { useToast, UseToastOptions } from '@chakra-ui/react'

type NotificationType = {
  message: string
  type: 'success' | 'warning' | 'info' | 'error'
}

export const useNotification = (params: NotificationType) => {
  const defaultConfig: UseToastOptions = {
    duration: 3000,
    isClosable: true,
    position: 'bottom-right'
  }

  const toast = useToast({
    ...defaultConfig,
    status: params.type,
    title:
      params.type === 'success'
        ? 'Sucesso'
        : params.type === 'error'
        ? 'Erro'
        : params.type === 'info'
        ? 'Informação'
        : params.type === 'warning'
        ? 'Atenção'
        : '',
    description: params.message
  })
  return toast
}
