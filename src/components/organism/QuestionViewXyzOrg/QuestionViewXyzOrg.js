import React from 'react';
import './QuestionViewXyzOrg.css'
import { Link } from 'react-router-dom'
import BarChart from '../../../assets/Icons/BarChart.svg'
import Clock from '../../../assets/Icons/Clock.svg'
import QuestionOption from '../../../assets/Icons/QuestionOption.svg'
import Exercise_Btn from "../../atom/ExerciseBtn/ExerciseBtn";
import Increment from "../../../assets/Icons/Increment.svg";
import Decrement from "../../../assets/Icons/Decrement.svg";


const QuestionViewXyzOrg = () => {
    return <div>
        <div className="header">
            <div className="back-btn-xyz"><ion-icon name="chevron-back-outline" style={{ color: '#99999' }}></ion-icon></div>
            <div className="main-head-xyz">XYZ</div>
            <div className="question-mark-xyz">?</div>
        </div>
        <div className="content-wrapper-xyz">
            <div className="inner-content-xyz-top">
                <div className="bar-chart-xyz">
                    <img src={BarChart} alt="" />
                    <p>1 av 12</p>
                </div>
                <div className="clock-xyz">
                    <img src={Clock} alt="" />
                    <p>12:00 min</p>
                </div>
            </div>
            <div className="progress-bar-xyz"></div>
            <div className="inner-content-xyz-bottom-1">
                <div className="question-1-xyz">
                    <p>f(x)=X/2-1</p>
                    <p>Vilket svarsalternativ visar grafen till funktionen g(x)= 2 f (x)+ 3?</p>
                </div>
                <div className="question-1-xyz-1">
                    <div className="opt-top-2">
                        <div className='opt-1-xyz'>
                            <input type="radio" name="option-1" /><p>A</p>
                            <img src={QuestionOption} alt="" />
                        </div>
                        <div className='opt-2-xyz'>
                            <input type="radio" name="option-1" /><p>B</p>
                            <img src={QuestionOption} alt="" />
                        </div>
                    </div>
                    <div className="opt-bottom-2">
                        <div className='opt-3-xyz'>
                            <input type="radio" name="option-1" /><p>C</p>
                            <img src={QuestionOption} alt="" />
                        </div>
                        <div className='opt-4-xyz'>
                            <input type="radio" name="option-1" /><p>D</p>
                            <img src={QuestionOption} alt="" />
                        </div>
                    </div>
                </div>
                <div className="correct-dialog-xyz-1">
                    <div className="correct-content-dialog-xyz">
                        <h3>Förklaring</h3>
                        <p>Eftersom 25% av 440  gram är 110 gram stämmer det inte överrens med sockermängden på 115g!</p>
                        <p> 115 gram är 25% av läskens vikt vilket betyder att all läsk väger 100/25 = 4 gånger så mycket. Därför är rätt svar 460g.</p>
                    </div>
                    <div className="correct-figure-img-xyz">
                        <img src={QuestionOption} alt="" />
                        <div className="inc-dec-buttons">
                        <p>Berätta för oss om du var nöjd med lösningen</p>
                        <img src={Increment} alt="" />
                        <img src={Decrement} alt="" />
                        </div>
                    </div>
                </div>
                <div className="exercise-btn-main-xyz">
                    <Link className="exercise-btn-main-xyz link-main-exer" to="/result-summary-org"><Exercise_Btn title="Nasta" /></Link>
                </div>
            </div>
        </div>
    </div>
};

export default QuestionViewXyzOrg;
