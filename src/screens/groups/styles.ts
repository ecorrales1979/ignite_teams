import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.gray6};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
