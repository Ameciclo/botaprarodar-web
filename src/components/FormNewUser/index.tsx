import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack
} from '@chakra-ui/react'

export function FormNewUser() {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel>Nome completo</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="gender">
          <FormLabel>Gênero</FormLabel>
          <Select placeholder="Selecione uma opção">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <FormControl id="address">
          <FormLabel>Endereço</FormLabel>
          <Input type="text" />
        </FormControl>

        <HStack>
          <FormControl id="profile">
            <FormLabel>Foto de perfil</FormLabel>
            <Input type="file" variant="unstyled" />
          </FormControl>
          <FormControl id="documentFront">
            <FormLabel>Foto de perfil</FormLabel>
            <Input type="file" variant="unstyled" />
          </FormControl>
          <FormControl id="documentBack">
            <FormLabel>Foto de perfil</FormLabel>
            <Input type="file" variant="unstyled" />
          </FormControl>
        </HStack>

        <Button colorScheme="green">Cadastrar</Button>
      </Stack>
    </form>
  )
}
