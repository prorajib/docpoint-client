import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';
const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', my: 5 }}>
      <Grid item xs={12} sx={{ width: '50%' }} md={6} lg={6}>
        <Calender date={date} setDate={setDate}></Calender>
      </Grid>
      <Grid item xs={12} md={6} lg={6} sx={{ width: '50%' }}>
        <img style={{ width: '100%' }} src={chair} alt='' />
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
