import { FormEvent } from 'react'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, HStack } from '@chakra-ui/layout'

type FilterUserProps = {
  value: string
  setValue: (name: string) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export function FilterUser({ value, handleSubmit, setValue }: FilterUserProps) {
  return (
    <Box mb={4}>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input
            placeholder="Nome do usuário"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="submit" colorScheme="green">
            Buscar
          </Button>
        </HStack>
      </form>
    </Box>
  )
}
