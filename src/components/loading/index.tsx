import { type ReactElement } from 'react'

import { Container, LoadIndicator } from './styles'

export function Loading(): ReactElement {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  )
}
