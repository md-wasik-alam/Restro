import { Grid } from '@mui/material'
import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function RecipieCard(props) {
  const handleClick = (data) => {
    // console.log("ReciptCard content "+data);
    props.handleClick(data);

  }
  return (
    <Card sx={{ width: 150, height: 280 }} onClick={() => handleClick(props.data)}>
      <CardMedia image={"./Image/"+props.img} sx={{ objectFit: "cover", height: 140 }} component="img" />
      <CardContent>
        <Typography variant='h5' >{props.title}</Typography>
        <Typography variant='h5'>RS. {props.price} /-</Typography>
      </CardContent>
    </Card>
  )
}

export default function Content(props) {
  const handleClick = (data) => {
    // console.log("handle click"+data);
    props.handleClick(data);
  }
  return (
    <Grid container spacing={2} sx={{ mt: 1, ml: 1 }}>
      {
        props.Product.map((value, key) => (
          <Grid item key={key}> <RecipieCard 
          handleClick={(data)=>handleClick(data)} 
          data={value}
          img={value.img} title={value.title} price={value.price}/ ></Grid>

        ))
      }

    </Grid>
  )
}
