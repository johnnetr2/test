import React from 'react'
import Logo from '../../../assets/icons/google.svg'
import Button from '@mui/material/Button';

const Outline_btn = (props) => {
    return (
        <div className="outline-btn-1">
            {/* <button><img src={Logo} alt="" /> {props.title}</button> */}
            <Button variant="outlined" sx={{textTransform:'capitalize', width:'80%', marginTop:'2%', marginBottom:'2%', border:'1px solid #222'}}><img src={Logo} alt="Google icon" />{props.title}</Button>
        </div>
    )
}

export default Outline_btn
