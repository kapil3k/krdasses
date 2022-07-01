import React from 'react'
import { Grid, Typography } from '@mui/material'
import stickyLogo from "./assignment/stickyLogo.svg";


const Menu = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center' style={{padding:"15px 35px"}}>
      <Grid xs={2}>
      <img src={stickyLogo} height="30px" />
      </Grid>
      <Grid container justifyContent='space-between' xs={5}>
        <Grid style={{cursor:'pointer'}}>Menu 1</Grid>
        <Grid style={{cursor:'pointer'}}>Menu 2</Grid>
        <Grid style={{cursor:'pointer'}}>Menu 3</Grid>
        <Grid style={{cursor:'pointer'}}>Menu 4</Grid>
        <Grid style={{cursor:'pointer'}}>Menu 5</Grid>
      </Grid>
    </Grid>
  )
}

export default Menu