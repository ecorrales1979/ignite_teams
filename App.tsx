import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import Groups from '@/screens/groups';
import theme from '@/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
