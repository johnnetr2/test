import React from 'react'
import Label from '../../atom/Label/Label';
import Input_field from '../../atom/InputField/InputField';

const Label_field = (props) => {
    return (
        <div className="label-field-1">
            <Label title={props?.title}/>
            <Input_field type={props?.type} name={props?.name} onChange={props?.onChange} placeholder={props?.placeholder}/>
        </div>
    )
}

export default Label_field
