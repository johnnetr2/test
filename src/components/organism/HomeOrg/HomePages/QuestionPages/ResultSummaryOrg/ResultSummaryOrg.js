import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import BarChart from '../../../../../../assets/Icons/BarChart.svg'
import DownArrow from '../../../../../../assets/Icons/DownArrow.svg'
import RightArrow from '../../../../../../assets/Icons/RightArrow.svg'
import DtkImg from '../../../../../../assets/Imgs/DtkImg.png'
import Clock from '../../../../../../assets/Icons/Clock.svg'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Checkbox, Radio, FormControlLabel, Toolbar, Container, LinearProgress, Button } from '@material-ui/core';
import ExerciseBtn from '../../../../../atom/ExerciseBtn/ExerciseBtn';
import { instance, instance2, EndPoints } from '../../../../../service/Route'
import swal from 'sweetalert';
const ResultSummaryOrg = (props) => {




    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

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

    const classes = useStyles(10);

    const [progress, setProgress] = useState(0);
    const [responseCollection, setresponseCollection] = useState({})

    useEffect(() => {

        // const URL = EndPoints.getResult + props.quizId
        const URL = EndPoints.getResult + "/621750023cbac80f1421bef8"
        try {
            instance2.get(URL).then((response) => {
                if (response.data) {
                    // console.log(response.data, ' response from server');
                    setresponseCollection(response.data)
                }
            })
        } catch (error) {
            swal('Error',error.message,)
        }
        // const timer = setInterval(() => {
        //     setProgress((oldProgress) => {
        //         if (oldProgress === 100) {
        //             return 0;
        //         }
        //         const diff = Math.random() * 10;
        //         return Math.min(oldProgress + diff, 100);
        //     });
        // }, 500);

        return () => {
            // clearInterval(timer);
        };
    }, []);


    return <div>
        {console.log("response collection", responseCollection?.answer)}
        <CssBaseline />
        <AppBar
            color="#fff"
            className={classes.appbar}
            style={{ boxShadow: "none" }}
            position='absolute'
        >
            <Toolbar>
                {/* <ArrowBackIosIcon color='black' sx={{ width: 100 }} /> */}
                <Typography variant="body1" style={{ width: 1200 }} className={classes.center_align}>
                    Sammanfattning - DTK
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container disableGutters padding={0} maxWidth="md" style={{ backgroundColor: '#fff' }}>
                <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box mt={2} width={100} sx={{ color: '#222' }}><img src={BarChart} alt="" />12 av 12</Box>
                    <Box mt={2} sx={{ color: '#222' }}><img src={Clock} alt="" />20:00 min</Box>
                </Box>
                <Box mt={2}>
                    <LinearProgress className={classes.color_progress} variant="determinate" value={progress} />
                </Box>
            </Container>
            <Container maxWidth="md" style={{ marginTop: 0, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box mt={5} paddingY={2} sx={{ backgroundColor: '#f9f9f9', width: 600, height: 300 }}>
                    <Typography variant="h5" component='h5'>
                        Resultat
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box width={290} height={100} sx={{ backgroundColor: '#fff', border: '1px solid #e1e1e1', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }} >
                            <Typography variant="h4">
                                {responseCollection && responseCollection.correctAnswer + "/" +responseCollection.totalQuestion}
                            </Typography>
                            <Typography variant="body1" style={{ fontSize: '0.75rem' }}>Antal poäng</Typography>
                        </Box>
                        <Box width={290} height={100} sx={{ backgroundColor: '#fff', border: '1px solid #e1e1e1', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }} >
                            <Typography variant="h4">{(responseCollection.totalQuestion/ responseCollection.correctAnswer).toFixed(1)}</Typography>
                            <Typography variant="body1" style={{ fontSize: '0.75rem' }}>Normerad poäng</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box mt={2} width={290} height={100} sx={{ backgroundColor: '#fff', border: '1px solid #e1e1e1', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }} >
                            <Typography variant="h4">1:25</Typography>
                            <Typography variant="body1" style={{ fontSize: '0.75rem' }}>Tid per fråga</Typography>
                        </Box>
                        <Box mt={2} width={290} height={100} sx={{ backgroundColor: '#fff', border: '1px solid #e1e1e1', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }} >
                            <Typography variant="h4">00:05</Typography>
                            <Typography variant="body1" style={{ fontSize: '0.75rem' }}>Tid kvar</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box mt={2} sx={{ width: 600, display: 'flex' }}>
                    <Typography variant="h5">Dina svar</Typography>
                </Box>
                <Box paddingX={4} mt={2} sx={{ backgroundColor: '#fff', width: 600, height: 'fit-content', border: '1px solid #e1e1e1', display: 'flex', flexDirection: 'column' }}>
                  {  responseCollection?.answer && responseCollection?.answer.map((item,index)=>{
                     return(
                        <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox
                        checked={item.optionId ==item.isCorrect?true:false}
                        />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight: '18rem' }} variant='body1' component='body1'>
                            {"Uppgift " +`${index+1}`+ " av "+ responseCollection.totalQuestion}
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={RightArrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                     )
                    })}
                </Box>
                <Box padding={1} m={2} sx={{ width: 615 }}>
                    <Button variant="outlined" style={{ width: 600 }}>Klar</Button>
                </Box>
            </Container>
        </Container>
    </div>;
};

export default ResultSummaryOrg;
