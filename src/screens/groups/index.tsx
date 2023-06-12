import { Container } from './styles';
import { GroupCard } from '@/components/group-card';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';

export default function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Groups" subtitle="play with your team" />

      <GroupCard title="Group test" />
    </Container>
  );
}
