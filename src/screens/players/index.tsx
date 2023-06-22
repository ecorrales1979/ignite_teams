import { type ReactElement, useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Container, Form, HeaderList, PlayersNumber } from './styles'
import { type PlayersRouteParams } from '@/@types/navigation'
import { Button } from '@/components/button'
import { ButtonIcon } from '@/components/button-icon'
import { Filter } from '@/components/filter'
import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { Input } from '@/components/input'
import { ListEmpty } from '@/components/list-empty'
import { PlayerCard } from '@/components/player-card'
import { playerAddByGroup } from '@/storage/player/player-add-by-group'
import { type PlayerDTO } from '@/storage/player/player-dto'
import { playerListByGroupAndTeam } from '@/storage/player/player-list-by-group-and-team'
import { AppError } from '@/utils/app-error'

export default function Players(): ReactElement {
  const [newPlayer, setNewPlayer] = useState('')
  const [team, setTeam] = useState('Team A')
  const [players, setPlayers] = useState<PlayerDTO[]>([])
  const route = useRoute()
  const { group } = route.params as PlayersRouteParams

  const fetchPlayersByTeam = async (): Promise<void> => {
    try {
      const playersByTeam = await playerListByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
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
      setNewPlayer('')
      await fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New player', error.message)
        return
      }

      Alert.alert(
        'New player',
        'There was an error trying to create the new player'
      )
      console.error(error)
    }
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

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
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

      <Button label="Delete group" type="secondary" />
    </Container>
  )
}
