import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../../assets/graphics/imgs/img.png'
import Search from '../../../assets/graphics/icons/search.svg'
import Noti from '../../../assets/graphics/icons/notification.svg'
import Graph from '../../../assets/graphics/graph/graph.svg'
import ProfPic from '../../../assets/graphics/icons/prof_pic.svg'


import Card from '../../../components/molecule/card/Card';
import '../../../components/molecule/card/Card.css';




const Main = () => {
    return (
        <div className="main-container-1">
            <div className="main-content-1">
                <div className="inner-content-1">
                    <h3>Hej Magnus!</h3>
                    <p>Det ar kul att se dig igen.</p>
                </div>
                <div className="head-1-2">
                    <h3>Fortsätt på började kurser</h3>
                    <div className="content-1-2">
                        <Card title="Aritmetik" title_para="12/45 Uppgifter" btn_1="NOG" btn_2="Grundkunskaper"/>
                    </div>
                </div>
                <div className="content-1-3">
                    <h3>Övningar & Lektioner</h3>
                </div>
                <div className="nav-item-1-2">
                    <div className="nav-item-1-3" id="active-item-1">
                        <Link to="/">Alla kategorier</Link>
                    </div>
                    <div className="nav-item-1-3" id="active-item-2">
                        <Link to="/">Kvantitative sektion</Link>
                    </div>
                    <div className="nav-item-1-3" id="active-item-3">
                        <Link to="/">Verbal sektion</Link>
                    </div>
                    <div className="nav-item-1-3" id="active-item-4">
                        <Link to="/">Sjalvforbattring</Link>
                    </div>
                </div>
                <div className="head-1-2">
                    <h3>Kvantativa sektion</h3>
                    <div className="content-1-2">
                        <Card title="XYZ" title_para="Lorem Ipsum...." btn_1="XYZ" btn_2="Kvantitativ sektion"/>
                    </div>
                    <div className="content-1-2">
                        <Card title="XYZ" title_para="Lorem Ipsum...." btn_1="XYZ" btn_2="Kvantitativ sektion"/>
                    </div>
                    <div className="content-1-2">
                        <Card title="XYZ" title_para="Lorem Ipsum...." btn_1="XYZ" btn_2="Kvantitativ sektion"/>
                    </div>
                    <div className="content-1-2">
                        <Card title="XYZ" title_para="Lorem Ipsum...." btn_1="XYZ" btn_2="Kvantitativ sektion"/>
                    </div>
                </div>
                <div className="head-1-2">
                    <h3>Verbal Sektion</h3>
                    <div className="content-1-2">
                        <Card title="ELF" title_para="Lorem Ipsum...." btn_1="ELF" btn_2="Verbal Sektion"/>
                    </div>
                    <div className="content-1-2">
                        <Card title="LAS" title_para="Lorem Ipsum...." btn_1="LAS" btn_2="Verbal Sektion"/>
                    </div>
                    <div className="content-1-2">
                        <Card title="ORD" title_para="Lorem Ipsum...." btn_1="ORD" btn_2="Verbal Sektion"/>
                    </div>
                    <div className="content-1-2">
                        <Card title="MED" title_para="Lorem Ipsum...." btn_1="MED" btn_2="Verbal Sektion"/>
                    </div>
                </div>
                <div className="head-1-2">
                    <h3>Sjalvforbattring</h3>
                    <div className="content-1-2">
                        <Card title="ELF" title_para="Lorem Ipsum...." btn_1="ELF" btn_2="Sjalvforbattring"/>
                    </div>
                    <div className="content-1-2">
                        <Card title="LAS" title_para="Lorem Ipsum...." btn_1="LAS" btn_2="Sjalvforbattring"/>
                    </div>
                </div>
            </div>
            <div className="rt-sidebar-container-1">
                <div className="rt-sidebar-1">
                    <div className="rt-sidebar-inner-1">
                        <div className="search">
                            <img src={Search} className="search-icon-1" alt="" />
                        </div>
                        <div className="notification-1">
                            <img src={Noti} className="noti-icon-1" alt="" />
                        </div>
                        <div className="profile-1-2">
                            <img src={ProfPic} className="profile-icon-1-2" alt="" />
                        </div>

                    </div>
                    <div className="main-box-1">
                        <div className="inner-box-1">
                            <h4>1.4</h4>
                            <p>Prognos</p>
                        </div>
                        <div className="inner-box-2">
                            <h4>1.8</h4>
                            <p>Mal</p>
                        </div>
                    </div>
                    <div className="main-box-1-3">
                        <div className="inner-box-1-3">
                            <img src={Graph} alt="" />
                        </div>
                    </div>
                    <div className="main-box-1-4">
                        <div className="inner-box-1-4">
                            <h4>Mal</h4>
                            <p>Target score</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main