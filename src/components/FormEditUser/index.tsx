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
            <option value="option1">Masculino</option>
            <option value="option2">Feminino</option>
            <option value="option3">Outros</option>
            <option value="option3">Prefiro não informar</option>
          </Select>
        </FormControl>

        <FormControl id="address">
          <FormLabel>Endereço</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="gender">
          <FormLabel>Comunidade</FormLabel>
          <Select placeholder="Selecione uma comunidade">
            <option value="option1">Comunidade 1</option>
            <option value="option2">Comunidade 2</option>
          </Select>
        </FormControl>

        <Button colorScheme="green">Salvar</Button>
      </Stack>
    </form>
  )
}
