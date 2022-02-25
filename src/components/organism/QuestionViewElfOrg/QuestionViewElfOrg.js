import React from 'react';
import './QuestionViewElfOrg.css'
import BarChart from '../../../assets/Icons/BarChart.svg'
import Clock from '../../../assets/Icons/Clock.svg'
import QuestionOption from '../../../assets/Icons/QuestionOption.svg'
import Exercise_Btn from "../../atom/ExerciseBtn/ExerciseBtn";
import Increment from "../../../assets/Icons/Increment.svg";
import Decrement from "../../../assets/Icons/Decrement.svg";
import NogFigure from "../../../assets/Icons/NogFigure.svg";


const QuestionViewElfOrg = () => {
    return <div>
        <div className="header-elf">
            <div className="back-btn-elf"><ion-icon name="chevron-back-outline" style={{ color: '#99999' }}></ion-icon></div>
            <div className="main-head-elf">ELF</div>
            <div className="question-mark-elf">?</div>
        </div>
        <div className="content-wrapper-elf">
            <div className="inner-content-elf-top">
                <div className="bar-chart-elf">
                    <img src={BarChart} alt="" />
                    <p>1 av 12</p>
                </div>
                <div className="clock-elf">
                    <img src={Clock} alt="" />
                    <p>12:00 min</p>
                </div>
            </div>
            <div className="progress-bar-elf"></div>
            <div className="inner-content-elf-bottom-1">
                <div className="question-1-elf">
                    <p>Rocket Science</p>
                    <p>Rockets are spectacular examples of Isaac Newton’s third law of motion: that to every action there is an equal and opposite reaction. For instance, throwing hot gas out of its engines at high speed (the action) thrusts a rocket off its launch pad and into space (the reaction). But having to carry the propellants needed to create the gas (the reaction mass) is a pain, for at any given moment dur-ing a flight, the action has to propel not only the rocket itself, but also all of the remaining, unburnt propellant. Most of the effort expended in a rocket launch is therefore directed towards lifting propellant. As a result, even the most modern rockets start off with a mass that is more than 90% propellant. The unrealistic fantasy of rocket scientists is therefore an engine that needs no propel-lant. And that is precisely what Roger Shawyer, a British aerospace engineer, claims to have invented.</p>
                </div>
                <div className="question-1-elf-1">
                    <div className="question-head-elf">
                        <p>What is implied in this text?</p>
                    </div>
                    <div className="opt-1-elf">
                        <input type="radio" />
                        <p>Newton’s third law of motion will have to be modified.</p>
                    </div>
                    <div className="opt-1-elf">
                        <input type="radio" />
                        <p>New rocket technology is revolutionizing space exploration.</p>
                    </div>
                    <div className="opt-1-elf">
                        <input type="radio" />
                        <p>Shawyer’s invention seems much too good to be true. </p>
                    </div>
                    <div className="opt-1-elf">
                        <input type="radio" />
                        <p>Future rocket engines will weigh much less than today’s.</p>
                    </div>
                </div>
                <div className="exercise-btn-main-elf">
                    <Exercise_Btn title="Nasta" />
                </div>
            </div>
        </div>
    </div>
};

export default QuestionViewElfOrg;
