import { type ReactNode } from 'react'
import { type TouchableOpacityProps } from 'react-native'

import { type ButtonStyleType, Container, Label } from './styles'

interface Props extends TouchableOpacityProps {
  label: string
  type?: ButtonStyleType
}

export function Button({ label, type = 'primary', ...rest }: Props): ReactNode {
  return (
    <Container type={type} {...rest}>
      <Label>{label}</Label>
    </Container>
  )
}
