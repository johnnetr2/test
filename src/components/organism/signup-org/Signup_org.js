import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';
import { instance, EndPoints } from '../../service/Route'
import swal from 'sweetalert';
import './Signup_org.css'



const Signup_org = () => {

    const [register, setRegister] = useState(
        {
            fullName: "",
            email: "",
            password: ""
        })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value })
        console.log(register, "this is the console of the change Handler")
    }

    const clickHandler = (e) => {
        e.preventDefault()
        const data = {
            fullName: register.fullName,
            email: register.email,
            password: register.password
        }

        const URL = EndPoints.SignUp
        instance.post(URL, data).then(response => {
            console.log(response.data.user, 'this is the api response')
            if (response.data.message == 'success') {
                if (response.data.user.token) {
                    swal("Success!", response.data.message, 'success')
                    window.location.href = "/login"
                }
            }
            else {
                swal("Warning!", response.data.message)
            }
        }).catch ((error) => {
            console.log(error);
        })
            
    }

return (
    <div className="signup-org-1">
        <div className="inner-signup-org-1">
            <h1>Registrering</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Label_field
                placeholder="Enter Full Name"
                type='text'
                onChange={changeHandler}
                value={register.fullName}
                name="fullName"
                title="Full Name" />
            <Label_field
                placeholder="Enter Email"
                type='email'
                onChange={changeHandler}
                value={register.email}
                name="email"
                title="Email" />
            <Label_field
                placeholder="Enter Password"
                type='password'
                onChange={changeHandler}
                value={register.password}
                name="password"
                title="Password" />
            <u>Glomt losenord?</u>
            <Filled_btn title="Skapa konto" onClick={clickHandler} />
            <p>eller</p>
            <Outline_btn title="Konto med Google" />
            <p className="second-last-para">Har du redan ett konto?<Link to="/login">Logga in</Link></p>
            <p className="last-para">This site is protected by recaptcha and the Google privacy policy and terms of service apply</p>

        </div>
    </div>
)
}

export default Signup_org
