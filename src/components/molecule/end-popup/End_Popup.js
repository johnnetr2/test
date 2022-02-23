import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, Typography } from '@mui/material'
import Slide from '@material-ui/core/Slide';
import Next_Btn from '../../atom/next button/Next_Btn';
import Step from '../../../assets/graph/steps.svg'
import Slider from '@mui/material/Slider';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EndPopup({ showPopup, hidePopup, submit }) {

    const [description, setDescription] = useState('')
    const [file, setFile] = useState()

    function valuetext(value) {
        return `${value}°C`;
    }

    return (
        <Dialog
            open={showPopup}
            TransitionComponent={Transition}
            keepMounted
            onClose={hidePopup}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent style={{ paddingTop: '3rem', paddingRight: '3rem', paddingLeft: '3rem' }}>
                <DialogContentText >
                    <Typography variant="body2" sx={{ color: '#252525' }}>2/2</Typography>
                    <Typography variant='h4' sx={{ color: '#252525', marginBottom: '1rem' }}>Sätt din målpoäng
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#252525' }}>Om du är osäker kan du alltid uppdatera senare.</Typography>

                    <Box sx={{ width: 495, marginTop: '1rem' }}>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={1}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={2}
                        />
                    </Box>
                    <DialogActions>
                        <Box onClick={() => submit()} style={{ width: '35rem', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
                            <Next_Btn title="Spara" />
                        </Box>
                    </DialogActions>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}