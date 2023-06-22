import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { type ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { Loading } from '@/components/loading'
import { Routes } from '@/routes'
import theme from '@/theme'

export default function App(): ReactElement {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar style="light" translucent />
    </ThemeProvider>
  )
}
