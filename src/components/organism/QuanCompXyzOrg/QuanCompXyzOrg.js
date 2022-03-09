import React, { useEffect, useState } from 'react'
import './QuanCompXyzOrg.css'
import { Link } from 'react-router-dom'
import Graph from '../../../assets/Graph/Graph.svg'
import Graph2 from '../../../assets/Graph/Graph2.svg'
import Exercise_Btn from "../../atom/ExerciseBtn/ExerciseBtn";
import Outline_Box from '../../atom/OutlineBox/OutlineBox'
import Outline_Field from '../../atom/OutlineField/Outline_Field'
import { EndPoints, instance2 } from '../../service/Route'



const QuanCompXyzOrg = (props) => {

    const prevData = props.item;
    const [categories, setCategories] = useState()
    const [timer, setTimer] = useState(false)
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [chekedValue, setCheckedValue] = useState()
    const [title, setTitle] = useState(false)

    useEffect(() => {
        const URL = EndPoints.questionCategoryBysectionCategory + prevData._id;
        instance2.get(URL).then(response => {
            setCategories(response.data)
        })
    }, [])


    const setCheckedFunc = (value) => {
        setCheckedValue(value)
    }

    return (
        <div className="quan-x-container-1">
            <div className="quan-x-content-1">
                <div className="quan-x-content-1-3">
                    <h3>Kvantitativa jämförelser - XYZ</h3>
                </div>
                <div className="quan-x-nav-item-1-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                </div>
                <div className="quan-x-head-1-2">
                    <h3>Övningsuppgifter för XYZ</h3>
                    <div className="quan-x-head-1-3">
                        <div className="quan-x-head-1-4">
                            <p>Välj om du vill köra på tid</p>
                            <Outline_Field title="Tidspress" type="checkbox" onChange={(value) => setTimer(value)}/>
                        </div>
                        <div className="quan-x-head-1-5">
                            <p>Välj antal frågor</p>
                            <div className="quan-x-head-outline-boxes">
                                {/* <Outline_Box title="5" />
                                <Outline_Box title="10" />
                                <Outline_Box title="15" />
                                <Outline_Box title="20" />
                                <Outline_Field title="Ett delprov" type="text" /> */}
                                <Outline_Box checked={checked} title="5" onChangeCheck={(value) => {
                                    setChecked(true)
                                    setChecked2(false)
                                    setChecked3(false)
                                    setChecked4(false)
                                    setTitle(false)
                                    setCheckedFunc(value)
                                }} />
                                <Outline_Box checked={checked2} title="10" onChangeCheck={(value) => {
                                    setChecked(false)
                                    setChecked2(true)
                                    setChecked3(false)
                                    setChecked4(false)
                                    setTitle(false)
                                    setCheckedFunc(value)
                                }} />
                                <Outline_Box title="15" checked={checked3} onChangeCheck={(value) => {
                                    setChecked(false)
                                    setChecked2(false)
                                    setChecked3(true)
                                    setChecked4(false)
                                    setTitle(false)
                                    setCheckedFunc(value)
                                }} />
                                <Outline_Box title="20" checked={checked4} onChangeCheck={(value) => {
                                    setChecked(false)
                                    setChecked2(false)
                                    setChecked3(false)
                                    setChecked4(true)
                                    setTitle(false)
                                    setCheckedFunc(value)
                                }} />
                                <Outline_Field title="Ett delprov" type="text"
                                    checked={title} onChange={(value) => {
                                        setChecked(false)
                                        setChecked2(false)
                                        setChecked3(false)
                                        setChecked4(false)
                                        setTitle(true)
                                        setCheckedFunc(value)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quan-x-question-type">
                    <p>Välj frågetyper</p>
                    <div className="question-x-type-1">
                        {categories && categories.map(item => {
                           return <Outline_Field title={item?.title} type="checkbox" />
                        })
                        }
                    </div>
                </div>
                <div className="exer-x-btn-2">
                    <Link to="/question-view-xyz"><Exercise_Btn title="Starta övningar" /></Link>
                </div>
                <div className="history-x">
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
                        <div className="body-x-bord">
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
            <div className="quan-x-rt-sidebar-container-1">
                <div className="quan-x-rt-sidebar-1">
                    <h3>Statistik</h3>
                    <p>Du har klarat 830 av 1000 uppgifter</p>
                    <div className="quan-x-box-1">
                        <div className="quan-x-inner-box-1">
                            <div className="quan-x-progress-bar">
                                <p>12 av 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="quan-x-graph-box-1-3">
                        <div className="quan-x-task">
                            <div className="quan-x-task-1">
                                <h3>4</h3>
                                <p>Gjorda uppgifter förra veckan</p>
                            </div>
                            <div className="quan-x-task-2">
                                <h3>830</h3>
                                <p>Gjorda uppgifter totalt</p>
                            </div>
                        </div>
                        <div className="quan-x-inner-box-1-3">
                            <img src={Graph2} alt="" />
                        </div>
                        <div className="quan-x-score-1">
                            <h3>0.8</h3>
                            <p>Gjorda uppgifter totalt</p>
                        </div>
                        <div className="quan-x-inner-box-1-3">
                            <img src={Graph2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuanCompXyzOrg
