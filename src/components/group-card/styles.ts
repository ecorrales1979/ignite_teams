import styled, { css } from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.palette.gray5};
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    color: ${theme.palette.gray2};
    font-family: ${theme.fontFamily.regular};
  `}
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.palette.green7,
  weight: 'fill'
}))`
  margin-right: 20px;
`
