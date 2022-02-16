import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/icons/logo.svg'
import Home from '../../../assets/icons/home.svg'
import Course from '../../../assets/icons/courses.svg'
import Profile from '../../../assets/icons/profile.svg'
import Message from '../../../assets/icons/msg.svg'
import './Sidebar_Org.css'


const Sidebar = () => {
    return (
        <div className="left-sidebar-1">
            <div className="logo-1">
                <Link to="/"><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="Home-1">
                <Link to="/">
                    <img src={Home} alt="home" />
                    <p>Dashboard</p>
                </Link>
            </div>
            <div className="Course-1">
                <Link to="/courses-main">
                    <img src={Course} alt="course" />
                    <p>Simulera prov</p>
                </Link>
            </div>
            <div className="Message-1">
                <Link to="/msg"><img src={Message} alt="profile" />
                    <p>Feedback</p>
                </Link>
            </div>
            <div className="Profile-1">
                <Link to="/profile"><img src={Profile} alt="profile" />
                    <p>Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
