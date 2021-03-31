import { useEffect, useState } from 'react'

import { Base } from 'components/Base'
import { TableUsers } from 'components/TableUsers'

import { getData } from 'services/firebase'

export type User = {
  id: string
  address: string
  available: boolean
  community: string
  gender: number
  name: string
}

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getData({ nodePath: 'users' }, (data) => setUsers(data))
  }, [])

  return (
    <Base title="Todos os usuários">
      <TableUsers users={users} />
    </Base>
  )
}
