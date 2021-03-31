import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack
} from '@chakra-ui/react'

export function FormEditCommunity() {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel>Nome</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="description">
          <FormLabel>Descrição</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="address">
          <FormLabel>Endereço</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="gender">
          <FormLabel>Coordenador</FormLabel>
          <Select placeholder="Selecione o organizador">
            <option value="option1">LUCAS LOPES</option>
          </Select>
        </FormControl>

        <Button colorScheme="green">Salvar</Button>
      </Stack>
    </form>
  )
}
