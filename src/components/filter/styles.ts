import styled, { css } from 'styled-components/native'

export interface FilterStyleProps {
  isActive?: boolean
}

export const Container = styled.TouchableOpacity<FilterStyleProps>`
  ${({ theme, isActive = false }) =>
    !!isActive &&
    css`
      border: 1px solid ${theme.palette.green7};
    `};
  width: 70px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm};
    color: ${theme.palette.white};
  `};
  text-transform: uppercase;
`
