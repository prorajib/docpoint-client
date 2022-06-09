import { Avatar, CardHeader, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blog1 from '../../../images/blog1.jpg';
import blog2 from '../../../images/blog2.jpg';
import blog3 from '../../../images/blog3.jpg';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  btn: {
    width: '35%',
    padding: '12px 20px 12px 20px',
    border: 'none',
    marginLeft: '5px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#1DBFCC',
    borderRadius: '4px',
    boxShadow: 'inset 0 0 0 0 #00919b',
    transition: 'ease-out 0.3s',
    outline: 'none',
    '&:hover': {
      boxShadow: 'inset 145px 0 0 0 #00919b',
    },
  },
});

const Blogs = () => {
  const classes = useStyles();
  const btnStyle = {
    border: 'none',
    color: 'white',
    backgroundColor: '#1DBFCC',
    borderRadius: '4px',
    boxShadow: 'inset 0 0 0 0 #1DBFAA',
    transition: 'ease-out 0.3s',
    outline: 'none',
  };

  return (
    <div>
      <Box>
        <Container sx={{ my: 4, py: 3 }}>
          <Typography variant='h5' style={{ color: '#1DBFCC' }}>
            Our Blog
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: '700', py: 4 }}>
            <span style={{ color: '#204066' }}>News </span>{' '}
            <span style={{ color: '#1DBFCC' }}>& Blog</span>
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={4}>
              <Card sx={{ maxWidth: 345, paddingBottom: '10px' }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='200'
                  image={blog1}
                />
                <CardContent>
                  <Typography
                    style={{ textAlign: 'left' }}
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    The Connection Between Post-traumatic
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '8px 8px',
                    }}
                  >
                    <Avatar alt='Remy Sharp' src={people1} />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingLeft: '30px',
                      }}
                    >
                      <Typography>John doe </Typography>

                      <Typography>September 14, 2016 </Typography>
                    </div>
                  </div>
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <button className={classes.btn}>Read More</button>{' '}
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4} sm={8} md={4}>
              <Card sx={{ maxWidth: 345, paddingBottom: '10px' }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='200'
                  image={blog2}
                />
                <CardContent>
                  <Typography
                    style={{ textAlign: 'left' }}
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    Adjusting to life with a spinal cord injury
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '8px 8px',
                    }}
                  >
                    <Avatar alt='Remy Sharp' src={people2} />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingLeft: '30px',
                      }}
                    >
                      <Typography>John doe </Typography>

                      <Typography>September 14, 2016 </Typography>
                    </div>
                  </div>
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <button className={classes.btn}>Read More</button>{' '}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <Card sx={{ maxWidth: 345, paddingBottom: '10px' }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='200'
                  image={blog3}
                  sx={{}}
                />
                <CardContent>
                  <Typography
                    style={{ textAlign: 'left' }}
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    Having overweight and depression can
                  </Typography>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '8px 8px',
                    }}
                  >
                    <Avatar alt='Remy Sharp' src={people3} />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingLeft: '30px',
                      }}
                    >
                      <Typography>John doe </Typography>

                      <Typography>September 14, 2016 </Typography>
                    </div>
                  </div>
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    variant='body2'
                    color='text.secondary'
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <button className={classes.btn}>Read More</button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Blogs;
