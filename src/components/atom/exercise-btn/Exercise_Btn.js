import React from 'react'
import { Button } from '@mui/material';

const Exercise_Btn = (props) => {
    return (
        <div className='exercise-btn-1'>
            <button>{props.title}</button>
        </div>
    )
}

export default Exercise_Btn
