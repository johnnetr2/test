import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Input } from 'reactstrap';
import './End_Popup.css'
import Cross from '../../../assets/icons/cross.svg'
import Next_Btn from '../../atom/next button/Next_Btn';
import Step from '../../../assets/graph/steps.svg'



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EndPopup({ showPopup, hidePopup, submit }) {

    const [description, setDescription] = useState('')
    const [file, setFile] = useState()

    return (
        <Dialog
            open={showPopup}
            TransitionComponent={Transition}
            keepMounted
            onClose={hidePopup}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            id="end-popup-wrapper"
        >
            <DialogTitle className="start-popup-title">
                <div className="empty-div" >
                    
                </div>
                
            </DialogTitle>
            <DialogContent className="end-popup-content">
                <DialogContentText >
                    <p>2/2</p>
                    <h2>Sätt din målpoäng</h2>
                    <p>Om du är osäker kan du alltid uppdatera senare.</p>
                    <div className="step-bar-1">
                        <img src={Step} alt="" />
                    </div>
                </DialogContentText>
            </DialogContent>
            
            <DialogActions>
                <div className="next-btn-2" onClick={() => submit()}>
                    <Next_Btn title="Spara" />
                </div>
            </DialogActions>
        </Dialog>
    );
}