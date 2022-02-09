import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Barchart_Icon from '../../../assets/icons/bar_chart.svg'
import Down_Arrow from '../../../assets/icons/down_arrow.svg'
import Right_Arrow from '../../../assets/icons/right_arrow.svg'
import Dtk_Img from '../../../assets/imgs/dtk-question.png'
import Clock from '../../../assets/icons/clock.svg'
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Checkbox, Radio, FormControlLabel, Toolbar, Container, LinearProgress, Button } from '@material-ui/core';
import Exercise_Btn from '../../atom/exercise-btn/Exercise_Btn';

const Result_Summary_Org = () => {




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
                <ArrowBackIosIcon color='black' sx={{ width: 100 }} />
                <Typography variant="body1" style={{ width: 1200 }} className={classes.center_align}>
                    Sammanfattning - DTK
                </Typography>
                <HelpOutlineIcon sx={{ width: 100 }} />
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container padding={0} maxWidth="md" style={{ backgroundColor: '#fff' }}>
                <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box mt={2} width={100} sx={{ color: '#222' }}><img src={Barchart_Icon} alt="" />12 av 12</Box>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
                        <Box  width={290} height={100} sx={{ backgroundColor: '#fff', border: '1px solid #e1e1e1', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }} >
                            <Typography variant="h4">10/12</Typography>
                            <Typography variant="body1" style={{ fontSize: '0.75rem' }}>Antal poäng</Typography>
                        </Box>
                        <Box width={290} height={100} sx={{ backgroundColor: '#fff', border: '1px solid #e1e1e1', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }} >
                            <Typography variant="h4">1.8</Typography>
                            <Typography variant="body1" style={{ fontSize: '0.75rem' }}>Normerad poäng</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
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
                <Box paddingX={4} mt={2} sx={{ backgroundColor: '#fff', width: 600, height: 'fit-content', border: '1px solid #e1e1e1', display: 'flex', flexDirection:'column' }}>

                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 1 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 2 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 3 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 4 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 5 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 6 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 7 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 8 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 9 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 10 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 11 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 550, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox />} />
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem', fontWeight: '600', marginRight:'18rem' }} variant='body1' component='body1'>
                            Uppgift 12 av 12
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Tid: 04:51
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Right_Arrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                </Box>
                <Box padding={1} m={2} sx={{ width: 615 }}>
                    <Button variant="outlined" style={{ width: 600 }}>Klar</Button>
                </Box>
            </Container>
        </Container>
    </div>;
};

export default Result_Summary_Org;
