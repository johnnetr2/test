import React from 'react'
import Question_Save_BackDrop_Popup from './Question_Save_BackDrop_Popup'
import Cross from '../../../assets/icons/cross.svg'
import './Question_Save_Popup.css'

const Question_Save_Popup = () => {
    return (
        <>
            <div className='dialog'>
                <h4>Dags att droppa pennan!</h4>
                <div className="main-btns">
                    <button className='btn' >Avsluta</button>
                </div>
            </div>
            <Question_Save_BackDrop_Popup/>
        </>
    )
}

export default Question_Save_Popup