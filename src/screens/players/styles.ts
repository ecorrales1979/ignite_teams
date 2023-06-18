import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.gray6};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.gray7};
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const PlayersNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.palette.gray2};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm};
  `};
`;
