import React from 'react'
import { Button } from '@mui/material';

const ExerciseBtn = (props) => {
    return (
        <div className='exercise-btn-1'>
            <Button 
                onClick={() => props.onClick()}
            variant="contained" xs={12} size='small' 
            style={{
                backgroundColor: '#0A1596', color: "#FFFFFF", height: '2.7rem', borderRadius: '.4rem', '&:hover': {
                    backgroundColor: '#0A1596', opacity: [1, 1, 0.9],
                }, textTransform: 'capitalize', width: '100%', marginTop: '2%', marginBottom: '2%'
            }}
            >{props.title}</Button>
        </div>
    )
}

export default ExerciseBtn
