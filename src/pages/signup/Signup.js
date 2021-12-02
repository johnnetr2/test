import React from 'react'
import Signup_org from '../../components/organism/signup-org/Signup_org';
import SideImg from '../../assets/graphics/imgs/side_img.png'


const Signup = () => {
    return (
        <div className="main-signup-2">
            <div className="left-section-2">
            <img src={SideImg} className="side-img-inner" alt="" />
            </div>
            <div className="right-section-2">
                <form action="">
                    <Signup_org/>
                </form>
            </div>
        </div>
    )
}

export default Signup
