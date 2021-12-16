import React from 'react'
import './Outline_Field.css'

const Outline_Field = (props) => {
    return (
        <div className='outline-field-1'>
            <input className='outline-field-input' type={props?.type} />{props.title}
        </div>
    )
}

export default Outline_Field
