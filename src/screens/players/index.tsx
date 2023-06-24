import { useNavigation, useRoute } from '@react-navigation/native'
import { type ReactElement, useEffect, useState, useRef } from 'react'
import { Alert, FlatList, type TextInput } from 'react-native'

import { Container, Form, HeaderList, PlayersNumber } from './styles'

import { type PlayersRouteParams } from '@/@types/navigation'
import { Button } from '@/components/button'
import { ButtonIcon } from '@/components/button-icon'
import { Filter } from '@/components/filter'
import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { Input } from '@/components/input'
import { ListEmpty } from '@/components/list-empty'
import { Loading } from '@/components/loading'
import { PlayerCard } from '@/components/player-card'
import { groupDelete } from '@/storage/group/group-delete'
import { playerAddByGroup } from '@/storage/player/player-add-by-group'
import { type PlayerDTO } from '@/storage/player/player-dto'
import { playerListByGroupAndTeam } from '@/storage/player/player-list-by-group-and-team'
import { playerRemoveByGroup } from '@/storage/player/player-remove-by-group'
import { AppError } from '@/utils/app-error'

export default function Players(): ReactElement {
  const [newPlayer, setNewPlayer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [team, setTeam] = useState('Team A')
  const [players, setPlayers] = useState<PlayerDTO[]>([])
  const route = useRoute()
  const { group } = route.params as PlayersRouteParams
  const newPlayerInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()

  const fetchPlayersByTeam = async (): Promise<void> => {
    try {
      setIsLoading(true)
      const playersByTeam = await playerListByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
      setIsLoading(false)
    } catch (error) {
      Alert.alert('Players', 'There was an error loading the player list')
    }
  }

  const handleAddPlayer = async (): Promise<void> => {
    try {
      const newPlayerName = newPlayer.trim()

      if (newPlayerName.length === 0) {
        throw new AppError('Player name must not be empty')
      }

      await playerAddByGroup({ name: newPlayerName, team }, group)
      newPlayerInputRef.current?.blur()
      setNewPlayer('')
      await fetchPlayersByTeam()
    } catch (error) {
      const message =
        error instanceof AppError
          ? error.message
          : 'There was an error trying to create the new player'

      Alert.alert('New Player', message)
    }
  }

  const handleRemovePlayer = async (playerName: string): Promise<void> => {
    try {
      await playerRemoveByGroup(playerName, group)
      await fetchPlayersByTeam()
    } catch (error) {
      Alert.alert(
        'Remove player',
        'There was an error trying to remove selected player'
      )
    }
  }

  const handleRemove = async (): Promise<void> => {
    try {
      await groupDelete(group)
      navigation.navigate('groups')
    } catch (error) {
      Alert.alert(
        'Delete group',
        'There was an error trying to delete the group '
      )
    }
  }

  const handleGroupRemove = async (): Promise<void> => {
    Alert.alert('Delete group', 'Do you want to remove this group?', [
      { text: 'No', style: 'cancel' },
      { text: 'Yes', onPress: handleRemove }
    ])
  }

  useEffect(() => {
    void fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Add players to this group" />

      <Form>
        <Input
          placeholder="Player name"
          value={newPlayer}
          onChangeText={setNewPlayer}
          autoCorrect={false}
          inputRef={newPlayerInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Team A', 'Team B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => {
                setTeam(item)
              }}
            />
          )}
          horizontal
        />
        <PlayersNumber>{players.length}</PlayersNumber>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={async () => {
                await handleRemovePlayer(item.name)
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]}
          ListEmptyComponent={
            <ListEmpty message="There are no players on this group yet" />
          }
        />
      )}

      <Button
        label="Delete group"
        type="secondary"
        onPress={handleGroupRemove}
      />
    </Container>
  )
}
