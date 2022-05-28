import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Landing = () => {

  return (
    <div className="">
      <Typography variant="h5">Search your Movie</Typography>
      <TextField id="movie-title-input" label="Movie Title Goes Here" variant="filled" />
      <Button variant="contained" >Search</Button>
    </div>
  )
}

export default Landing