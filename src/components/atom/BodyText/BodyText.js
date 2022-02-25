import React from 'react'
import {Container, Typography} from '@material-ui/core'



const BodyText = (props) => {
  return (
    <div style={{maxWidth:'30rem'}}>
        <Typography variant="body2" component="body2" style={{fontSize:'0.75rem', lineHeight:'1.5'}}>
            {props.title}
        </Typography>
    </div>
  )
}

export default BodyText