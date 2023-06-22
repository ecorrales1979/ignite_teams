import { type MaterialIcons } from '@expo/vector-icons'
import { type ReactElement } from 'react'
import { type TouchableOpacityProps } from 'react-native'

import { type ButtonIconStyleType, Container, Icon } from './styles'

interface Props extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconStyleType
}

export function ButtonIcon({
  icon,
  type = 'primary',
  ...rest
}: Props): ReactElement {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
