import React from 'react'
import { LinearProgress, Box, Typography } from '@mui/material';

const Progress_Bar = () => {
    return (

        <div className="progress-bar-1">
            <div className="progress-inner">
            <p>12 av 100</p>
            <span className="percent">0%</span>
            </div>
        </div>
    )
}

export default Progress_Bar
