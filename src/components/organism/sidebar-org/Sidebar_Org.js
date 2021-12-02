import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/graphics/icons/logo.svg'
import Home from '../../../assets/graphics/icons/home.svg'
import Course from '../../../assets/graphics/icons/courses.svg'
import Profile from '../../../assets/graphics/icons/profile.svg'
import Message from '../../../assets/graphics/icons/msg.svg'
import Setting from '../../../assets/graphics/icons/setting.svg'
import Logout from '../../../assets/graphics/icons/logout.svg'



const Sidebar = () => {
    return (
            <div className="left-sidebar-1">
                <div className="logo-1">
                <Link to="/"><img src={Logo} className="Hp-logo-1" alt="logo" /></Link>
                </div>
                <div className="Home-1">
                <Link to="/"><img src={Home} className="home-icon-1" alt="home" /></Link>
                </div>
                <div className="Course-1">
                <Link to="/courses"><img src={Course} className="course-icon-1" alt="course" /></Link>
                </div>
                <div className="Profile-1">
                <Link to="/profile"><img src={Profile} className="profile-icon-1" alt="profile" /></Link>
                </div>
                <div className="Message-1">
                <Link to="/msg"><img src={Message} className="message-icon-1" alt="message" /></Link>
                </div>
                <div className="Setting-1">
                <Link to="/setting"><img src={Setting} className="setting-icon-1" alt="setting" /></Link>
                </div>
                <div className="Logout-1">
                <Link to="/logout"><img src={Logout} className="logout-icon-1" alt="logout" /></Link>
                </div>
            </div>
    )
}

export default Sidebar
