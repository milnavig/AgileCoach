import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import SidebarComponent from './components/SidebarComponent';
import ChatComponent from './components/ChatComponent';
import { socket } from './socket';

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
  const isXsScreen = useMediaQuery('(max-width: 700px)');

  useEffect(() => {
    function onConnect() {
      console.log('WebSockets connected!');
    }

    function onDisconnect() {
      console.log('WebSockets disconnected!');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    // set chatID
    if (!Cookies.get('chatID')) {
      Cookies.set('chatID', uuidv4(), { expires: 7 });
    }

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container
        sx={{
          height: !isXsScreen ? '100vh' : '100%',
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#D8E1ED',
          flexDirection: !isXsScreen ? 'row' : 'column',
          alignItems: 'center',
        }}
      >
        <Grid item 
          xs={2} 
          md={3}
          sx={{
            height: !isXsScreen ? '100%' : '50%', 
            maxWidth: '100%',
          }}
        >
          <SidebarComponent></SidebarComponent>
        </Grid>
        <Grid item 
          xs={10} 
          md={9} 
          sx={{
            height: !isXsScreen ? '100%' : '50%', 
            alignSelf: 'end',
          }}
        >
          <ChatComponent></ChatComponent>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
