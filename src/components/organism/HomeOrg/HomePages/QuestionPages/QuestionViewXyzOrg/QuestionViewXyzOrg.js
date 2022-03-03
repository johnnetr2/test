import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import FilledBtn from '../../../../../atom/FilledBtn/FilledBtn'
import BarChart from '../../../../../../assets/Icons/BarChart.svg'
import QuestionOption from '../../../../../../assets/Icons/QuestionOption.svg'
import PieChart from '../../../../../../assets/Imgs/SinglePieChart.png'
import DtkImg from '../../../../../../assets/Imgs/DtkImg.png'
import Clock from '../../../../../../assets/Icons/Clock.svg'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Radio, FormControlLabel, Toolbar, Container, LinearProgress } from '@material-ui/core';

const QuestionViewXyzOrg = () => {

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
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return <div>
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
                    XYZ
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container disableGutters maxWidth="md" style={{ backgroundColor: '#fff' }}>
                <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box mt={2} width={100} sx={{ color: '#222' }}><img src={BarChart} alt="" />8 av 12</Box>
                    <Box mt={2} sx={{ color: '#222' }}><img src={Clock} alt="" />10:45 min</Box>
                </Box>
                <Box mt={2}>
                    <LinearProgress className={classes.color_progress} variant="determinate" value={progress} />
                </Box>
            </Container>
            <Container maxWidth="md" style={{ marginTop: 0, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box mt={5} paddingX={6} paddingY={2} sx={{ backgroundColor: '#fff', width: 600, height: 280, border: '1px solid #e1e1e1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="subtitle1" style={{ fontSize: '0.75rem', fontWeight: '500', marginBottom: 30 }}>
                        f(x)=x/2-1
                    </Typography>
                    <Typography variant="h6" component='h6' style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                        Vilket svarsalternativ visar grafen till funktionen g(x)= 2 f (x)+ 3?
                    </Typography>
                </Box>
                <Box mt={5} sx={{ backgroundColor: '#fff', width: 600, height: 240, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FormControlLabel style={{ marginLeft: '.5rem' }} value="A" control={<Radio />} label="A" /></Box>
                            <Box mt={2} ml={5}><img className={classes.piechart_size} src={QuestionOption} alt="" /></Box>

                        </Box>
                    </Box>
                    <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FormControlLabel style={{ marginLeft: '.5rem' }} value="B" control={<Radio />} label="B" /></Box>
                            <Box mt={2} ml={5}><img className={classes.piechart_size} src={QuestionOption} alt="" /></Box>

                        </Box>
                    </Box>
                    <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FormControlLabel style={{ marginLeft: '.5rem' }} value="C" control={<Radio />} label="C" /></Box>
                            <Box mt={2} ml={5}><img className={classes.piechart_size} src={QuestionOption} alt="" /></Box>

                        </Box>
                    </Box>
                    <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FormControlLabel style={{ marginLeft: '.5rem' }} value="D" control={<Radio />} label="D" /></Box>
                            <Box mt={2} ml={5}><img className={classes.piechart_size} src={QuestionOption} alt="" /></Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding={1} mt={2} sx={{ width: 615 }}>
                    <FilledBtn title="Nästa" />
                </Box>
            </Container>
        </Container>
    </div>;
};

export default QuestionViewXyzOrg;
