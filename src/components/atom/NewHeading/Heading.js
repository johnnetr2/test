import React from 'react'
import { Typography } from '@mui/material'

const Heading = (props) => {
  return (
    <div>
        <Typography variant='h4' component="h4">{props.title}</Typography>
    </div>
  )
}

export default Heading