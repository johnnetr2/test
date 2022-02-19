import React from 'react'
import TextField from '@mui/material/TextField';

const Input_field = ({type, placeholder, value, name, onChange}) => {
    return (
        <div className="input-field-1">
            <input type={type} placeholder={placeholder} value={value} name={name} onChange={onChange}/>
        </div>
    )
}

export default Input_field
