import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Cookies from 'js-cookie';
import { setHistory, addMessage } from '../redux/slices/chatSlice';
import DialogComponent from './DialogComponent';
import MessageInputComponent from './MessageInputComponent';
import { socket } from './../socket';
import { createRequest, createResponse } from '../redux/actions/chatActions';

function ChatComponent() {
  const [isUserTyping, setIsUserTyping] = useState(false);
  const messages = useSelector((state) => state.chat.value);
  const dispatch = useDispatch();

  useEffect(() => {
    function onResponse(data) {
      dispatch(addMessage(createResponse(data)));
      setIsUserTyping(false);
    }

    function setChatHistory(data) {
      dispatch(setHistory(data));
    }

    socket.on('response', onResponse);
    socket.on('chat_history', setChatHistory);

    const chatID = Cookies.get('chatID');
    socket.emit('findChat', chatID);

    return () => {
      socket.off('response', onResponse);
    };
  }, []);

  // send message to server
  const sendMessage = (messageText) => {
    const messageData = createRequest(messageText);
    
    dispatch(addMessage(messageData));

    socket.emit('request', messageData, () => {
      console.log('Message was sent!');
    });

    setIsUserTyping(true);
  };

  return (
    <Grid 
      container 
      direction='column'
      sx={{
        padding: '20px 40px 20px 20px',
        height: '100%',
        borderBottomLeftRadius: '60px',
        borderTopLeftRadius: '60px',
        backgroundColor: '#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        flexWrap: 'nowrap',
      }}
    >
      <DialogComponent messages={messages}></DialogComponent>
      <MessageInputComponent 
        sendMessage={sendMessage} 
        isUserTyping={isUserTyping}
      ></MessageInputComponent>
    </Grid>
  );
}

export default ChatComponent;
