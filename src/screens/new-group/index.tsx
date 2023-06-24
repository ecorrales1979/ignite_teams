import { useNavigation } from '@react-navigation/native'
import { type ReactElement, useState } from 'react'
import { Alert } from 'react-native'

import { Container, Content, Icon } from './styles'

import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { Input } from '@/components/input'
import { groupCreate } from '@/storage/group/group-create'
import { AppError } from '@/utils/app-error'

export default function NewGroup(): ReactElement {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  const handleCreateGroup = async (): Promise<void> => {
    try {
      const groupName = group.trim()
      if (groupName.length === 0) {
        throw new AppError('You need to provide a name for the new group')
      }

      await groupCreate(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (error) {
      const message =
        error instanceof AppError
          ? error.message
          : 'There was an error trying to create the new group'

      Alert.alert('New group', message)
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="New group"
          subtitle="Create a new group to start adding new participants"
        />

        <Input placeholder="Group name" onChangeText={setGroup} />

        <Button
          label="Create"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  )
}
