import React from 'react'
import { LinearProgress, Box, Typography } from '@mui/material';

const Progress_Bar = () => {
    return (

        <div className="progress-bar-1">
            <div className="progress">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1, mt:1}}>
                        <LinearProgress sx={{height:12, borderRadius:'5rem', backgroundColor:'#e1e1e1', color:'red'}} variant="determinate" value={50} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                        <Typography variant="body2" color="text.secondary">{`${Math.round(
                            50,
                        )}%`}</Typography>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Progress_Bar
