import { FormEvent, useEffect, useState } from 'react'

import { Base } from 'components/Base'
import { TableUsers } from 'components/TableUsers'

import { getData } from 'services/firebase'
import { FilterUser } from 'components/FilterUser'

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
  const [search, setSearch] = useState('')

  useEffect(() => {
    getData({ nodePath: 'users' }, (data) => setUsers(data))
  }, [])

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('search', search)
  }

  return (
    <Base title="Todos os usuários">
      <FilterUser
        value={search}
        setValue={setSearch}
        handleSubmit={handleSearch}
      />

      <TableUsers users={users} />
    </Base>
  )
}
