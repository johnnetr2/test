import React from 'react'
import {Box, Checkbox, label} from '@mui/material';


const Outline_Field = (props) => {
    return (
        <div className='outline-field-1'>
            {/* <input className='outline-field-input' type={props?.type} />{props.title} */}
            <Box
         sx={{
            width: 140,
            height: 60,
            backgroundColor: '#fff',
            boxShadow:'1px 1px 8px #dfdfdf',
            borderRadius:'.25rem',
            marginLeft:'.25rem',
            marginRight:'.25rem',
            border:'1px solid #e1e1e1',
            display:'flex',
            flexWrap:'wrap',
            color:'#555555',
            justifyContent:'center',
            alignItems:'center',
            }}
            >
                <Checkbox size="small" sx={{margin:'0rem', width:20, height:20}} m={0} />
                {props.title}
        </Box>
        </div>
    )
}

export default Outline_Field
