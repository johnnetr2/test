import React from 'react'
import './Exercise_Btn.css'

const Exercise_Btn = (props) => {
    return (
        <div className='exercise-btn-1'>
            <button>{props.title}</button>
        </div>
    )
}

export default Exercise_Btn
