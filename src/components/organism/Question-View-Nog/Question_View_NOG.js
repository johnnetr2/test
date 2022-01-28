import React from 'react';
import './Question_View_NOG.css'
import Bar_Chart from '../../../assets/icons/bar_chart.svg'
import Clock from '../../../assets/icons/clock.svg'
import Question_Option from '../../../assets/icons/question_option.svg'
import Exercise_Btn from "../../../components/atom/exercise-btn/Exercise_Btn";
import Increment from "../../../assets/icons/increment.svg";
import Decrement from "../../../assets/icons/decrement.svg";
import Nog_Figure from "../../../assets/icons/nog_figure.svg";


const Question_View_NOG = () => {
    return <div>
        <div className="header-nog">
            <div className="back-btn-nog"><ion-icon name="chevron-back-outline" style={{ color: '#99999' }}></ion-icon></div>
            <div className="main-head-nog">NOG</div>
            <div className="question-mark-nog">?</div>
        </div>
        <div className="content-wrapper-nog">
            <div className="inner-content-nog-top">
                <div className="bar-chart-nog">
                    <img src={Bar_Chart} alt="" />
                    <p>1 av 12</p>
                </div>
                <div className="clock-nog">
                    <img src={Clock} alt="" />
                    <p>12:00 min</p>
                </div>
            </div>
            <div className="progress-bar-nog"></div>
            <div className="inner-content-nog-bottom-1">
                <div className="question-1-nog">
                    <p>Vilka koordinater har punkten A?</p>
                    <img src={Nog_Figure} alt="" />
                    <p>(1) Triangelns area är 30 areaenheter.</p>
                    <p>(2) Sträckan AC är 13 längdenheter.</p>
                </div>
                <div className="question-1-nog-1">
                    <div className="question-head-nog">
                        <p>Tillräcklig information för lösningen erhålls</p>
                    </div>
                    <div className="opt-1-nog">
                        <input type="radio" />
                        <p>i (1) men ej i (2)</p>
                    </div>
                    <div className="opt-1-nog">
                        <input type="radio" />
                        <p>i (2) men ej i (1)</p>
                    </div><div className="opt-1-nog">
                        <input type="radio" />
                        <p>i (1) tillsammans med (2)</p>
                    </div><div className="opt-1-nog">
                        <input type="radio" />
                        <p>i (1) och (2) var för sig</p>
                    </div><div className="opt-1-nog">
                        <input type="radio" />
                        <p>ej genom de båda påståendena</p>
                    </div>
                </div>
                <div className="exercise-btn-main-nog">
                    <Exercise_Btn title="Nasta" />
                </div>
            </div>
        </div>
    </div>
};

export default Question_View_NOG;
