import { useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import MessageComponent from './MessageComponent';

function DialogComponent({messages}) {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    content.scrollTop = content.scrollHeight;
  }, [messages]);
  
  return (
    <Grid item xs={10} container
      direction='column' 
      ref={ contentRef }
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
