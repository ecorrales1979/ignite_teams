import { type ReactNode } from 'react'
import { useNavigation } from '@react-navigation/native'

import { BackButton, BackContainer, BackIcon, Container, Logo } from './styles'
import logoImg from '@/assets/logo.png'

interface Props {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props): ReactNode {
  const navigation = useNavigation()

  const handleBack = (): void => {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackContainer>
          <BackButton onPress={handleBack}>
            <BackIcon />
          </BackButton>
        </BackContainer>
      )}

      <Logo source={logoImg} />
    </Container>
  )
}
