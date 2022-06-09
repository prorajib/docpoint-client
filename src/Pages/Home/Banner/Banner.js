import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Typography } from '@mui/material';
import { Box, Container, display } from '@mui/system';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
const useStyles = makeStyles({
  btn: {
    width: '35%',
    padding: '15px 20px 15px 20px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#1DBFCC',
    borderRadius: '4px',
    boxShadow: 'inset 0 0 0 0 #00919b',
    transition: 'ease-out 0.3s',
    outline: 'none',
    '&:hover': {
      boxShadow: 'inset 200px 0 0 0 #00919b',
    },
  },
});

const Banner = () => {
  const classes = useStyles();
  const bannerBg = {
    background: `url(${bg})`,
  };
  const verticalCenter = {
    display: 'flex',
    alignItems: 'center',

    height: 450,
  };
  return (
    <Box>
      <Container style={bannerBg} sx={{}}>
        <Grid container spacing={2}>
          <Grid
            container
            spacing={2}
            item
            style={{
              ...verticalCenter,
              textAlign: 'left',
              padding: '30px 0px 0 30px',
            }}
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Typography sx={{ my: 5 }} variant='h3'>
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant='h6'
              sx={{ fontSize: 14, color: 'gray', my: 3, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nesciunt odit est. Minima illum libero quod consectetur, obcaecati
              earum quite!
            </Typography>
            <Button
              sx={{ my: 4, padding: '12px ', fontSize: '15px' }}
              style={{ background: '#1DBFCC', color: 'white' }}
              className={classes.btn}
            >
              Get Appointment
            </Button>
          </Grid>

          <Grid item style={verticalCenter} xs={12} md={6} sm={12} lg={6}>
            <img style={{ width: '100%' }} src={chair} alt='' />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          sx={{}}
        >
          <Grid item xs={12} md={4} sx={{}}>
            <Card sx={{ backgroundColor: '#1DBFCC', color: 'white' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <AccessTimeIcon
                  sx={{
                    alignItems: 'center',
                    fontSize: '60px',
                    padding: '20px  20px',
                    py: 3,
                    textAlign: 'center',
                  }}
                ></AccessTimeIcon>
                <div>
                  <Typography variant='h5' component='div'>
                    Opening hours
                  </Typography>

                  <Typography variant='body2'>
                    Mon–Fri 8:00am–7:00pm <br /> Saturday 9:00am–5:00pm <br />
                    Sunday 9:00am–3:00pm
                    <br />
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sx={{}}>
            <Card sx={{ backgroundColor: '#204066', color: 'white' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <LocationOnIcon
                  sx={{
                    alignItems: 'center',
                    fontSize: '60px',
                    padding: '20px  20px',
                    py: 3,
                    textAlign: 'center',
                  }}
                ></LocationOnIcon>
                <div>
                  <Typography variant='h5' component='div'>
                    Visit our location
                  </Typography>

                  <Typography variant='body2'>
                    Banani 1213,Dhaka, Bangladesh
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sx={{}}>
            <Card sx={{ backgroundColor: '#1DBFCC', color: 'white' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <PhoneInTalkIcon
                  sx={{
                    alignItems: 'center',
                    fontSize: '60px',
                    padding: '20px  20px',
                    py: 3,
                    textAlign: 'center',
                  }}
                ></PhoneInTalkIcon>
                <div>
                  <Typography variant='h5' component='div'>
                    Contact us now
                  </Typography>

                  <Typography variant='body2'>+8801712345678</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
