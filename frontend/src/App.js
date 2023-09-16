import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import PanelComponent from './components/PanelComponent';
import ChatComponent from './components/ChatComponent';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container
        sx={{
          height: '100vh',
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#D8E1ED',
        }}
      >
        <Grid item 
          xs={2} 
          md={3}
        >
          <PanelComponent></PanelComponent>
        </Grid>
        <Grid item 
          xs={10} 
          md={9} 
          sx={{
            height: '100%', 
          }}
        >
          <ChatComponent></ChatComponent>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
