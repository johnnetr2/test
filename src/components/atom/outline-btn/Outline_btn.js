import React from 'react'
import Logo from '../../../assets/icons/google.svg'

const Outline_btn = (props) => {
    return (
        <div className="outline-btn-1">
            <button><img src={Logo} alt="" /> {props.title}</button>
        </div>
    )
}

export default Outline_btn
