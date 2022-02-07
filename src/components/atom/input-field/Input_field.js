import React from 'react'
import TextField from '@mui/material/TextField';

const Input_field = (props) => {
    return (
        <div className="input-field-1">
            <TextField type={props.type} variant="outlined" size="small" sx={{width:'80%', marginTop:'1%'}}/>
        </div>
    )
}

export default Input_field
