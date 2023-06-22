import { type ReactElement } from 'react'
import { type TouchableOpacityProps } from 'react-native'

import { type ButtonStyleType, Container, Label } from './styles'

interface Props extends TouchableOpacityProps {
  label: string
  type?: ButtonStyleType
}

export function Button({
  label,
  type = 'primary',
  ...rest
}: Props): ReactElement {
  return (
    <Container type={type} {...rest}>
      <Label>{label}</Label>
    </Container>
  )
}
