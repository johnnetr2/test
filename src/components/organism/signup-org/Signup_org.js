import React from 'react'
import './Signup_org.css'
import { Link } from 'react-router-dom'
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';



const Signup_org = () => {
    return (
        <div className="signup-org-1">
            <div className="inner-signup-org-1">
            <h1>Registrering</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Label_field type='text' title="Full Name"/>
            <Label_field type='text' title="Email"/>
            <Label_field type='password' title="Password"/>
            <u>Glomt losenord?</u>
            <Link to="/login"><Filled_btn title="Skapa konto"/></Link>
            <p>eller</p>
            <Outline_btn title="Konto med Google"/>
            <p className="second-last-para">Har du redan ett konto?<Link to="/login">Logga in</Link></p>
            <p className="last-para">This site is protected by recaptcha and the Google privacy policy and terms of service apply</p>

            </div>
        </div>
    )
}

export default Signup_org
