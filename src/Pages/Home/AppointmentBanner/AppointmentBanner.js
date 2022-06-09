import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
const useStyles = makeStyles({
  btn: {
    color: 'white',
    backgroundColor: '#1DBFCC',
    borderRadius: '4px',
    boxShadow: 'inset 0 0 0 0 #00919b',
    transition: 'ease-out 0.3s',
    outline: 'none',
    '&:hover': {
      boxShadow: 'inset 145px 0 0 0 #00919b',
    },
  },
});
const AppointmentBanner = () => {
  const classes = useStyles();

  const appointmentBg = {
    background: `url(${bg})`,
    marginTop: '175px',
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
  };

  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={doctor}
              alt=''
              style={{ width: 400, marginTop: '-110px' }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              textAlign: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <Box>
              <Typography variant='h6' style={{ color: '#1DBFCC' }}>
                Appointment
              </Typography>
              <Typography
                sx={{ my: 5 }}
                variant='h3'
                style={{ color: 'white' }}
              >
                Make and Appointment Today
              </Typography>
              <Typography
                variant='h6'
                style={{ color: 'white', fontWeight: '300', fontSize: '16px' }}
              >
                It is a long established fact that a reader will be distractedby
                the readable content of a page when looking at its
              </Typography>
              <Button
                className={classes.btn}
                size='large'
                sx={{ my: 5, backgroundColor: '#1DBFCC', color: 'white' }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
