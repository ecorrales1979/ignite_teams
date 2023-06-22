import { RefObject, type ReactNode } from 'react'
import { TextInput, type TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

interface Props extends TextInputProps {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: Props): ReactNode {
  const { palette } = useTheme()

  return (
    <Container ref={inputRef} placeholderTextColor={palette.gray3} {...rest} />
  )
}
