import React from 'react'
import { Link } from 'react-router-dom'
import './QuanCompMekOrg.css'
import Graph from '../../../assets/Graph/Graph.svg'
import Graph2 from '../../../assets/Graph/Graph2.svg'
import Thumb from '../../../assets/Imgs/newthumb.png'
import Exercise_Btn from "../../atom/ExerciseBtn/ExerciseBtn";
import Outline_Box from '../../atom/OutlineBox/OutlineBox'
import Outline_Field from '../../atom/OutlineField/Outline_Field'



const QuanCompMekOrg = () => {

    return (
        <div className="quan-m-container-1">
            <div className="quan-m-content-1">
                <div className="quan-m-content-1-3">
                    <h3>Kvantitativa jämförelser - MEK</h3>
                </div>
                <div className="quan-m-nav-item-1-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                </div>
                <div className="quan-m-head-1-2">
                    <h3>Övningsuppgifter för MEK</h3>
                    <div className="quan-m-head-1-3">
                        <div className="quan-m-head-1-4">
                            <p>Välj om du vill köra på tid</p>
                            <Outline_Field title="Tidspress" type="checkbox" />
                        </div>
                        <div className="quan-m-head-1-5">
                            <p>Välj antal frågor</p>
                            <div className="quan-m-head-outline-boxes">
                                <Outline_Box title="5" />
                                <Outline_Box title="10" />
                                <Outline_Box title="15" />
                                <Outline_Box title="20" />
                                <Outline_Field title="title" type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quan-m-question-type">
                    <p>Välj frågetyper</p>
                    <div className="question-m-type-1">
                        <Outline_Field title="Alla" type="checkbox" />
                        <Outline_Field title="Geometri" type="checkbox" />
                        <Outline_Field title="Funktionslära" type="checkbox" />
                        <Outline_Field title="Aritmetik" type="checkbox" />
                        <Outline_Field title="Algebra" type="checkbox" />
                        <Outline_Field title="Statistik" type="checkbox" />
                    </div>
                </div>
                <div className="exer-m-btn-2">
                   <Link to="/question-view-mek"><Exercise_Btn title="Testa 5 exempelövningar"/></Link>
                </div>
                <div className="history-m">
                    <h2>Historia</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Datum</th>
                                <th>Resultat</th>
                                <th>Normering</th>
                                <th></th>
                            </tr>
                        </thead>
                        <div className="body-m-bord">
                            <tbody>
                                <tr>
                                    <td>2021.09.24 10:38:24</td>
                                    <td>0 av 1</td>
                                    <td>0.0</td>
                                </tr>
                                <hr />
                                <tr>
                                    <td>2021.09.24 10:38:24</td>
                                    <td>0 av 1</td>
                                    <td>0.0</td>
                                </tr>
                                <hr />
                                <tr>
                                    <td>2021.09.24 10:38:24</td>
                                    <td>0 av 1</td>
                                    <td>0.0</td>
                                </tr>
                                <hr />
                                <tr>
                                    <td>2021.09.24 10:38:24</td>
                                    <td>0 av 1</td>
                                    <td>0.0</td>
                                </tr>
                                <hr />
                                <tr>
                                    <td>2021.09.24 10:38:24</td>
                                    <td>0 av 1</td>
                                    <td>0.0</td>
                                </tr>
                                <hr />
                                <tr>
                                    <td>2021.09.24 10:38:24</td>
                                    <td>0 av 1</td>
                                    <td>0.0</td>
                                </tr>
                                <hr />
                                <tr>
                                    <td>2021.09.24 10:38:24</td>
                                    <td>0 av 1</td>
                                    <td>0.0</td>
                                </tr>
                            </tbody>
                        </div>
                    </table>
                </div>

            </div>
            <div className="quan-m-rt-sidebar-container-1">
                <div className="quan-m-rt-sidebar-1">
                <div className="learn-m-more">
                        <div className="learn-m-content">
                            <h5>Uppgradera kategori</h5>
                            <p>På demo kan du testa att göra 5 uppgifter. Lås upp kategori för att göra fler!</p>
                            <button>Lås upp kategorier</button>
                        </div>
                        <div className="empty-m-img">
                            <img src={Thumb} alt="" />
                        </div>
                    </div>
                    <h3>Statistik</h3>
                    <p>Du har klarat 830 av 1000 uppgifter</p>
                    <div className="quan-m-box-1">
                        <div className="quan-m-inner-box-1">
                            <div className="quan-m-progress-bar">
                                <p>12 av 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="quan-m-graph-box-1-3">
                        <div className="quan-m-task">
                            <div className="quan-m-task-1">
                                <h3>4</h3>
                                <p>Gjorda uppgifter förra veckan</p>
                            </div>
                            <div className="quan-m-task-2">
                                <h3>830</h3>
                                <p>Gjorda uppgifter totalt</p>
                            </div>
                        </div>
                        <div className="quan-m-inner-box-1-3">
                            <img src={Graph2} alt="" />
                        </div>
                        <div className="quan-m-score-1">
                            <h3>0.8</h3>
                            <p>Gjorda uppgifter totalt</p>
                        </div>
                        <div className="quan-m-inner-box-1-3">
                            <img src={Graph} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuanCompMekOrg
