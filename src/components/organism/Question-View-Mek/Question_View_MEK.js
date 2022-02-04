import React from 'react';
import './Question_View_MEK.css'
import Bar_Chart from '../../../assets/icons/bar_chart.svg'
import Clock from '../../../assets/icons/clock.svg'
import Question_Option from '../../../assets/icons/question_option.svg'
import Exercise_Btn from "../../../components/atom/exercise-btn/Exercise_Btn";
import Increment from "../../../assets/icons/increment.svg";
import Decrement from "../../../assets/icons/decrement.svg";
import Nog_Figure from "../../../assets/icons/nog_figure.svg";


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
                    <img src={Bar_Chart} alt="" />
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
