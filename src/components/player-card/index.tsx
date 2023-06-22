import { type ReactElement } from 'react'

import { ButtonIcon } from '../button-icon'
import { Container, Icon, PlayerName } from './styles'

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
