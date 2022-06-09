import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const Services = () => {
  const services = [
    {
      name: 'Fluride Treatment',
      description:
        '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur perferendis in non eius reprehenderit fugit architecto voluptates amet magnam',
      img: fluoride,
    },
    {
      name: 'Cavity Filling',
      description:
        '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur perferendis in non eius reprehenderit fugit architecto voluptates amet magnam',
      img: cavity,
    },
    {
      name: 'Whitening Treatment',
      description:
        '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur perferendis in non eius reprehenderit fugit architecto voluptates amet magnam',
      img: whitening,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} style={{ margin: '30px 0 30px 0' }}>
      <Container>
        <Typography variant='h3' sx={{ fontWeight: '700', py: 4 }}>
          <span style={{ color: '#204066' }}>Services </span>{' '}
          <span style={{ color: '#1DBFCC' }}>We Provide</span>
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service service={service}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
