import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const BookingModal = ({ handleOpen, handleClose, booking, date }) => {
  const { name, time, space } = booking;

  const handleBookingSubmit = (e) => {
    alert('Submitting');
    // Collect data
    // Send to the server
    handleClose();
    e.preventDefault();
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={handleOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={handleOpen}>
          <Box
            sx={style}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography
              style={{
                color: '#10CFDE',
                textAlign: 'center',
                fontSize: '25px',
              }}
              sx={{ width: '90%', m: 1 }}
              id='transition-modal-title'
              variant='h6'
              component='h2'
            >
              {name}
            </Typography>
            <form>
              <TextField
                disabled
                sx={{ width: '90%', m: 1 }}
                id='outlined-size-small'
                defaultValue={time}
                size='small'
              />
              <TextField
                sx={{ width: '90%', m: 1 }}
                id='outlined-size-small'
                defaultValue='Your Name'
                size='small'
              />
              <TextField
                sx={{ width: '90%', m: 1 }}
                id='outlined-size-small'
                defaultValue='Your Email'
                size='small'
              />
              <TextField
                sx={{ width: '90%', m: 1 }}
                id='outlined-size-small'
                defaultValue='Phone Number'
                size='small'
              />
              <TextField
                disabled
                sx={{ width: '90%', m: 1 }}
                id='outlined-size-small'
                defaultValue={date.toDateString()}
                size='small'
              />
              <Button
                onClick={handleBookingSubmit}
                sx={{ width: '90%', m: 1 }}
                style={{ background: '#10CFDE' }}
                type='submit'
                variant='contained'
              >
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
