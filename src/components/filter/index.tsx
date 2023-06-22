import { type ReactNode } from 'react'
import { type TouchableOpacityProps } from 'react-native'

import { Container, type FilterStyleProps, Title } from './styles'

interface Props extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ title, isActive = false, ...rest }: Props): ReactNode {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  )
}
