import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { Button } from '@/components/button';
import { GroupCard } from '@/components/group-card';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { ListEmpty } from '@/components/list-empty';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />

      <Highlight title="Groups" subtitle="play with your team" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty
            message="You don't have any group yet. Register your first one now!"
          />
        }
      />

      <Button label="Create new group" />
    </Container>
  );
}
