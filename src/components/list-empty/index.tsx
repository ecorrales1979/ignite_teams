import { type ReactElement } from 'react'

import { Container, Message } from './styles'

interface Props {
  message: string
}

export function ListEmpty({ message }: Props): ReactElement {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
