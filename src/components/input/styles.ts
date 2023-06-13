import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  ${({ theme }) => css`
    background-color: ${theme.palette.gray7};
    color: ${theme.palette.white};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
  `}
  border-radius: 6px;
  padding: 16px;
`;
