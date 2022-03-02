import React from 'react'
// import './Outline_Box.css'
import Box from '@mui/material/Box';

const Outline_Box = (props) => {
    return (
        <div onClick={() => props.onChangeCheck(props.title)} >
            <Box
                sx={props.checked ? {
                    width: 60,
                    height: 60,
                    backgroundColor: '#0a1596',
                    boxShadow: '1px 1px 8px #dfdfdf',
                    borderRadius: '.25rem',
                    marginLeft: '.25rem',
                    marginRight: '.25rem',
                    border: '1px solid #e1e1e1',
                    display: 'flex',
                    flexWrap: 'wrap',
                    color: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer'
                } :
                    {
                        width: 60,
                        height: 60,
                        backgroundColor: '#fff',
                        boxShadow: '1px 1px 8px #dfdfdf',
                        borderRadius: '.25rem',
                        marginLeft: '.25rem',
                        marginRight: '.25rem',
                        border: '1px solid #e1e1e1',
                        display: 'flex',
                        flexWrap: 'wrap',
                        color: '#555555',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
            >
                {props.title}
            </Box>
        </div>
    )
}

export default Outline_Box
