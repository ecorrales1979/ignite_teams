import { BackButton, BackContainer, BackIcon, Container, Logo } from './styles';
import logoImg from '@/assets/logo.png';

interface Props {
  showBackButton?: boolean;
}

export function Header({ showBackButton }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackContainer>
          <BackButton>
            <BackIcon />
          </BackButton>
        </BackContainer>
      )}

      <Logo source={logoImg} />
    </Container>
  )
}