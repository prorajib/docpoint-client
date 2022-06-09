import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ my: 5, mx: 3, py: 3 }} elevation={3}>
          <Typography
            style={{ color: '#10CFDE', fontWeight: 500 }}
            variant='h5'
            gutterBottom
            component='div'
          >
            {name}
          </Typography>
          <Typography variant='h6' gutterBottom component='div'>
            {time}
          </Typography>
          <Typography variant='caption' display='block' gutterBottom>
            {space} Spaces Available
          </Typography>
          <Button
            onClick={handleOpen}
            style={{ background: '#10CFDE' }}
            variant='contained'
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        date={date}
        handleOpen={open}
        handleClose={handleClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
