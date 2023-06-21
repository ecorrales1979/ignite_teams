import { useState } from 'react';
import { FlatList } from 'react-native';
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

export default function Players() {
  const [team, setTeam] = useState('Team A');
  const [players, setPlayers] = useState<string[]>([]);
  const route = useRoute();
  const { group } = route.params as PlayersRouteParams;

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Add players to this group" />

      <Form>
        <Input placeholder="Player name" autoCorrect={false} />
        <ButtonIcon icon="add" />
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