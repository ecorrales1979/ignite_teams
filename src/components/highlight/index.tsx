import { type ReactElement } from 'react'

import { Container, Subtitle, Title } from './styles'

interface Props {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle }: Props): ReactElement {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
