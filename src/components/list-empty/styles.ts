import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1%;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.palette.gray3};
`;
