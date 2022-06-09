import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import doctor1 from '../../../images/doctor1.jpg';
import doctor2 from '../../../images/doctor2.jpg';
import doctor3 from '../../../images/doctor3.jpg';
import doctor4 from '../../../images/doctor4.jpg';
const OurDoctors = () => {
  return (
    <div>
      <Box>
        <Container sx={{ my: 4, py: 3 }}>
          <Typography variant='h5' style={{ color: '#1DBFCC' }}>
            Our Blog
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: '700', py: 4 }}>
            <span style={{ color: '#204066' }}>Our </span>{' '}
            <span style={{ color: '#1DBFCC' }}> Doctors</span>
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={3}>
              <Card sx={{ maxWidth: 345, paddingBottom: '10px' }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='280px'
                  image={doctor3}
                  sx={{}}
                />

                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    style={{ textAlign: 'left', fontWeight: '500' }}
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    Dr. Arron Rodri
                  </Typography>

                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    Surgeon, Proctologist
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className='social-icons' style={{ margin: '0 auto' }}>
                    <a href='#' class='fa fa-facebook'></a>
                    <a href='#' class='fa fa-twitter'></a>
                    <a href='#' class='fa fa-linkedin'></a>
                    <a href='#' class='fa fa-instagram'></a>
                  </div>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4} sm={8} md={3}>
              <Card sx={{ maxWidth: 345, paddingBottom: '10px' }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='280'
                  image={doctor2}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    style={{ textAlign: 'left', fontWeight: '500' }}
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    Dr. Malissa Fierro{' '}
                  </Typography>

                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    Cardiology Specialist
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className='social-icons' style={{ margin: '0 auto' }}>
                    <a href='#' class='fa fa-facebook'></a>
                    <a href='#' class='fa fa-twitter'></a>
                    <a href='#' class='fa fa-linkedin'></a>
                    <a href='#' class='fa fa-instagram'></a>
                  </div>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4} sm={8} md={3}>
              <Card sx={{ maxWidth: 345, paddingBottom: '10px' }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='280px'
                  image={doctor1}
                  sx={{}}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    style={{ textAlign: 'left', fontWeight: '500' }}
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    Dr. Tony Pinto{' '}
                  </Typography>

                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    Emergency Physician
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className='social-icons' style={{ margin: '0 auto' }}>
                    <a href='#' class='fa fa-facebook'></a>
                    <a href='#' class='fa fa-twitter'></a>
                    <a href='#' class='fa fa-linkedin'></a>
                    <a href='#' class='fa fa-instagram'></a>
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4} sm={8} md={3}>
              <Card sx={{ maxWidth: 345, paddingBottom: '10px' }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='280px'
                  image={doctor4}
                  sx={{ size: 'cover' }}
                />

                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    style={{ textAlign: 'left', fontWeight: '500' }}
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    Rebecca Gilbert{' '}
                  </Typography>

                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    Obstetrics & Gynaecology
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className='social-icons' style={{ margin: '0 auto' }}>
                    <a href='#' class='fa fa-facebook'></a>
                    <a href='#' class='fa fa-twitter'></a>
                    <a href='#' class='fa fa-linkedin'></a>
                    <a href='#' class='fa fa-instagram'></a>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default OurDoctors;
