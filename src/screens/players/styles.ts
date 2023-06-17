import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export const Container = styled.View`
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
