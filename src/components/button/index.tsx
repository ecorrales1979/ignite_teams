import { TouchableOpacityProps } from 'react-native';

import { ButtonStyleType, Container, Label } from './styles';

interface Props extends TouchableOpacityProps {
  label: string;
  type?: ButtonStyleType;
}

export function Button({ label, type = 'primary', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Label>{label}</Label>
    </Container>
  )
}