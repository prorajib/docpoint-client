import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import homethirdSection from '../../../images/homethirdSection.jpg';
import qualifiedicon from '../../../images/qualifiedicon.png';
import equipmenticon from '../../../images/equipmenticon.png';
import emergencyicon from '../../../images/emergencyicon.png';
import individualicon from '../../../images/individualicon.png';

const WhyChooseUs = () => {
  const verticalCenter = {
    display: 'flex',
    alignItems: 'center',

    height: 450,
  };
  return (
    <Box sx={{ my: 7 }}>
      <Container sx={{ my: 5 }}>
        <Grid sx={{ my: 4 }} container spacing={2}>
          <Grid item xs={12} md={6} sm={12} lg={6}>
            <img
              style={{ width: '100%', minHeight: '380px' }}
              src={homethirdSection}
              alt=''
            />
          </Grid>
          <Grid
            container
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0',
            }}
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Typography
              sx={{
                fontWeight: '500',
                fontSize: '40px',
                textAlign: 'center',
              }}
              variant='h3'
            >
              <span style={{ color: '#204066' }}>Why</span>{' '}
              <span style={{ color: '#1DBFCC' }}>Choose Us</span>
            </Typography>
            <Typography
              variant='h6'
              sx={{
                fontSize: 16,
                color: 'gray',
                my: 4,
                fontWeight: 300,
                textAlign: 'justify',
              }}
            >
              The DocPoint private medical clinic specializes in a wide variety
              of health issues, related to absolutely any age or severity level.
              Our seasoned team of highly trained physicians and practical
              nurses will be glad to help you 24/7!
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: '30px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0',
                    margin: '0',
                  }}
                >
                  <img
                    src={qualifiedicon}
                    alt=''
                    srcset=''
                    style={{ width: '35px', paddingRight: '10px' }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    {' '}
                    <Typography variant='h5' style={{ marginBottom: '5px' }}>
                      Qualified Doctors
                    </Typography>
                    <Typography variant='p' sx={{ color: 'gray' }}>
                      10 years of experience
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: '40px',
                    margin: '0',
                  }}
                >
                  <img
                    src={equipmenticon}
                    alt=''
                    srcset=''
                    style={{ width: '35px', paddingRight: '10px' }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    {' '}
                    <Typography variant='h5' style={{ marginBottom: '5px' }}>
                      Modern Equipment
                    </Typography>
                    <Typography variant='p' sx={{ color: 'gray' }}>
                      Branded and time tested
                    </Typography>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0',
                    margin: '0',
                  }}
                >
                  <img
                    src={emergencyicon}
                    alt=''
                    srcset=''
                    style={{ width: '35px', paddingRight: '10px' }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    {' '}
                    <Typography variant='h5' style={{ marginBottom: '5px' }}>
                      Emergency Help
                    </Typography>
                    <Typography variant='p' sx={{ color: 'gray' }}>
                      Get help anytime
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: '40px',
                    margin: '0',
                  }}
                >
                  <img
                    src={individualicon}
                    alt=''
                    srcset=''
                    style={{
                      width: '35px',

                      paddingRight: '10px',
                    }}
                  />
                  <div style={{ textAlign: 'left', marginRight: '-8px' }}>
                    {' '}
                    <Typography
                      variant='h5'
                      style={{ marginBottom: '5px', textAlign: 'left' }}
                    >
                      Individual Approach
                    </Typography>
                    <Typography
                      variant='p'
                      sx={{ color: 'gray', textAlign: 'left' }}
                    >
                      Each case is always special
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
