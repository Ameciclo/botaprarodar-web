import React, { useState, useEffect } from 'react'
import { Base } from '../../components/Base'
import { Dashboard } from '../../components/Dashboard'
import { getData } from '../../services/firebase'

export default function DashBoardPage() {
  const [countCommunities, setCountCommunities] = useState(0)
  const [countBikes, setCountBikes] = useState(0)

  useEffect(() => {
    getData({ nodePath: 'communities' }, (data) => {
      setCountCommunities(data.length)
    })
    getData({ nodePath: 'bikes' }, (data) => {
      setCountBikes(data.length)
    })
  }, [])
  return (
    <Base>
      <Dashboard countBikes={countBikes} countCommunities={countCommunities} />
    </Base>
  )
}
