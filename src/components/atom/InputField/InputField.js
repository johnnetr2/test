import React from 'react'
import { Input } from 'reactstrap';

const InputField = (props) => {
    return (
        <div className="input-field-1">
            <Input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} style={{width:'100%', height:'3rem', marginTop:'.5rem', marginBottom:'1rem'}}/>
        </div>
    )
}

export default InputField
