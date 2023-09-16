import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

function SidebarComponent() {
  return (  
    <Grid 
      container 
      direction='column'
      alignItems='center'
      sx={{
        paddingLeft: '20%',
        paddingRight: '20%',
        backgroundColor: '#D8E1ED',
      }}
    >
      <Typography 
        variant='h1' 
        sx={{
          fontSize: '2em', 
          fontWeight: 'bold', 
          paddingTop: '1em'
        }}
      >
        Agile
      </Typography>
      <Grid item 
        container 
        direction='row' 
        justifyContent='center' 
        sx={{
          paddingTop: '4em'
        }}
      >
        <HandshakeOutlinedIcon sx={{ 
          width: '35px', 
          height: '35px', 
          paddingRight: '5px' 
        }}></HandshakeOutlinedIcon>
        <Typography 
          variant='h3' 
          sx={{
            fontSize: '1.5em'
          }}
        >
          AI Agile Coach
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SidebarComponent;
