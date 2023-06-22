import { type ReactNode } from 'react'

import { Container, LoadIndicator } from './styles'

export function Loading(): ReactNode {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  )
}
