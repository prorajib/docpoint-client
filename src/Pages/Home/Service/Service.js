import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
      <CardMedia
        component='img'
        height='140'
        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
        image={img}
        alt='green iguana'
      />
      <CardContent>
        <Typography variant='h5' component='div'>
          {name}
        </Typography>

        <Typography variant='body2'>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
