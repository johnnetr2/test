import React from 'react'
import { Typography } from '@mui/material';

const Label = (props) => {
    return (
        <div className="label-1">
            <Typography style={{ color: "#B5B5B5" }} variant="body1">{props.title}</Typography>
        </div>
    )
}

export default Label
