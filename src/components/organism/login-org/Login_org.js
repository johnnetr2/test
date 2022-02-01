import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';
import { instance, EndPoints } from '../../service/Route'
import './Login_org.css'
import swal from 'sweetalert';

const Login_org = () => {

    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    )

    const getVal = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log(user, "this is the console of the user")
    }

    const loginFunc = (e) => {
        e.preventDefault()
        const data = {
            email: user.email,
            password: user.password
        }

        const URL = EndPoints.Login
        instance.post(URL, data).then(response => {
            console.log(response.data, "this is api console")
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('role', response.data.user.role)
                localStorage.setItem('fullName', response.data.user.fullName)
                localStorage.setItem('email', response.data.user.email)
                window.location.href = '/dashboard'
            } else {
                swal("Warning!", "Invalid Credentials", "error");
            }
        }).catch((error) => {
            swal("Warning!", "Invalid Credentials", "error");
        });
    }

    return (
        <div className="login-org-1">
            <div className="inner-login-org">
                <h1>Logga in</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <Label_field
                    name="email"
                    type='text'
                    onChange={getVal}
                    value={user.email}
                    title="Email" />
                <Label_field
                    type='password'
                    onChange={getVal}
                    name="password"
                    value={user.password}
                    title="Password" />
                <u>Glomt losenord?</u>
                <Link to="/dashboard"><Filled_btn onClick={loginFunc} title="Logga in" /></Link>
                <p>eller</p>
                <Outline_btn title="Logga in Med Google" />
                <p className="last-para-1">Har du ingte konto? <u>Skapa konto har</u></p>
            </div>
        </div>
    )
}

export default Login_org
