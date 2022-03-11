import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import FilledBtn from '../../../../../atom/FilledBtn/FilledBtn'
import BarChart from '../../../../../../assets/Icons/BarChart.svg'
import QuestionOption from '../../../../../../assets/Icons/QuestionOption.svg'
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
import RightArrow from '../../../../../../assets/Icons/RightArrow.svg'
import LeftArrow from '../../../../../../assets/Icons/LeftArrow.svg'
import Increment from '../../../../../../assets/Icons/Increment.svg'
import Decrement from '../../../../../../assets/Icons/Decrement.svg'
import DimLeftArrow from '../../../../../../assets/Icons/DimLeftArrow.svg'
import DimRightArrow from '../../../../../../assets/Icons/DimRightArrow.svg'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { SettingsRemoteRounded } from '@mui/icons-material';
// import CustomizedSnackbars from '../../../../../atom/Snackbar/snackbar'

const QuestionViewXyzOrg = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)
    // const [attemptedQuestion, setAttemptedQuestion] = useState([])
    const [quiz, setQuiz] = useState()
    const params = useLocation()
    const [status, setStatus] = useState(true)
    const [timer, setTimer] = useState()
    const [timeLeft, setTimeLeft] = useState()
    const time = 5


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    const Next = (question, index) => {
        if (question.answerSubmited) {
            if (index + 1 == quiz.length) {
                navigate('/resultsummary', {
                    state: {
                        quizId: params?.state?.data?._id,
                        categoryName: params?.state?.category_name,
                        timeLeft: timeLeft,
                        totalTime: time
                    }
                })
            } else {
                setStatus(true)
                selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1)
            }
        } else {
            if (question.selectedIndex + 1) {
                const questions = [...quiz]
                let ques = questions[index];

                const URL = EndPoints.getAnswerByQuestionId + ques.question._id;
                instance2.get(URL).then(response => {
                    ques.answer = response.data
                    ques.answerSubmited = true
                    setQuiz(questions)
                    setStatus(false)
                })

                const data = {
                    quiz: params?.state?.data?._id,
                    user: localStorage.getItem('userId'),
                    optionId: question.selectedOptionID,
                    questionId: question.question._id,
                    sectionCategory: params?.state?.sectionCategory
                }

                const Submit = EndPoints.submitAnswer
                instance2.post(Submit, data).then(response => {
                    console.log('Answer submited')
                })
            }
        }

    }

    // const exitsIndex = (index) => {
    //     const exist = attemptedQuestion.some(id => id == index)
    //     return exist;
    // }

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
    const navigate = useNavigate()
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setQuiz(params.state.quiz)
    }, []);

    const SelectFunc = (e, index, optionIndex) => {
        const questions = [...quiz]
        let question = questions[index];
        question.selectedIndex = optionIndex;
        question.selectedOptionID = e.target.value
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



    return <div>

        <CssBaseline />
        <AppBar
            color="#fff"
            className={classes.appbar}
            style={{ boxShadow: "none" }}
            position='absolute'
        >
            <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ height: '8vh', width: '2.3rem', display: 'flex', alignItems: 'center', borderRight: '1px solid #E1E1E1', cursor: 'pointer' }} ><img style={{ height: '1.1rem' }} src={LeftArrow} alt='' /></Box>

                <Typography variant="body1" className={classes.center_align}>
                    {params.state.category_name}
                </Typography>

                <Box>
                    <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
                </Box>

            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container disableGutters maxWidth="md" style={{ backgroundColor: '#fff' }}>
                <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box mt={2} width={100} sx={{ color: '#222' }}><img src={BarChart} alt="" />{selectedIndex + 1} av {quiz?.length}
                    </Box>
                    {params.state.data.value == true && <Box mt={2} sx={{ color: '#222', display: 'flex', flexDirection: 'row' }}><img src={Clock} alt="" />
                        <Timer continueStatus={status} time={time}
                            timeleft={(timer) =>
                                setTimeLeft(timer)}
                            onCloseTimer={() => navigate('/resultsummary', {
                                state: {
                                    quizId: params?.state?.data?._id,
                                    categoryName: params?.state?.category_name,
                                    timeLeft: 0,
                                    totalTime: time
                                }
                            })} /></Box>}
                </Box>

                <Box mt={2} sx={{ backgroundColor: '#b4b4b4', height: '8px', display: 'flex', flexDirection: 'row' }}>
                    {quiz && quiz?.map((item) => {
                        return <Box sx={{ backgroundColor: item.answerSubmited ? '#6fcf97' : '#B4B4B4', marginLeft: '2px', flex: '1' }}></Box>
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
                                                        !question?.answerSubmited && SelectFunc(e, index, optionIndex, question, index)
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

                            {question.selectedIndex + 1 ? (<Box onClick={() => Next(question, index)} padding={1} mt={2} sx={{ width: 600, display: 'flex', justifyContent: 'center', backgroundColor: '#0A1596', borderRadius: '.3rem', cursor: 'pointer' }}>
                                <Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginRight: '0.5rem', color: '#FFFFFF' }}>Nästa</Typography>
                            </Box>)
                                :
                                (<Box padding={1} mt={2} sx={{ width: 600, display: 'flex', justifyContent: 'center', backgroundColor: 'grey', borderRadius: '.3rem', cursor: 'pointer' }}>
                                    <Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginRight: '0.5rem', color: '#FFFFFF' }}>Nästa</Typography>
                                </Box>)}

                        </Container>
                    )
                }
            })}
        </Container>

    </div>;
};

export default QuestionViewXyzOrg;
