import React from 'react'
import Button from '@mui/material/Button';

const Filled_btn = ({title, onClick}) => {
    return (
        <div className="filled-btn-1">
            <Button variant="contained" onClick={onClick} sx={{
                backgroundColor: '#0A1596', '&:hover': {
                    backgroundColor: '#0A1596', opacity: [1, 1, 0.9]
                }, width: '100%', textDecoration: 'none'
            }}>{title}</Button>
        </div>
    )
}

export default Filled_btn
