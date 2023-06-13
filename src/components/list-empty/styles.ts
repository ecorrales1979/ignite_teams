import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1%;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm};
    font-family: ${theme.fontFamily.regular};
    color: ${theme.palette.gray3};
  `}
`;
