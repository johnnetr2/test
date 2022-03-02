import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import Logo from '../../../assets/Icons/Logo.svg'
import Home from '../../../assets/Icons/Home.svg'
import Course from '../../../assets/Icons/Courses.svg'
import Profile from '../../../assets/Icons/Profile.svg'
import Message from '../../../assets/Icons/Msg.svg'
import './SidebarOrg.css'


const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div className="left-sidebar-1">
            <div className="logo-1">
                <Link to="/dashboard"><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="Home-1">
                <Link to="/dashboard">
                    <img src={Home} alt="home" />
                    <p>Dashboard</p>
                </Link>
            </div>
            <div className="Course-1">
                <Link to="/courses">
                    <img src={Course} alt="course" />
                    <p>Simulera prov</p>
                </Link>
            </div>
            <div className="Message-1">
                <a onClick={() => swal("Sorry!", "This page is under process", "info")}><img src={Message} alt="profile" />
                    <p>Feedback</p>
                </a>
            </div>
            <div className="Profile-1">
                <a onClick={() => swal("Sorry!", "This page is under process", "info")}><img src={Profile} alt="profile" />
                    <p>Profile</p>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
