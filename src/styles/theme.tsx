import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#393E46',
      main: '#FFD369',
      dark: '#222831',
      contrastText: '#EEEEEE',
    },
  },
  typography: {
    fontFamily: ['Nanum Pen Script', 'cursive'].join(','),
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {}
      : {
          primary: '#FFD369',
          divider: '#EEEEEE',
          background: {
            default: '#222831',
            paper: '#222831',
          },
          text: {
            primary: '#EEEEEE',
          },
        }),
  },
});
