import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack
} from '@chakra-ui/react'

export function FormDocumentsUser() {
  return (
    <form>
      <Stack spacing={4}>
        <HStack>
          <FormControl id="profile">
            <Box boxSize="100%" mb={4}>
              <Image
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
                objectFit="cover"
              />
            </Box>
            <FormLabel>Foto de perfil</FormLabel>
            <Input type="file" variant="unstyled" />
          </FormControl>

          <FormControl id="documentFront">
            <Box boxSize="100%" mb={4}>
              <Image
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
                objectFit="cover"
              />
            </Box>
            <FormLabel>Foto de perfil</FormLabel>
            <Input type="file" variant="unstyled" />
          </FormControl>

          <FormControl id="documentBack">
            <Box boxSize="100%" mb={4}>
              <Image
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
                objectFit="cover"
              />
            </Box>
            <FormLabel>Foto de perfil</FormLabel>
            <Input type="file" variant="unstyled" />
          </FormControl>
        </HStack>
      </Stack>
    </form>
  )
}
