import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const sendColor = '#FEE2C5';
const receiveColor = '#C4DDFF';
const bg = '#fff';

const StyledRequest = styled(Typography)({
  position: 'relative',
  margin: '15px',
  padding: '15px',
  wordWrap: 'break-word',
  maxWidth: '450px',
  borderRadius: '25px',
  backgroundColor: sendColor,
  fontSize: '16px',
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    height: '25px',
    right: '-7px',
    width: '20px',
    backgroundColor: sendColor,
    borderBottomLeftRadius: '16px 14px',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    height: '25px',
    right: '-26px',
    width: '26px',
    backgroundColor: bg,
    borderBottomLeftRadius: '10px',
  }
});

const StyledResponse = styled(Typography)({
  position: 'relative',
  margin: '15px',
  padding: '15px',
  wordWrap: 'break-word',
  maxWidth: '450px',
  borderRadius: '25px',
  backgroundColor: receiveColor,
  fontSize: '16px',
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    height: '25px',
    left: '-7px',
    width: '20px',
    backgroundColor: receiveColor,
    borderBottomRightRadius: '16px 14px',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    height: '25px',
    left: '-26px',
    width: '26px',
    backgroundColor: bg,
    borderBottomRightRadius: '10px',
  }
});

function MessageComponent({message}) {
  return (message.type === 'request' ?
    <Grid item 
      sx={{ 
        alignSelf: 'end',
      }}>
      <StyledRequest>
        { message.text }
      </StyledRequest>
    </Grid>
    :
    <Grid item 
      sx={{ 
        alignSelf: 'start' 
      }}>
      <StyledResponse>
        { message.text }
      </StyledResponse>
    </Grid>
  );
}

export default MessageComponent;
