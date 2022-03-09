import React from 'react'
import Label from '../../atom/Label/Label';
import InputField from '../../atom/InputField/InputField';

const LabelField = (props) => {
    return (
        <div className="label-field-1">
            <Label title={props?.title}/>
            <InputField type={props?.type} name={props?.name} onChange={props?.onChange} placeholder={props?.placeholder}/>
        </div>
    )
}

export default LabelField
