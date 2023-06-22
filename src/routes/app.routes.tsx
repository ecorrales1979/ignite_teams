import { type ReactNode } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Groups from '@/screens/groups'
import NewGroup from '@/screens/new-group'
import Players from '@/screens/players'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(): ReactNode {
  return (
    <Navigator initialRouteName="groups" screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  )
}
