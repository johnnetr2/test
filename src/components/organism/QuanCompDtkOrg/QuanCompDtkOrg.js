import React from 'react'
import './Quan_Comp_D_Org.css'
import { Link } from 'react-router-dom'
import Graph from '../../../assets/graph/Graph.svg'
import Graph_2 from '../../../assets/Graph/Graph2.svg'
import Exercise_Btn from "../../../components/atom/exercise-btn/Exercise_Btn";
import Outline_Box from '../../atom/outline-box/Outline_Box'
import Outline_Field from '../../atom/outline-field/Outline_Field'



const Quan_Comp_D_Org = () => {

    return (
        <div className="quan-d-container-1">
            <div className="quan-d-content-1">
                <div className="quan-d-content-1-3">
                    <h3>Kvantitativa jämförelser - DTK</h3>
                </div>
                <div className="quan-d-nav-item-1-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                </div>
                <div className="quan-d-head-1-2">
                    <h3>Övningsuppgifter för DTK</h3>
                    <div className="quan-d-head-1-3">
                        <div className="quan-d-head-1-4">
                            <p>Välj om du vill köra på tid</p>
                            <Outline_Field title="Tidspress" type="checkbox" />
                        </div>
                        <div className="quan-d-head-1-5">
                            <p>Välj antal frågor</p>
                            <div className="quan-d-head-outline-boxes">
                                <Outline_Box title="5" />
                                <Outline_Box title="10" />
                                <Outline_Box title="15" />
                                <Outline_Box title="20" />
                                <Outline_Field title="title" type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quan-d-question-type">
                    <p>Välj frågetyper</p>
                    <div className="question-d-type-1">
                        <Outline_Field title="Alla" type="checkbox" />
                        <Outline_Field title="Geometri" type="checkbox" />
                        <Outline_Field title="Funktionslära" type="checkbox" />
                        <Outline_Field title="Aritmetik" type="checkbox" />
                        <Outline_Field title="Algebra" type="checkbox" />
                        <Outline_Field title="Statistik" type="checkbox" />
                    </div>
                </div>
                <div className="exer-d-btn-2">
                    <Link to="/question-view-dtk"><Exercise_Btn title="Starta övningar" /></Link>
                </div>
                <div className="history-d">
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
                        <div className="body-d-bord">
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
            <div className="quan-d-rt-sidebar-container-1">
                <div className="quan-d-rt-sidebar-1">
                    <h3>Statistik</h3>
                    <p>Du har klarat 830 av 1000 uppgifter</p>
                    <div className="quan-d-box-1">
                        <div className="quan-d-inner-box-1">
                            <div className="quan-d-progress-bar">
                                <p>12 av 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="quan-d-graph-box-1-3">
                        <div className="quan-d-task">
                            <div className="quan-d-task-1">
                                <h3>4</h3>
                                <p>Gjorda uppgifter förra veckan</p>
                            </div>
                            <div className="quan-d-task-2">
                                <h3>830</h3>
                                <p>Gjorda uppgifter totalt</p>
                            </div>
                        </div>
                        <div className="quan-d-inner-box-1-3">
                            <img src={Graph_2} alt="" />
                        </div>
                        <div className="quan-d-score-1">
                            <h3>0.8</h3>
                            <p>Gjorda uppgifter totalt</p>
                        </div>
                        <div className="quan-d-inner-box-1-3">
                            <img src={Graph} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quan_Comp_D_Org
