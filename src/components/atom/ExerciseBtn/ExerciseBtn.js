import React from 'react'
import { Button } from '@mui/material';

const Exercise_Btn = (props) => {
    return (
        <div className='exercise-btn-1'>
            <Button variant="contained" xs={12} size='small' sx={{
                backgroundColor: '#0A1596', '&:hover': {
                    backgroundColor: '#0A1596', opacity: [1, 1, 0.9],
                }, textTransform: 'capitalize', width: '100%', marginTop: '2%', marginBottom: '2%'
            }}>{props.title}</Button>
        </div>
    )
}

export default Exercise_Btn
