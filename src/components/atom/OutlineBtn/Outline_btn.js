import React from 'react'
import Logo from '../../../assets/Icons/newGoogle.svg'
import Button from '@mui/material/Button';

const Outline_btn = (props) => {
    return (
        <div className="outline-btn-1">
            {/* <button><img src={Logo} alt="" /> {props.title}</button> */}
            <Button variant="outlined" sx={{textTransform:'capitalize', width:'100%', marginTop:'2%', marginBottom:'2%', border:'1px solid #222'}}><img src={Logo} alt="Google icon" style={{marginRight:'2%'}} />{props.title}</Button>
        </div>
    )
}

export default Outline_btn
