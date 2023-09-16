import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MessageComponent from './MessageComponent';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function MessageInputComponent({sendMessage}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendButton = (event) => {
    sendMessage(inputValue);
    setInputValue('');
  };

  return (
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
            value={ inputValue }
            onChange={ handleInputChange }
            InputProps={{ sx: { 
              borderRadius: '15px',
            }}} 
          />
        </Grid>
        <Grid item xs={2} md={2}>
          <IconButton 
            color='default' 
            aria-label='Send' 
            sx={{ margin: '10px' }}
            onClick={ handleSendButton }
          >
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
  );
}

export default MessageInputComponent;
