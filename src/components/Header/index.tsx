import { ReactNode } from 'react'
import { Heading } from '@chakra-ui/layout'

type HeaderProps = {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <Heading color="white" as="u">
      {children}
    </Heading>
  )
}
