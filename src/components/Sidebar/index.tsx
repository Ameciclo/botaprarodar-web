import { Link } from '@chakra-ui/react'
import { Box, Flex, Heading, VStack } from '@chakra-ui/layout'
import NextLink from 'next/link'

export function Sidebar() {
  return (
    <Box
      position="fixed"
      left={0}
      p={4}
      w="200px"
      h="100%"
      bg="gray.900"
      borderRight="1px"
      borderColor="green.500"
    >
      <Flex alignItems="center" justifyContent="center">
        <Heading color="white">Logo</Heading>
      </Flex>
      <VStack mt={4} color="white">
        <NextLink href="/users">
          <Link>Usuários</Link>
        </NextLink>
        <NextLink href="/communities">
          <Link>Comunidades</Link>
        </NextLink>
      </VStack>
    </Box>
  )
}
