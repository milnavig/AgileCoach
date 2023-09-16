import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MessageComponent from './MessageComponent';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function DialogComponent({messages}) {
  return (
    <Grid item xs={10} container direction='column' 
      sx={{
        paddingRight: '50px',
        paddingLeft: '50px',
        width: '100%', 
        overflow: 'auto',
        flexWrap: 'nowrap'
      }}
    >  
      {
        messages.map(message => <MessageComponent message={message} key={message.id}></MessageComponent>)
      }
    </Grid>
  );
}

export default DialogComponent;
