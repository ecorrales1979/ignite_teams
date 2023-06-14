import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.gray5};
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const PlayerName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
    color: ${theme.palette.gray2};
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.palette.gray2,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
