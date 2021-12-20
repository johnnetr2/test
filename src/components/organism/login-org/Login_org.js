import React from 'react'
import {Link} from 'react-router-dom'
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';

const Login_org = () => {
    return (
        <div className="login-org-1">
            <div className="inner-login-org">
                <h1>Logga in</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <Label_field type='text' title="Email" />
                <Label_field type='password' title="Password" />
                <u>Glomt losenord?</u>
                <Link to="/first-popup"><Filled_btn title="Logga in" /></Link>
                <p>eller</p>
                <Outline_btn title="Logga in Med Google" />
                <p className="last-para-1">Har du ingte konto? <u>Skapa konto har</u></p>
            </div>
        </div>
    )
}

export default Login_org
