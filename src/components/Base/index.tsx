import { ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/layout'

import { Sidebar } from 'components/Sidebar'
import { Logout } from '../Logout'
import { BreadCrumb } from '../BreadCrumb'

type BaseProps = {
  children: ReactNode
}

export function Base({ children }: BaseProps) {
  return (
    <>
      <Sidebar />
      <Box ml={200} h="100vh" p={4} bg="#060b1b" color="white">
        <Flex justify="space-between">
          <BreadCrumb />
          <Logout />
        </Flex>
        <Box mt={4}>{children}</Box>
      </Box>
    </>
  )
}
