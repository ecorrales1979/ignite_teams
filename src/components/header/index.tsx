import { useNavigation } from '@react-navigation/native';

import { BackButton, BackContainer, BackIcon, Container, Logo } from './styles';
import logoImg from '@/assets/logo.png';

interface Props {
  showBackButton?: boolean;
}

export function Header({ showBackButton }: Props) {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.navigate('groups');
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