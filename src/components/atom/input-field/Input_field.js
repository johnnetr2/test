import React from 'react'
import './Input_field.css'

const Input_field = (props) => {
    return (
        <div className="input-field-1">
            <input type={props?.type}/>
        </div>
    )
}

export default Input_field
