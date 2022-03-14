import React from 'react'
import { LinearProgress, Box, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        '& .css-5xe99f-MuiLinearProgress-bar1':{
            backgroundColor:'#27AE60'
        }
    }
}))

const ProgressBar = () => {

    const classes = useStyles();

    return (
                <Box sx={{ display: 'flex', alignItems:'center'}}>
                    <Box sx={{ width: '100%', mr: 1}}>
                        <LinearProgress className={classes.root} sx={{height:12, borderRadius:'5rem', backgroundColor:'#e1e1e1', color:'red'}} variant="determinate" value={50} />
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">{`${Math.round(
                            50,
                        )}%`}</Typography>
                    </Box>
                </Box>
    )
}

export default ProgressBar