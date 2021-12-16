import React from 'react'
import SideImg from '../../assets/imgs/side_img.png'
import Login_org from '../../components/organism/login-org/Login_org';
import '../../components/organism/login-org/Login_org.css';

const Login = () => {
    return (
        <div className="main-login-1">
            <div className="left-section-1">
            </div>
            <div className="right-section-1">
                <form action="">
                    <Login_org />
                </form>
            </div>
        </div>
    )
}

export default Login
