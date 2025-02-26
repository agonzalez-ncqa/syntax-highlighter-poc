import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
