import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { GroupCard } from '@/components/group-card';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Group test'])

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
      />
    </Container>
  );
}
