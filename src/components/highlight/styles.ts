import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xl};
    font-family: ${theme.fontFamily.bold};
    color: ${theme.palette.white};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
    color: ${theme.palette.gray3};
  `}
`;
