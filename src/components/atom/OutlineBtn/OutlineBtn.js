import React from 'react'
import Logo from '../../../assets/Icons/Google.svg'
import Button from '@mui/material/Button';

const OutlineBtn = (props) => {
    return (
        <div>
            {/* <button><img src={Logo} alt="" /> {props.title}</button> */}
            <Button variant="outlined" sx={{textTransform:'capitalize', width:'100%', marginTop:'2%', marginBottom:'2%', border:'1px solid #222'}}><img src={Logo} alt="Google icon" style={{marginRight:'2%'}} />{props.title}</Button>
        </div>
    )
}

export default OutlineBtn
