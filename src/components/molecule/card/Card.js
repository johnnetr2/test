import React from 'react'
import { Typography, Box } from '@mui/material';
import Progress_Bar from '../../../components/atom/progress-bar/Progress_Bar';

const Card = (props) => {
    return (
            <Box sx={{width:'57%', height:'20%', display:'flex', border:'1px solid #dddddd', boxShadow: '1px 1px 8px #dfdfdf', padding:3, marginTop:2, borderRadius:2}}>
            <Box>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="body1" sx={{width:'80%', fontSize:'0.75rem'}}>{props.title_para}</Typography>
                <Box sx={{width:'90%'}}>
                <Progress_Bar/>
                </Box>
            </Box>
           
            <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', width:'20%'}}>
            <Typography variant="h4" mr={1} >0.0</Typography>
            <Typography variant="body1"  sx={{fontSize:'.75rem'}}>Prognos</Typography>
            </Box>
            </Box>
    )
}

export default Card
