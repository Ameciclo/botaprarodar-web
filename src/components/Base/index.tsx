import { Box } from '@chakra-ui/layout'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { ReactNode } from 'react'

type BaseProps = {
  title: string
  children: ReactNode
}

export function Base({ title, children }: BaseProps) {
  return (
    <>
      <Sidebar />

      <Box ml={200} h="100vh" p={4} bg="gray.900" color="white">
        <Header>{title}</Header>

        <Box mt={4}>{children}</Box>
      </Box>
    </>
  )
}
