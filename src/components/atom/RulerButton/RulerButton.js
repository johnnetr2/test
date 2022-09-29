import React from 'react'
import { Button } from '@mui/material';

const RulerButton = () => {
    return (
        <div className='exercise-btn-1'>
            <Button 
            variant="contained" 
            xs={12} 
            size='medium' 
            style={{ backgroundColor: '#5263EB', color: "#FFFFFF", borderRadius: '.6em', padding: ".5em 3em", textTransform:"none", fontWeight: "400" }}
            >
                Visa linjal
            </Button>
        </div>
    )
}

export default RulerButton