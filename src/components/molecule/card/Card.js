import React from 'react'
import Img from '../../../assets/graphics/imgs/img.png'
import Continue_btn from '../../../components/atom/continue-btn/Continue_btn';
import '../../../components/atom/continue-btn/Continue_btn.css';

const Card = (props) => {
    return (
        <div className="card-1">
            <div className="img-blank-1">
                <img src={Img} className="img-blank-1-2" alt="" />
            </div>
            <div className="content-1-4">
                <h4>{props.title}</h4>
                <p>{props.title_para}</p>
                <div className="btn-sml-1">
                <button className="btn-sml-1-1">{props.btn_1}</button>
                <button className="btn-sml-1-2">{props.btn_2}</button>
            </div>
            </div>
            <div className="cont-btn-1">
                <Continue_btn cont_btn="Ga kurs"/>
            </div>
        </div>
    )
}

export default Card
