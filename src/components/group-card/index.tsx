import { type ReactElement } from 'react'
import { type TouchableOpacityProps } from 'react-native'

import { Container, Icon, Title } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

export function GroupCard({ title, ...rest }: Props): ReactElement {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
