import React from 'react'
import BackDrop_Popup from './BackDrop_Popup'
import Cross from '../../../assets/icons/cross.svg'
import './Finish_Popup_XYZ.css'

const Finish_Popup_XYZ = () => {
    return (
        <>
            <div className='dialog'>
                <div className="close-dialog">
                    <img src={Cross} alt="" />
                </div>
                <h4>Vill du avsluta?</h4>
                <p>Ingen fara, vi sparar dina svar.</p>
                <div className="main-btns">
                    <button className='btn btn--alt'>Fortsätt öva</button>
                    <button className='btn' >Avsluta</button>
                </div>
            </div>
            <BackDrop_Popup/>
        </>
    )
}

export default Finish_Popup_XYZ