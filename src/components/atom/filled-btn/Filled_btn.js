import React from 'react'
import './Filled_btn.css'
const Filled_btn = ({title, onClick}) => {
    return (
        <div className="filled-btn-1">
            <button onClick={onClick} >{title}</button>
        </div>
    )
}

export default Filled_btn
