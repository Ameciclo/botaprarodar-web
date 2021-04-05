import { Link, Image } from '@chakra-ui/react'
import { Box, Flex, Heading, VStack } from '@chakra-ui/layout'
import NextLink from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGlobe } from '@fortawesome/free-solid-svg-icons'

export function Sidebar() {
  return (
    <Flex
      position="fixed"
      flexDirection="column"
      left={0}
      p={4}
      w="200px"
      h="100%"
      bg="#0f1a2e"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        backgroundColor="#012b39"
      >
        <Heading color="white">Logo</Heading>
      </Flex>
      <VStack mt={4} color="white" backgroundColor="#012b39">
        <NextLink href="/users">
          <Link>
            <FontAwesomeIcon icon={faUser} /> Usuários
          </Link>
        </NextLink>
        <NextLink href="/communities">
          <Link>
            <FontAwesomeIcon icon={faGlobe} /> Comunidades
          </Link>
        </NextLink>
      </VStack>
      <Box mt="auto">
        <Image objectFit="cover" src="/images/ameciclo.png" alt="Ameciclo" />
      </Box>
    </Flex>
  )
}
