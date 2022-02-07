import React from 'react'
import { Button } from '@mui/material';

const Exercise_Btn = () => {
    return (
        <div className='exercise-btn-1'>
            <Button variant="contained" xs={12} size='small' sx={{backgroundColor:'#0A1596', textTransform:'capitalize', width:'55%', marginTop:'2%', marginBottom:'2%'}}>Starta övningar</Button>
        </div>
    )
}

export default Exercise_Btn
