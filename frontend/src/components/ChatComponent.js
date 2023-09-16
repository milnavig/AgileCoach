import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MessageComponent from './MessageComponent';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function ChatComponent() {
  return (
    <Grid 
      container 
      direction='column'
      sx={{
        padding: '20px',
        height: '100%',
        borderBottomLeftRadius: '60px',
        borderTopLeftRadius: '60px',
        backgroundColor: '#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        flexWrap: 'nowrap'
      }}
    >
      <Grid item xs={10} container direction='column' 
        sx={{
          paddingRight: '50px',
          paddingLeft: '50px',
          width: '100%', 
          overflow: 'auto',
          flexWrap: 'nowrap'
        }}
      >
        
        <MessageComponent type='response'></MessageComponent>
        <MessageComponent type='request'></MessageComponent>
        <MessageComponent type="response"></MessageComponent>
        <MessageComponent type="request"></MessageComponent>
        <MessageComponent type="response"></MessageComponent>
        <MessageComponent type="request"></MessageComponent>
        <MessageComponent type="response"></MessageComponent>
        <MessageComponent type="request"></MessageComponent>
        <MessageComponent type="response"></MessageComponent>
        <MessageComponent type="request"></MessageComponent>
        <MessageComponent type="response"></MessageComponent>
        <MessageComponent type="request"></MessageComponent>
        <MessageComponent type="response"></MessageComponent>
        <MessageComponent type="request"></MessageComponent>


      </Grid>
      <Grid item 
        xs={2} 
        container 
        direction='column' 
        sx={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Typography 
          sx={{
            fontSize: '1em', 
            padding: '5px 0', 
            color: '#ACADAD', 
            width: '70%'
          }}
        >
          AgileGPT writing...
        </Typography>
        <Grid item container 
          direction='row' 
          sx={{
            width: '70%',
            justifyContent: 'start',
            alignItems: 'center'
          }}
        >
          <Grid item xs={10} md={10}>
            <TextField fullWidth
              placeholder='Ask me anything that I can help you or your team...'
              InputProps={{ sx: { 
                borderRadius: '15px',
              }}} 
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <IconButton color='default' aria-label='Send' sx={{ margin: '10px' }}>
              <NearMeOutlinedIcon 
                sx={{ 
                  width: '35px', 
                  height: '35px' 
                }}
              ></NearMeOutlinedIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ChatComponent;
