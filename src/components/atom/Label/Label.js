import React from 'react'
import { Typography } from '@mui/material';

const Label = (props) => {
    return (
        <div className="label-1">
            <Typography variant="body1">{props.title}</Typography>
        </div>
    )
}

export default Label
