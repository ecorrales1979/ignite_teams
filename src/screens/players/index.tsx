import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Container, Form, HeaderList, PlayersNumber } from './styles';
import { PlayersRouteParams } from '@/@types/navigation';
import { Button } from '@/components/button';
import { ButtonIcon } from '@/components/button-icon';
import { Filter } from '@/components/filter';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { Input } from '@/components/input';
import { ListEmpty } from '@/components/list-empty';
import { PlayerCard } from '@/components/player-card';
import { playerAddByGroup } from '@/storage/player/player-add-by-group';
import { AppError } from '@/utils/app-error';

export default function Players() {
  const [newPlayer, setNewPlayer] = useState('');
  const [team, setTeam] = useState('Team A');
  const [players, setPlayers] = useState<string[]>([]);
  const route = useRoute();
  const { group } = route.params as PlayersRouteParams;

  const handleAddPlayer = async () => {
    try {
      const newPlayerName = newPlayer.trim();

      if (newPlayerName.length === 0) {
        throw new AppError('Player name must not be empty');
      }

      await playerAddByGroup({ name: newPlayerName, team }, group);
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('New player', error.message)
      }

      Alert.alert('New player', 'There was an error trying to create the new player');
      console.error(error);
    }

    
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Add players to this group" />

      <Form>
        <Input
          placeholder="Player name"
          onChangeText={setNewPlayer}
          autoCorrect={false}
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Team A', 'Team B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
          horizontal
        />
        <PlayersNumber>{players.length}</PlayersNumber>
      </HeaderList>


      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom: 100},
          players.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={
          <ListEmpty
            message="There are no players on this group yet"
          />
        }
      />

      <Button
        label="Delete group"
        type="secondary"
      />
    </Container>
  )
}