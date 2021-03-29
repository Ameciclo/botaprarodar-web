import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack
} from '@chakra-ui/react'

export function FormEditUser() {
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

        <FormControl id="status">
          <FormLabel>Status</FormLabel>
          <Select placeholder="Status da conta">
            <option value="option1">Ativo</option>
          </Select>
        </FormControl>

        <Button colorScheme="green">Salvar</Button>
      </Stack>
    </form>
  )
}
