import { NavigationContainer } from '@react-navigation/native'
import { type ReactElement } from 'react'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { AppRoutes } from './app.routes'

export function Routes(): ReactElement {
  const { palette } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: palette.gray6 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
