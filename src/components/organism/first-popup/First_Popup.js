import React from 'react'
import { Link } from 'react-router-dom'
import Next_Btn from '../../atom/next button/Next_Btn'
import Cross from '../../../assets/icons/cross.svg'
import './First_Popup.css'

const First_Popup = () => {
    return (
        <div className="primary-popup">
            <div className="popup-main">
                <div className="close-icon">
                    <Link to="/dashboard"><img src={Cross} alt="" /></Link>
                </div>
                <p>1/2</p>
                <h2>När skall du göra provet?</h2>
                <p>Om du inte har bestämt dig än, kan du alltid ställa in senare. </p>
                <select name="" id="">
                    <option value="Välj prov...">Välj prov...</option>
                    <option value="Välj prov...">Välj prov...</option>
                    <option value="Välj prov...">Välj prov...</option>
                </select>
                <div className="next-btn">
                   <Link to='/second-popup'><Next_Btn title="Nästa" /></Link>
                </div>
            </div>
        </div>
    )
}

export default First_Popup
