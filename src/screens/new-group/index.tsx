import { Container, Content, Icon } from './styles';
import { Button } from '@/components/button';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { Input } from '@/components/input';

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="New group" subtitle="Create a new group to start adding new participants" />

        <Input placeholder="Group name" />

        <Button label="Create" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}