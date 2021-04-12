import React, { useEffect, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from '@chakra-ui/react'

import { getData } from '../../services/firebase'

export function Dashboard() {
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
    <Flex ml="1em" justifyContent="space-evenly" backgroundColor="#0f1a2e">
      <Flex
        backgroundColor="#012b39"
        gridGap="8px"
        width="300px"
        height="120px"
      >
        <Box
          display="flex"
          alignItems="center"
          backgroundColor="#0f1a2e"
          height="100%"
        >
          <FontAwesomeIcon icon={faGlobe} size="6x" />
        </Box>
        <Box>
          <strong>Comunidades</strong>
          <br />
          {countCommunities ? (
            <Text ml={7} fontSize="6xl" color="#e2b842">
              {countCommunities}
            </Text>
          ) : (
            <Spinner ml={7} fontSize="6xl" color="#e2b842" marginTop="0.4em" />
          )}
        </Box>
      </Flex>
      <Flex
        backgroundColor="#012b39"
        gridGap="8px"
        width="300px"
        height="120px"
      >
        <Box
          display="flex"
          alignItems="center"
          backgroundColor="#0f1a2e"
          height="100%"
        >
          <FontAwesomeIcon icon={faBicycle} size="6x" />
        </Box>
        <Box backgroundColor="#012b39">
          <strong>Bicicletas</strong>
          <br />
          {countBikes ? (
            <Text ml={7} fontSize="6xl" color="#e2b842">
              {countBikes}
            </Text>
          ) : (
            <Spinner ml={7} fontSize="6xl" color="#e2b842" marginTop="0.4em" />
          )}
        </Box>
      </Flex>
    </Flex>
  )
}
