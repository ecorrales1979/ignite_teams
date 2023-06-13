import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconStyleType = 'primary' | 'secondary';

interface Props {
  type?: ButtonIconStyleType;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'primary' ? theme.palette.green7 : theme.palette.red,
}))``;
