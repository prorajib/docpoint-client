import {
  Button,
  Grid,
  MenuItem,
  MenuList,
  TextField,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';

//import { makeStyles } from '@material-ui';
import './Footer.css';

const useStyles = makeStyles({
  link: {
    '&:hover': {
      color: '#1DBFCC',
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  const linkColor = { color: '#1DBFCC' };
  return (
    <div>
      <Container sx={{ my: 7 }}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Typography variant='h4' style={{ color: '#1DBFCC' }}>
              {' '}
              DocPoint
            </Typography>
            <Typography
              variant='h6'
              style={{
                color: 'gray',
                fontWeight: '200',
                fontSize: '16px',
                paddingTop: '15px',
              }}
            >
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour or randomised
              words.
            </Typography>
            <div className='social-icons'>
              <a href='#' class='fa fa-facebook'></a>
              <a href='#' class='fa fa-twitter'></a>
              <a href='#' class='fa fa-linkedin'></a>
              <a href='#' class='fa fa-youtube'></a>
              <a href='#' class='fa fa-instagram'></a>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant='h4' style={{ color: '#1DBFCC' }}>
              {' '}
              Services
            </Typography>

            <MenuList
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'gray',
              }}
            >
              <MenuItem className={classes.link}>Therapiya</MenuItem>
              <MenuItem className={classes.link}>Dentistry</MenuItem>
              <MenuItem className={classes.link}>Virusology</MenuItem>
              <MenuItem className={classes.link}>Phamocology</MenuItem>
              <MenuItem className={classes.link}>Cardiology</MenuItem>
            </MenuList>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant='h4' style={{ color: '#1DBFCC' }}>
              {' '}
              Usefull Links
            </Typography>

            <MenuList
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '22px',
                color: 'gray',
              }}
            >
              <MenuItem
                className={classes.link}
                sx={{ fontWeight: '400' }}
                to='/'
              >
                Home
              </MenuItem>
              <MenuItem className={classes.link} sx={{ fontWeight: '400' }}>
                About us
              </MenuItem>
              <MenuItem className={classes.link} sx={{ fontWeight: '400' }}>
                News
              </MenuItem>
              <MenuItem className={classes.link} sx={{ fontWeight: '400' }}>
                Doctors
              </MenuItem>
              <MenuItem className={classes.link} sx={{ fontWeight: '400' }}>
                Contact Us
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography
              variant='h4'
              style={{ color: '#1DBFCC', marginBottom: '10px' }}
            >
              {' '}
              Subscribe
            </Typography>
            <TextField fullWidth label='Email' id='fullWidth' />
            <Button
              className='subscribe-btn'
              size='large'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 1, background: '#1DBFCC' }}
            >
              {' '}
              SUBSCRIBE
            </Button>
            <Typography
              variant='h6'
              style={{
                color: 'gray',
                fontWeight: '200',
                fontSize: '16px',
                paddingTop: '15px',
              }}
            >
              Get The Latest Updates via email. Any time you may unsubscribe
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            mt: 7,
            paddingTop: '14px',
            color: 'gray',
            borderTop: '1px solid gray',
          }}
          variant='h4'
        >
          <Typography>copyright 2022 All Rights Reserved</Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
