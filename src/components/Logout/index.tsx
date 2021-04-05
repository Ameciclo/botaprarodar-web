import { Box } from '@chakra-ui/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export function Logout() {
  return (
    <NextLink href="/login">
      <Link>
        <Box className="logout">
          <FontAwesomeIcon icon={faSignOutAlt} /> Sair
        </Box>
      </Link>
    </NextLink>
  )
}
