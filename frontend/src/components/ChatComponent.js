import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from './../features/chat/chatSlice';
import DialogComponent from './DialogComponent';
import MessageComponent from './MessageComponent';
import MessageInputComponent from './MessageInputComponent';

function ChatComponent() {
  const messages = useSelector((state) => state.chat.value);
  const dispatch = useDispatch();

  const sendMessage = (message) => {
    dispatch(addMessage({
      id: '121222232',
      type: 'request',
      text: message
    }));
  };

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
      <DialogComponent messages={messages}></DialogComponent>
      <MessageInputComponent sendMessage={sendMessage}></MessageInputComponent>
    </Grid>
  );
}

export default ChatComponent;
