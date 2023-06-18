import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Icon } from './styles';
import { Button } from '@/components/button';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { Input } from '@/components/input';

export default function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  const handleCreateGroup = () => {
    navigation.navigate('players', { group });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="New group" subtitle="Create a new group to start adding new participants" />

        <Input placeholder="Group name" onChangeText={setGroup} />

        <Button label="Create" style={{ marginTop: 20 }} onPress={handleCreateGroup} />
      </Content>
    </Container>
  )
}