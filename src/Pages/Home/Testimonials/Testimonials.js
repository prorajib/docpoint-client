import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import './Testimonials.css';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const Testimonials = () => {
  return (
    <div>
      <Box>
        <Container>
          <Typography sx={{ py: 2, color: '#1DBFCC' }} variant='h5'>
            <br></br>
            TESTIMONIAL
          </Typography>
          <Typography
            sx={{ py: 5, color: '#204066', fontWeight: '700' }}
            variant='h3'
          >
            What Our <span style={{ color: '#1DBFCC' }}>Patients say's</span>
          </Typography>
          <Grid container spacing={2} sx={{ margin: '0 auto' }}>
            <Grid md={4} xs={12} sx={{}}>
              <Card
                sx={{
                  maxWidth: 345,
                  paddingBottom: '10px',
                  borderTop: '5px solid #1DBFCC',
                  borderRadius: '10px',
                }}
              >
                <div>
                  <div style={{ textAlign: 'left' }}>
                    <i
                      style={{ fontSize: '40px', color: '#1DBFCC' }}
                      class='fa fa-quote-left'
                      aria-hidden='true'
                    ></i>
                  </div>
                </div>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    "Recently used DocPoint for health check up for a whole body
                    check up. The entire process from check in to the end was
                    seamless. The staff at the health check department was
                    courteous, helpful and very attentive.I would highly
                    recommend DocPoint anyone looking for something similar
                    services."
                  </Typography>
                </CardContent>
                <CardActions>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '8px 8px',
                    }}
                  >
                    <Avatar
                      sx={{ width: '50px', height: '50px' }}
                      alt='Remy Sharp'
                      src={people3}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingLeft: '30px',
                      }}
                    >
                      <Typography>Ashley Rosa</Typography>
                      <Stack spacing={1}>
                        <Rating
                          name='half-rating-read'
                          defaultValue={4.5}
                          readOnly
                        />
                      </Stack>
                    </div>
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid md={4} xs={12} sx={{ my: 3 }}>
              <Card
                sx={{
                  maxWidth: 345,
                  paddingBottom: '10px',
                  borderTop: '5px solid #1DBFCC',
                  borderRadius: '10px',
                }}
              >
                <div>
                  <div style={{ textAlign: 'left' }}>
                    <i
                      style={{ fontSize: '40px', color: '#1DBFCC' }}
                      class='fa fa-quote-left'
                      aria-hidden='true'
                    ></i>
                  </div>
                </div>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    "Recently used DocPoint for health check up for a whole body
                    check up. The entire process from check in to the end was
                    seamless. The staff at the health check department was
                    courteous, helpful and very attentive.I would highly
                    recommend DocPoint anyone looking for something similar
                    services."
                  </Typography>
                </CardContent>
                <CardActions>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '8px 8px',
                    }}
                  >
                    <Avatar
                      sx={{ width: '50px', height: '50px' }}
                      alt='Remy Sharp'
                      src={people1}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingLeft: '30px',
                      }}
                    >
                      <Typography>John David </Typography>
                      <Stack spacing={1}>
                        <Rating
                          name='half-rating-read'
                          defaultValue={4.5}
                          readOnly
                        />
                      </Stack>
                    </div>
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid spacing={2} md={4} xs={12} sx={{ marginBottom: '10px' }}>
              <Card
                sx={{
                  maxWidth: 345,
                  paddingBottom: '10px',
                  borderTop: '5px solid #1DBFCC',
                  borderRadius: '10px',
                }}
              >
                <div>
                  <div style={{ textAlign: 'left' }}>
                    <i
                      style={{ fontSize: '40px', color: '#1DBFCC' }}
                      class='fa fa-quote-left'
                      aria-hidden='true'
                    ></i>
                  </div>
                </div>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    "Recently used DocPoint for health check up for a whole body
                    check up. The entire process from check in to the end was
                    seamless. The staff at the health check department was
                    courteous, helpful and very attentive.I would highly
                    recommend DocPoint anyone looking for something similar
                    services."
                  </Typography>
                </CardContent>
                <CardActions>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '8px 8px',
                    }}
                  >
                    <Avatar
                      sx={{ width: '50px', height: '50px' }}
                      alt='Remy Sharp'
                      src={people2}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingLeft: '30px',
                      }}
                    >
                      <Typography>Sara Croft </Typography>
                      <Stack spacing={1}>
                        <Rating
                          name='half-rating-read'
                          defaultValue={4.5}
                          readOnly
                        />
                      </Stack>
                    </div>
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

export default Testimonials;
