import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { type ReactElement, useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'

import { Container } from './styles'

import { Button } from '@/components/button'
import { GroupCard } from '@/components/group-card'
import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { ListEmpty } from '@/components/list-empty'
import { Loading } from '@/components/loading'
import { groupList } from '@/storage/group/group-list'

export default function Groups(): ReactElement {
  const [groups, setGroups] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()

  const handleNewGroup = (): void => {
    navigation.navigate('new')
  }

  const handleOpenGroup = (group: string): void => {
    navigation.navigate('players', { group })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetchGroups = async () => {
    try {
      setIsLoading(true)
      const storedGroups = await groupList()
      setGroups(storedGroups)
      setIsLoading(false)
    } catch (error) {
      Alert.alert('Groups', 'There was an error loading the groups')
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups() // eslint-disable-line @typescript-eslint/no-floating-promises
    }, [])
  )

  return (
    <Container>
      <Header />

      <Highlight title="Groups" subtitle="play with your team" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => {
                handleOpenGroup(item)
              }}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <ListEmpty message="You don't have any group yet. Register your first one now!" />
          }
        />
      )}

      <Button label="Create new group" onPress={handleNewGroup} />
    </Container>
  )
}
