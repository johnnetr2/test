import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Empty_Img from '../../../assets/imgs/thumb.png'
import Graph from '../../../assets/graph/graph.svg'
import './Main_Org.css'
import Card from '../../../components/molecule/card/Card';
import '../../../components/molecule/card/Card.css';




const Main = () => {

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <div className="main-container-1">
            <div className="main-content-1">
                <div className="content-1-3">
                    <h3>Övningar & Lektioner</h3>
                </div>
                <div className="nav-item-1-2">
                    <div className="nav-item-1-3" id="active-item-1">
                        <Link to="/">Alla kategorier</Link>
                        <div className="active-line"></div>
                    </div>
                    <div className="nav-item-1-3" id="active-item-2">
                        <Link to="/">Kvantitative sektion</Link>
                    </div>
                    <div className="nav-item-1-3" id="active-item-3">
                        <Link to="/">Verbal sektion</Link>
                    </div>
                </div>
                <div className="head-1-2">
                    <h3>Kvantativa sektion</h3>
                    <div className="content-1-2" onClick={()=>window.location.href='/quan-comp-x'}>
                        <Card title="XYZ" title_para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi..."/>
                    </div>
                    <div className="content-1-2" onClick={()=>window.location.href='/quan-comp-k'}>
                        <Card title="KVA" title_para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi..."/>
                    </div>
                    <div className="content-1-2" onClick={()=>window.location.href='/quan-comp-n'}>
                        <Card title="NOG" title_para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi..."/>
                    </div>
                    <div className="content-1-2" onClick={()=>window.location.href='/quan-comp-d'}>
                        <Card title="DTK" title_para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi..."/>
                    </div>
                </div>
                <div className="head-1-2">
                    <h3>Verbal Sektion</h3>
                    <div className="content-1-2" onClick={()=>window.location.href='/quan-comp-e'}>
                        <Card title="ELF" title_para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi..."/>
                    </div>
                    <div className="content-1-2" onClick={()=>window.location.href='/quan-comp-l'}>
                        <Card title="LAS" title_para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi..."/>
                    </div>
                    <div className="content-1-2" onClick={()=>window.location.href='/quan-comp-o'}>
                        <Card title="ORD" title_para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi..."/>
                    </div>
                    <div className="content-1-2" onClick={()=>window.location.href='/quan-comp-m'}>
                        <Card title="MED" title_para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi..."/>
                    </div>
                </div>
            </div>
            <div className="rt-sidebar-container-1">
                <div className="rt-sidebar-1">
                    <h3>Analys</h3>
                    <div className="main-box-1">
                        <div className="inner-box-1">
                            <h4>0</h4>
                            <p>Prognos</p>
                        </div>
                        <div className="inner-box-2">
                            <h4>1.8</h4>
                            <p>Mal</p>
                        </div>
                    </div>
                    <div className="graph-box-1-3">
                        <h3>Utveckling</h3>
                        <div className="inner-box-1-3">
                            <p>Poäng</p>
                            <img src={Graph} alt="" />
                        </div>
                    </div>
                    <div className="main-box-1-4">
                        <h3>Viktiga datum</h3>
                        <div className="inner-box-1-4">
                            <div className="inner-box-1-4-content">
                            <h4>10.04.22</h4>
                            <p>100 dagar till anmälan öppnar</p>
                            </div>
                        </div>
                    </div>
                    <div className="learn-more">
                        <div className="learn-content">
                        <h4>Lär dig ännu mer!</h4>
                        <p>Lås upp premiumfunktioner endast för 199 sek per sektion</p>
                        <button>Lås upp kategorier</button>
                        </div>
                        <div className="empty-img">
                        <img src={Empty_Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main