import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.palette.white};
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.palette.gray3};
`;
