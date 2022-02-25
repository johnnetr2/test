import React from 'react'
// import TextField from '@mui/material/TextField';
import { Input } from 'reactstrap';

const Input_field = (props) => {
    return (
        <div className="input-field-1">
            <Input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} style={{width:'100%', height:'3rem', marginTop:'.5rem', marginBottom:'1rem'}}/>
        </div>
    )
}

export default Input_field
