import styled, { css } from 'styled-components/native'

export type ButtonStyleType = 'primary' | 'secondary'

interface Props {
  type: ButtonStyleType
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.palette.green7 : theme.palette.redDark};
  border-radius: 6px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.bold};
    color: ${theme.palette.white};
  `}
`
