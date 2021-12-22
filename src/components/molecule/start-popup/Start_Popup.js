import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Input } from 'reactstrap';
import './Start_Popup.css'
import Cross from '../../../assets/icons/cross.svg'
import Next_Btn from '../../atom/next button/Next_Btn';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function StartPopup({ showPopup, hidePopup, submit }) {

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
            id="start-popup-wrapper"
        >
            <DialogTitle className="start-popup-title">
                <div className="cross-icon-1" >
                    <img onClick={() => hidePopup()} src={Cross} alt="" />
                </div>
                
            </DialogTitle>
            <DialogContent className="start-popup-content">
                <DialogContentText id="alert-dialog-slide-description">
                    <p>1/2</p>
                    <h2>När skall du göra provet?</h2>
                    <p>Om du inte har bestämt dig än, kan du alltid ställa in senare. </p>
                    <input type="date" />
                </DialogContentText>
            </DialogContent>
            
            <DialogActions >
                <div className="next-btn-1" onClick={() => submit('hello')}>
                   <Next_Btn title="Nästa"/>
                </div>
                
            </DialogActions>
        </Dialog>
    );
}