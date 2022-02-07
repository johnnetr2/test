import React from 'react'
import Button from '@mui/material/Button';

const Filled_btn = (props) => {
    return (
        <div className="filled-btn-1">
            <Button variant="contained" sx={{backgroundColor:'#0A1596', width:'80%', textDecoration:'none', marginTop:'2%', marginBottom:'2%'}}>{props.title}</Button>
        </div>
    )
}

export default Filled_btn
