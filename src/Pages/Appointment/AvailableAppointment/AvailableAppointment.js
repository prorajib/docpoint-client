import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {
  const bookings = [
    { id: 1, name: 'Teeth Orthodontics', time: '8:00 am-9:00 am', space: 10 },
    { id: 2, name: 'Cosmetic Dentistry', time: '10:05 am-11:30 am', space: 10 },

    { id: 3, name: 'Teeth Cleaning', time: '5:00 pm- 6:30 pm', space: 10 },

    { id: 4, name: 'Cavity Protection', time: '7:00 am - 8:30 am', space: 10 },

    { id: 5, name: 'Teeth Orthodontics', time: '8:00 am-9:00 am', space: 10 },

    { id: 6, name: 'Teeth Orthodontics', time: '3:00 pm-4:00 pm', space: 10 },
  ];
  return (
    <Container>
      <h2 style={{ color: '#10CFDE', fontSize: '35px' }}>
        Available Appointments on{date.toDateString()}
      </h2>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking date={date} booking={booking} key={booking.id}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
