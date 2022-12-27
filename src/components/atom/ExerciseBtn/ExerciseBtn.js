import React from 'react'
import { Button } from '@mui/material';
import { appColors } from '../../service/commonService';

const ExerciseBtn = (props) => {
    return (
        <div className='exercise-btn-1'>
            <Button
                onClick={() => props.onClick()}
                variant="contained" xs={12} size='small'
                style={{
                    backgroundColor: appColors.blueColor, color: "#FFFFFF", height: '2.7rem', borderRadius: '.4rem', '&:hover': {
                        backgroundColor: appColors.blueColor, opacity: [1, 1, 0.9],
                    }, textTransform: 'capitalize', width: '100%'
                }}
            >{props.title}</Button>
        </div>
    )
}

export default ExerciseBtn
