import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import { Base } from 'components/Base'
import { TableCommunities } from 'components/TableCommunities'
import Link from 'next/link'

export default function Users() {
  return (
    <Base title="Todos as comunidades">
      <Box>
        <Link href="/communities/create">
          <Button
            variant="outline"
            _hover={{ bg: 'gray.400', color: 'gray.900' }}
          >
            Nova comunidade
          </Button>
        </Link>
      </Box>
      <TableCommunities />
    </Base>
  )
}
