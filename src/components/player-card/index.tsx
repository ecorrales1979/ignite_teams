import { type ReactElement } from 'react'

import { Container, Icon, PlayerName } from './styles'
import { ButtonIcon } from '../button-icon'

interface Props {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: Props): ReactElement {
  return (
    <Container>
      <Icon name="person" />

      <PlayerName>{name}</PlayerName>

      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </Container>
  )
}
