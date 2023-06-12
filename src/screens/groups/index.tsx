import { Container } from './styles';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';

export default function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Groups" subtitle="play with your team" />
    </Container>
  );
}
