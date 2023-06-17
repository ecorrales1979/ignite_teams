import { Button } from '@/components/button';
import { Container, Form, HeaderList, PlayersNumber } from './styles';
import { ButtonIcon } from '@/components/button-icon';
import { Filter } from '@/components/filter';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { Input } from '@/components/input';
import { ListEmpty } from '@/components/list-empty';
import { PlayerCard } from '@/components/player-card';
import { useState } from 'react';
import { FlatList } from 'react-native';

export default function Players() {
  const [team, setTeam] = useState('Team A');
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Group name" subtitle="Add players to this group" />

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
            message="There are no players on this team yet"
          />
        }
      />

      <Button
        label="Delete team"
        type="secondary"
      />
    </Container>
  )
}