import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`

export const BackContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`

export const BackButton = styled.TouchableOpacity`
  padding: 5px 10px;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.palette.white,
  size: 32
}))``
