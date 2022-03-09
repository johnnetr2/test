import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import FilledBtn from '../../../../../atom/FilledBtn/FilledBtn'
import BarChart from '../../../../../../assets/Icons/BarChart.svg'
import QuestionOption from '../../../../../../assets/Icons/QuestionOption.svg'
import PieChart from '../../../../../../assets/Imgs/SinglePieChart.png'
import DtkImg from '../../../../../../assets/Imgs/DtkImg.png'
import Clock from '../../../../../../assets/Icons/Clock.svg'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Radio, FormControlLabel, Toolbar, Container, LinearProgress } from '@material-ui/core';
import { useLocation } from "react-router-dom"
import Correct from '../../../../../../assets/Imgs/correct.png'
import Wrong from '../../../../../../assets/Imgs/wrong.png'
import { EndPoints, instance2 } from "../../../../../service/Route";
import swal from 'sweetalert';
import Timer from '../../../../../atom/Timer/timer'
import { style } from '@mui/system';
import RightArrow from '../../../../../../assets/Icons/RightArrow.svg'
import LeftArrow from '../../../../../../assets/Icons/LeftArrow.svg'
import Increment from '../../../../../../assets/Icons/Increment.svg'
import Decrement from '../../../../../../assets/Icons/Decrement.svg'

const QuestionViewXyzOrg = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [attemptedQuestion, setAttemptedQuestion] = useState([])
    const [quiz, setQuiz] = useState()
    const [optionId, setOptionId] = useState()
    const params = useLocation()


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const submitQuestion = (question, index) => {
        if (optionId) {
            const exists = attemptedQuestion.some(id => id == index)
            if (!exists) {
                setAttemptedQuestion([...attemptedQuestion, index])
            }

            const questions = [...quiz]
            const ques = questions[index];

            const URL = EndPoints.getAnswerByQuestionId + question.question._id;
            instance2.get(URL).then(response => {
                ques.answer = response.data
                ques.answerSubmited = true
                setQuiz(questions)
            })
        } else {
            swal('varning', 'Var god välj ett alternativ', 'warning')
        }

    }

    const exitsIndex = (index) => {
        const exist = attemptedQuestion.some(id => id == index)
        return exist;
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            minHeight: '100vh',
            backgroundColor: '#fff',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        },
        header: {
            minHeight: '10vh',
            backgroundColor: '#fff',
            border: '1px solid #b4b4b4',
        },
        appbar:
        {
            border: '1px solid #E1E1E1',
            backgroundColor: '#f9f9f9'
        },
        size:
        {
            width: 15,
            height: 15
        },
        piechart_size:
        {
            width: 100
        },
        center_align: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        color_progress: {
            backgroundColor: '#B4B4B4',
            color: '#6FCF97'
        },
        content: {
            minHeight: '90vh',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90vw'
        }
    }))

    const classes = useStyles();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setQuiz(params.state.quiz)
        console.log(params.state, 'prev data')
        //     const timer = setInterval(() => {
        //         setProgress((oldProgress) => {
        //             if (oldProgress === 100) {
        //                 return 0;
        //             }
        //             const diff = Math.random() * 10;
        //             return Math.min(oldProgress + diff, 100);
        //         });
        //     }, 500);

        //     return () => {
        //         clearInterval(timer);
        //     };
    }, []);

    const SelectFunc = (e, index, optionIndex) => {
        setOptionId(e.target.value)
        const questions = [...quiz]
        let question = questions[index];
        question.selectedIndex = optionIndex;
        setQuiz(questions)
    }

    function OptionIndex(index) {
        switch (index) {
            case 0:
                return 'A';
            case 1:
                return 'B';
            case 2:
                return 'C';
            case 3:
                return 'D';
            default:
                return '';
        }
    }

    const Options = (question, curentOption, optionIndex) => {

        if (question.answer && question.answer.option == curentOption._id) {
            return <img src={Correct} style={{ marginRight: '0.5rem' }} />
        } else if (question.answer && optionIndex == question.selectedIndex) {
            return <img src={Wrong} style={{ marginRight: '0.5rem' }} />
        }
        if (optionIndex == question.selectedIndex) {

            return <Radio color='primary' checked={true} />
        } else {
            return <Radio color='primary' checked={false} />
        }
    }

    
    const SubmitAnswer = (question) => {
        if (question.answer) {
            selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1)
            console.log(question.question._id, 'question')
            const data = {
                quiz: params?.state?.data?._id,
                user: localStorage.getItem('id'),
                isCorrect: question.answer.option,
                optionId: optionId,
                questionId: question.question._id
            }
            console.log(data, 'result store api data')
            const URL = EndPoints.submitAnswer
            instance2.post(URL, data).then(response => {
                console.log(response.data)
            })
        } else {
            selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1)
        }

    }

    return <div>

        <CssBaseline />
        <AppBar
            color="#fff"
            className={classes.appbar}
            style={{ boxShadow: "none" }}
            position='absolute'
        >
            <Toolbar>
                <Typography variant="body1" style={{ width: 1200, marginLeft: '10rem' }} className={classes.center_align}>
                    {params.state.category_name}
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container disableGutters maxWidth="md" style={{ backgroundColor: '#fff' }}>
                <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box mt={2} width={100} sx={{ color: '#222' }}><img src={BarChart} alt="" />{selectedIndex + 1} av {quiz?.length}
                    </Box>
                    {params.state.data.value == true && <Box mt={2} sx={{ color: '#222', display: 'flex', flexDirection: 'row' }}><img src={Clock} alt="" /><Timer /></Box>}
                </Box>

                <Box mt={2} sx={{ backgroundColor: '#b4b4b4', height: '8px', display: 'flex', flexDirection: 'row' }}>
                    {quiz && quiz?.map((item, index) => {
                        return <Box sx={{ backgroundColor: exitsIndex(index) ? '#6fcf97' : '#B4B4B4', marginLeft: '2px', flex: '1' }}></Box>
                    })}
                </Box>

            </Container>

            {quiz && quiz?.map((question, index) => {
                if (index == selectedIndex) {
                    return (
                        <Container maxWidth="md" style={{ marginTop: 0, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Box mt={5} paddingX={6} paddingY={2} sx={{ backgroundColor: '#fff', width: 600, height: 280, border: '1px solid #e1e1e1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                {/* <Typography variant="subtitle1" style={{ fontSize: '0.75rem', fontWeight: '500', marginBottom: 30 }}>
                                    {question?.question}
                                </Typography> */}

                                <Typography variant="h6" component='h6' style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                                    {question?.question?.questionStatement}
                                </Typography>

                            </Box>
                            <Box mt={5} sx={{ backgroundColor: '#fff', width: 600, height: 240, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                {question?.options?.map((item, optionIndex) => {
                                    return (
                                        <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                    <FormControlLabel onClick={(e) => {
                                                        !question?.answerSubmited && SelectFunc(e, index, optionIndex)
                                                    }}
                                                        style={{ marginLeft: '.5rem' }}
                                                        value={item?._id}
                                                        control={
                                                            Options(question, item, optionIndex)
                                                        }
                                                        label={OptionIndex(optionIndex)}
                                                    />
                                                </Box>

                                                <Box mt={2} ml={5}>
                                                    {item.type == 'image' ? (<img className={classes.piechart_size} src={QuestionOption} alt="" />)
                                                        :
                                                        (<Typography>{item.value}</Typography>)
                                                    }
                                                </Box>

                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>

                            {question.answer && <Box paddingX={4} mt={3} sx={{ backgroundColor: '#fff', width: 600, height: 220, border: '1px solid #e1e1e1' }}>
                                <Box sx={{ width: 500, display: 'flex' }}>
                                    <Box>
                                        <Typography variant='h5' component="h5" style={{ fontSize: '.75rem', fontWeight: '600', marginTop: 20 }}>Förklaring:</Typography>
                                        <Typography variant="body1" component="div" style={{ fontSize: '.75rem', fontWeight: '500', marginTop: 10 }}>
                                            {question.answer.answer}
                                        </Typography>
                                    </Box>
                                    <Box mt={2}>
                                        {question.answer.image && <img src={question.answer.image} alt="" />}
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: 60 }}>
                                    <Typography variant="body1" component="body1" style={{ fontSize: '0.7rem', display: 'flex', justifySelf: 'flex-end' }}>Berätta för oss om du var nöjd med lösningen</Typography>
                                    <Box ml={1} mr={0.5}>
                                        <img src={Increment} alt="" />
                                    </Box>
                                    <Box mr={1}>
                                        <img src={Decrement} alt="" />
                                    </Box>
                                </Box>
                            </Box>}

                            <Box disable={true} padding={1} mt={2} sx={{ width: 615, display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img src={LeftArrow} alt="" onClick={() => selectedIndex > 0 && setSelectedIndex(selectedIndex - 1)} /> <Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginLeft: '0.5rem', color: selectedIndex > 0 ? 'black' : 'grey' }}>Föregående</Typography></Box>

                                <Box><Typography variant="h6" onClick={() => submitQuestion(question, index)} style={{ fontSize: '0.75rem', textTransform: 'uppercase', cursor: 'pointer' }}>Resultatsida</Typography></Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginRight: '0.5rem', color: selectedIndex + 1 == quiz.length ? 'gray' : 'black' }}>Nästa</Typography><img src={RightArrow} alt="" onClick={() => SubmitAnswer(question)} /></Box>
                            </Box>
                        </Container>
                    )
                }
            })}
        </Container>

    </div>;
};

export default QuestionViewXyzOrg;
