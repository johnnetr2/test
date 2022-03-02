import React from 'react';
import './QuestionViewMekOrg.css'
import BarChart from '../../../assets/Icons/newBarChart.svg'
import Clock from '../../../assets/Icons/newClock.svg'
import QuestionOption from '../../../assets/Icons/newQuestionOption.svg'
import Exercise_Btn from "../../atom/ExerciseBtn/ExerciseBtn";
import Increment from "../../../assets/Icons/newIncrement.svg";
import Decrement from "../../../assets/Icons/newDecrement.svg";
import NogFigure from "../../../assets/Icons/newNogFigure.svg";


const Question_View_MEK = () => {
    return <div>
        <div className="header-mek">
            <div className="back-btn-mek"><ion-icon name="chevron-back-outline" style={{ color: '#99999' }}></ion-icon></div>
            <div className="main-head-mek">MEK</div>
            <div className="question-mark-v">?</div>
        </div>
        <div className="content-wrapper-mek">
            <div className="inner-content-mek-top">
                <div className="bar-chart-mek">
                    <img src={BarChart} alt="" />
                    <p>1 av 12</p>
                </div>
                <div className="clock-mek">
                    <img src={Clock} alt="" />
                    <p>12:00 min</p>
                </div>
            </div>
            <div className="progress-bar-mek"></div>
            <div className="inner-content-mek-bottom-1">
                <div className="question-1-mek">
                    <p>Undersökningen visar att skolledarna tyngs av _____ uppdrag. Den största förändringen är att allt fler arbetsuppgifter flyttas från _____, vanligen en kommun, till enskilda skolor och förskolor.</p>
                </div>
                <div className="question-1-mek-1">
                    <div className="opt-1-mek">
                        <input type="radio" />
                        <p>tekniska – skolnämnden</p>
                    </div>
                    <div className="opt-1-mek">
                        <input type="radio" />
                        <p>gymnasiala – arbetsgivaren</p>
                    </div>
                    <div className="opt-1-mek">
                        <input type="radio" />
                        <p>politiska – tjänstesektorn</p>
                    </div>
                    <div className="opt-1-mek">
                        <input type="radio" />
                        <p>administrativa – huvudmannen</p>
                    </div>
                </div>
                <div className="exercise-btn-main-mek">
                    <Exercise_Btn title="Nasta" />
                </div>
            </div>
        </div>
    </div>
};

export default Question_View_MEK;
