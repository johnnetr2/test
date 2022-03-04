import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import BarChart from '../../../../../../assets/Icons/BarChart.svg'
import RightArrow from '../../../../../../assets/Icons/RightArrow.svg'
import LeftArrow from '../../../../../../assets/Icons/LeftArrow.svg'
import Increment from '../../../../../../assets/Icons/Increment.svg'
import Decrement from '../../../../../../assets/Icons/Decrement.svg'
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

const QuestionViewXyzOrg = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [attemptedQuestion, setAttemptedQuestion] = useState([])
    const [quiz, setQuiz] = useState()
    const params = useLocation()


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const submitQuestion = (index) => {
        const exists = attemptedQuestion.some(id => id == index)
        if (!exists) {
            setAttemptedQuestion([...attemptedQuestion, index])
        }
    }

    const exitsIndex = (index) => {
        const exist = attemptedQuestion.some(id => id == index)
        return exist;
    }

    // const [data, setData] = useState([
    //     {
    //         type: 'image',
    //         question: 'usagifdsaui',
    //         questionStatement: 'M r cirkelns medelpunkt.',
    //         options: [
    //             {
    //                 id: 1,
    //                 type: 'text',
    //                 value: 'v',
    //                 ans: true
    //             },
    //             {
    //                 id: 2,
    //                 type: 'text',
    //                 value: '30',
    //                 ans: false
    //             },
    //             {
    //                 id: 3,
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //             {
    //                 id: 4,
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //         ]
    //     },
    //     {
    //         type: 'text',
    //         // question: 'saihdugshyug',
    //         questionStatement: 'En grupp med enbart kvinnor och män består av totalt 100 personer. Var och en av personerna är antingen högerhänt eller vänsterhänt. 75 % av kvinnorna är högerhänta. 12 kvinnor är vänsterhänta.',
    //         options: [
    //             {
    //                 type: 'text',
    //                 value: 'Antalet kvinnor i gruppen',
    //                 ans: false
    //             },
    //             {
    //                 type: 'text',
    //                 value: 'Antalet män i gruppen',
    //                 ans: true
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //         ]
    //     },
    //     {
    //         type: 'text',
    //         // question: 'f(x)=X/2-1',
    //         questionStatement: '\ begin{equation} \ begin{ aligned }& y > 0 \\ & \ frac{ x } { y }=5 \ end{ aligned } \ end{ equation }',
    //         options: [
    //             {
    //                 type: 'text',
    //                 value: 'y',
    //                 ans: false
    //             },
    //             {
    //                 type: 'text',
    //                 value: '20 procent av x',
    //                 ans: true
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //         ]
    //     },
    //     {
    //         type: 'text',
    //         question: 'Linjen L1 har ekvationen y = 3x - 1',
    //         questionStatement: 'Linjen L2 har ekvationen y = 5x + 3',
    //         options: [
    //             {
    //                 type: 'text',
    //                 value: 'x-koordinaten f r sk rningspunkten mellan L1 och L2',
    //                 ans: false
    //             },
    //             {
    //                 type: 'text',
    //                 value: '0',
    //                 ans: true
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //         ]
    //     },
    //     {
    //         type: 'text',
    //         question: 'f(x)=X/2-1',
    //         questionStatement: '\ begin{equation}x \ text { och } y \ text { är två på varandra följande positiva heltal sådana att } y ^ { 2} - x ^ { 2}=9 \ text {. } \ end{ equation }',
    //         options: [
    //             {
    //                 type: 'text',
    //                 value: 'y',
    //                 ans: false
    //             },
    //             {
    //                 type: 'text',
    //                 value: '6',
    //                 ans: true
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //         ]
    //     },
    //     {
    //         type: 'text',
    //         question: 'f(x)=X/2-1',
    //         questionStatement: 'I Minnas smyckeskrin finns det halsband, armband och ringar. Armbanden är dubbeltså många som ringarna.Halsbanden är 3 fler än ringarna och 2 färre än armbanden.',
    //         options: [
    //             {
    //                 type: 'text',
    //                 value: 'Antalet halsband i Minnas smyckeskrin',
    //                 ans: true
    //             },
    //             {
    //                 type: 'text',
    //                 value: '8',
    //                 ans: false
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //         ]
    //     },
    //     {
    //         type: 'text',
    //         question: 'f(x)=X/2-1',
    //         questionStatement: 'En mätserie består av tio mätvärden. Vart och ett av mätvärdena är ett heltal mellan 1 och 50. Mätseriens median är 25.',
    //         options: [
    //             {
    //                 type: 'text',
    //                 value: 'Mätseriens median om det största mätvärdet tas bort',
    //                 ans: false
    //             },
    //             {
    //                 type: 'text',
    //                 value: '25',
    //                 ans: true
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //             {
    //                 type: 'image',
    //                 value: DtkImg,
    //             },
    //         ]
    //     },
    // ])

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

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setQuiz(params.state.quiz)
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
        const questions = [...quiz]
        let question = questions[index];
        question.selectedIndex = optionIndex;
        setQuiz(questions)
        console.log(e.target.value, 'eeeeeeeeeeeeeeeee')
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

        {quiz && quiz.map((question, index) => {
            if (index == selectedIndex) {
                return (
                    <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
                        <Container disableGutters maxWidth="md" style={{ backgroundColor: '#fff' }}>
                            <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box mt={2} width={100} sx={{ color: '#222' }}><img src={BarChart} alt="" />{selectedIndex + 1} av {quiz.length}</Box>
                                <Box mt={2} sx={{ color: '#222' }}><img src={Clock} alt="" />10:45 min</Box>
                            </Box>

                            <Box mt={2} sx={{ backgroundColor: '#b4b4b4', height: '8px', display: 'flex', flexDirection: 'row' }}>
                                {quiz && quiz.map((item, index) => {
                                    return <Box sx={{ backgroundColor: exitsIndex(index) ? '#6fcf97' : '#B4B4B4', marginLeft: '2px', flex: '1' }}></Box>
                                })}
                            </Box>

                        </Container>
                        <Container maxWidth="md" style={{ marginTop: 0, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Box mt={5} paddingX={6} paddingY={2} sx={{ backgroundColor: '#fff', width: 600, height: 280, border: '1px solid #e1e1e1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="subtitle1" style={{ fontSize: '0.75rem', fontWeight: '500', marginBottom: 30 }}>
                                    {/* {question?.question} */}
                                </Typography>

                                <Typography variant="h6" component='h6' style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                                    {question?.question.questionStatement}
                                </Typography>

                            </Box>
                            <Box mt={5} sx={{ backgroundColor: '#fff', width: 600, height: 240, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                {question.options.map((item, optionIndex) => {
                                    return (
                                        <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                    <FormControlLabel onClick={(e) => {
                                                        SelectFunc(e, index, optionIndex)
                                                    }}
                                                        style={{ marginLeft: '.5rem' }}
                                                        value={item._id}
                                                        control={<img src={Wrong} style={{height: '1.2rem'}} />
                                                        // <Radio color='primary' checked={optionIndex == question.selectedIndex ? true : false} />
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

                            <Box paddingX={4} mt={3} sx={{ backgroundColor: '#fff', width: 600, height: 220, border: '1px solid #e1e1e1' }}>
                                <Box sx={{ width: 500, display: 'flex' }}>
                                    <Box>
                                        <Typography variant='h5' component="h5" style={{ fontSize: '.75rem', fontWeight: '600', marginTop: 20 }}>Förklaring:</Typography>
                                        <Typography variant="body1" component="div" style={{ fontSize: '.75rem', fontWeight: '500', marginTop: 10 }}>
                                            Vi ser att den lite tjockare solida linjen representerar dike och vi hittar en sådan linje att följa i området Byängen.
                                        </Typography>
                                        <Typography variant="body1" component="div" style={{ fontSize: '.75rem', fontWeight: '500', marginTop: 5 }}>
                                            Från vänster till höger ser vi att streckets riktning lutar nedåt. Det betyder alltså att från väst till öst går diket från nord till syd, eller uttryckt i andra ord går diket från nordväst till sydost.
                                        </Typography>
                                    </Box>
                                    <Box mt={2}>
                                        <img src={QuestionOption} alt="" />
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: 60 }}>
                                    <Typography variant="body1" component="body1" style={{ fontSize: '0.5rem' }}>Berätta för oss om du var nöjd med lösningen</Typography>
                                    <Box ml={1} mr={0.5}>
                                        <img src={Increment} alt="" />
                                    </Box>
                                    <Box mr={1}>
                                        <img src={Decrement} alt="" />
                                    </Box>
                                </Box>
                            </Box>

                            <Box padding={1} mt={2} sx={{ width: 615, display: 'flex', justifyContent: 'space-between' }}>
                                <Box aria-disabled={true} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img src={LeftArrow} alt="" onClick={() => setSelectedIndex(selectedIndex - 1)} /> <Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginLeft: '0.5rem' }}>Föregående</Typography></Box>

                                <Box><Typography variant="h6" onClick={() => submitQuestion(index)} style={{ fontSize: '0.75rem', textTransform: 'uppercase', cursor: 'pointer' }}>Resultatsida</Typography></Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Typography variant="h6" onClick style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginRight: '0.5rem' }}>Nästa</Typography><img src={RightArrow} alt="" onClick={() => setSelectedIndex(selectedIndex + 1)} /></Box>
                            </Box>
                        </Container>
                    </Container>
                )
            }
        })}
    </div>;
};

export default QuestionViewXyzOrg;
