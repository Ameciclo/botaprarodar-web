import { ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/layout'

import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Logout } from '../Logout'

type BaseProps = {
  title: string
  children: ReactNode
}

export function Base({ title, children }: BaseProps) {
  return (
    <>
      <Sidebar />
      <Box ml={200} h="100vh" p={4} bg="#060b1b" color="white">
        <Flex justify="space-between">
          <Header>{title}</Header>
          <Logout />
        </Flex>
        <Box mt={4}>{children}</Box>
      </Box>
    </>
  )
}
