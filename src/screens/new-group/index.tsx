import { useNavigation } from '@react-navigation/native';

import { Container, Content, Icon } from './styles';
import { Button } from '@/components/button';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { Input } from '@/components/input';

export default function NewGroup() {
  const navigation = useNavigation()

  const handleCreateGroup = () => {
    navigation.navigate('players', { group: 'Team A' });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="New group" subtitle="Create a new group to start adding new participants" />

        <Input placeholder="Group name" />

        <Button label="Create" style={{ marginTop: 20 }} onPress={handleCreateGroup} />
      </Content>
    </Container>
  )
}