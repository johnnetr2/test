import React from 'react'
import { Button, Box } from '@mui/material'
import { appColors } from '../../../utils/commonService'

const NextButton = (props) => {
    return (
        <Box>
            <Button sx={{ backgroundColor: 'none', border: `1px solid ${appColors.blueColor}`, color: appColors.blueColor, textTransform: 'capitalize', width: '10rem' }}>{props.title}</Button>
        </Box>
    )
}

export default NextButton
