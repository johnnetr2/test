import React from 'react'
import Label from '../../../components/atom/label/Label';
import Input_field from '../../atom/input-field/Input_field';

const Label_field = (props) => {
    return (
        <div className="label-field-1">
            <Label title={props?.title}/>
            <Input_field type={props?.type}/>
        </div>
    )
}

export default Label_field
