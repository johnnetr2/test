import React from 'react'
import Label from '../../../components/atom/label/Label';
import Input_field from '../../atom/input-field/Input_field';
import './Label_field.css'

const Label_field = ({title, type, onChange, name, placeholder, value}) => {
    return (
        <div className="label-field-1">
            <Label title={title}/>
            <Input_field onChange={onChange} type={type} onChange={onChange} name={name} placeholder={placeholder} value={value}/>
        </div>
    )
}

export default Label_field
