import React from 'react'
import { Button, Box } from '@mui/material'

const NextButton = (props) => {
    return (
        <Box>
            <Button sx={{backgroundColor:'none', border:'1px solid #0A1596', color:'#0A1596', textTransform:'capitalize', width:'10rem'}}>{props.title}</Button>
        </Box>
    )
}

export default NextButton
