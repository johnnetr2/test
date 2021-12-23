import React from 'react'
import './Label.css'

const Label = (props) => {
    return (
        <div className="label-1">
            <label htmlFor="">{props.title}</label>
        </div>
    )
}

export default Label
