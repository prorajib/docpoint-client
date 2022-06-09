import { TextareaAutosize, TextField, Typography } from '@mui/material';
import bg from '../../../images/bg.png';
import { Box, Container } from '@mui/system';
import React from 'react';

const Contact = () => {
  const contactBg = {
    background: `url(${bg})`,

    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
  };
  return (
    <div>
      <Box style={contactBg} sx={{ flexGrow: 1 }}>
        <Container sx={{ py: 8 }}>
          <Typography variant='h5' sx={{ color: '#1DBFCC' }}>
            Contact Us
          </Typography>
          <Typography
            sx={{ py: 3, paddingBottom: '50px', color: 'white' }}
            variant='h3'
          >
            Always Connect With Us
          </Typography>
          <form style={{ width: '70%', margin: '0 auto' }}>
            <TextField
              fullWidth
              label='Email Address*'
              id='fullWidth'
              sx={{ background: 'white', borderRadius: '5px' }}
            />
            <TextField
              fullWidth
              label='Subject*'
              id='fullWidth'
              sx={{ mt: 3, background: 'white', borderRadius: '5px' }}
            />
            <TextField
              fullWidth
              id='outlined-multiline-flexible'
              label='Message*'
              multiline
              minRows={4}
              maxRows={10}
              sx={{ mt: 3, background: 'white', borderRadius: '5px' }}
            />
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
