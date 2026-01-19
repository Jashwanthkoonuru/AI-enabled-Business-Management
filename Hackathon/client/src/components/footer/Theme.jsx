// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff', // bright AI accent
    },
    secondary: {
      main: '#ffb400', // hover accent
    },
    background: {
      default: '#0a0f24', // dark techy background
      paper: '#0a0f24',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c0c0c0',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    h6: {
      fontWeight: 600,
    },
    body2: {
      color: '#c0c0c0',
    },
  },
});

export default theme;
