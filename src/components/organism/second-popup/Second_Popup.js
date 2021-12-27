import React from 'react'
import { Link } from 'react-router-dom'
import Next_Btn from '../../atom/next button/Next_Btn'
import Step from '../../../assets/graph/steps.svg'
import './Second_Popup.css'

const Second_Popup = () => {
    return (
        <div className="primary-popup-1">
            <div className="popup-main-1">
                <p>2/2</p>
                <h2>Sätt din målpoäng</h2>
                <p>Om du är osäker kan du alltid uppdatera senare.</p>
                <div className="step-bar-1">
                    <img src={Step} alt="" />
                </div>
                <div className="save-btn">
                    <Link to='/dashboard'><Next_Btn title="Spara" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Second_Popup
