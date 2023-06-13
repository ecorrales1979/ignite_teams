import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

export function Input({...rest}: TextInputProps) {
  const { palette } = useTheme();

  return (
    <Container
      placeholderTextColor={palette.gray3}
      {...rest}
    />
  )
}
