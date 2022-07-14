import React from 'react'
import { Box, Checkbox, label } from '@mui/material';

const Outline_Field = (props) => {
  return (
    <div onClick={(e) => props.onClickCheck(e)}>
      <Box
        sx={{
          width: 'fit-content',
          height: 60,
          backgroundColor: '#fff',
          boxShadow: '1px 1px 8px #dfdfdf',
          borderRadius: '.25rem',
          marginLeft: '.25rem',
          marginRight: '.25rem',
          border: props.checked ? '1px solid #0A1596' : '1px solid #e1e1e1',
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '.75rem',
          color: '#555555',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: "pointer",
          paddingRight: '1.2rem',
          paddingLeft: '1.2rem',
        }}
      >
        <Checkbox
          checked={props.checked}
          labelStyle={{ fill: 'white' }}
          size="medium" style={{
            margin: '0rem', color: props.checked ? '#0A1596' : '#E1E1E1',
          }} m={0} />
        {props.title}
      </Box>
    </div>
  )
}

export default Outline_Field
