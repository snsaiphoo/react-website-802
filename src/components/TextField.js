import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > div > :not(style)': { m: 1, width: '40ch', backgroundColor: '#f0f0f0' }, // TextField styling
        '& > div > button': { color: 'darkgreen', alignItems: 'center'} // Button text color
      }}
      noValidate
      autoComplete="off"
    >

      <div><TextField id="filled-basic" label="Email" variant="filled" /></div>

      <div><TextField id="filled-basic" label="Query" variant="filled" multiline rows={6} /></div>
   
      <div><Button variant="contained" endIcon={<SendIcon />} size="large" sx={{ alignSelf: 'center' }}>
        Send
      </Button></div>

    </Box>
  );
}

export default BasicTextFields;
