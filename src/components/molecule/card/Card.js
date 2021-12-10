import React from 'react'
import Img from '../../../assets/imgs/img.png'
import Continue_btn from '../../../components/atom/continue-btn/Continue_btn';
import '../../../components/atom/continue-btn/Continue_btn.css';
import Progress_Bar from '../../../components/atom/progress-bar/Progress_Bar';
import '../../../components/atom/progress-bar/Progress_Bar.css';

const Card = () => {
    return (
        <div className="card-1">
            <div className="content-1-4">
                <h4>XYZ</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                <Progress_Bar/>
            </div>
            <div className="progress-cont">
            <div className="progno">0.0</div>
            <p>Prognos</p>
            </div>
        </div>
    )
}

export default Card
