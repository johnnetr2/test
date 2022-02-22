import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Barchart_Icon from '../../../../../assets/icons/bar_chart.svg'
import Right_Arrow from '../../../../../assets/icons/right_arrow.svg'
import Left_Arrow from '../../../../../assets/icons/left_arrow.svg'
import StarIcon from '../../../../../assets/icons/StarIcon.svg'
import Increment from '../../../../../assets/icons/increment.svg'
import Decrement from '../../../../../assets/icons/decrement.svg'
import Question_Option from '../../../../../assets/icons/question_option.svg'
import Pie_Chart from '../../../../../assets/imgs/single_pie_chart.png'
import Dtk_Img from '../../../../../assets/imgs/dtk-question.png'
import Clock from '../../../../../assets/icons/clock.svg'
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Radio, Button, FormControlLabel, Toolbar, Container, LinearProgress } from '@material-ui/core';

const StandardViewXyz = () => {

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
                <ArrowBackIosIcon color='black' sx={{ width: 100 }} />
                <Typography variant="body1" style={{ width: 1200 }} className={classes.center_align}>
                    XYZ
                </Typography>
                <HelpOutlineIcon sx={{ width: 100 }} />
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container padding={0} maxWidth="md" style={{ backgroundColor: '#fff' }}>
                <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box mt={2} width={100} sx={{ color: '#222' }}><img src={Barchart_Icon} alt="" />10 av 40</Box>
                    <Box mt={2} sx={{ color: '#222' }}><img src={Clock} alt="" />43:00 min</Box>
                </Box>
                <Box mt={2}>
                    <LinearProgress className={classes.color_progress} variant="determinate" value={progress} />
                </Box>
            </Container>
            <Container maxWidth="md" style={{ marginTop: 0, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box style={{marginLeft:'70rem', width:'10rem', display:'flex', justifyContent:'center'}}>
                    <Button style={{width:'6rem', border:'1px solid #0A1596', color:'#0A1596'}}> <img style={{width:'1rem', marginRight:'.5rem'}} src={StarIcon} alt="" /> Spara</Button>
                </Box>
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
                            <Box mt={2} ml={5}><img className={classes.piechart_size} src={Question_Option} alt="" /></Box>

                        </Box>
                    </Box>
                    <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FormControlLabel style={{ marginLeft: '.5rem' }} value="B" control={<Radio />} label="B" /></Box>
                            <Box mt={2} ml={5}><img className={classes.piechart_size} src={Question_Option} alt="" /></Box>

                        </Box>
                    </Box>
                    <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FormControlLabel style={{ marginLeft: '.5rem' }} value="C" control={<Radio />} label="C" /></Box>
                            <Box mt={2} ml={5}><img className={classes.piechart_size} src={Question_Option} alt="" /></Box>

                        </Box>
                    </Box>
                    <Box sx={{ height: 120, border: '1px solid #e1e1e1', width: 300 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FormControlLabel style={{ marginLeft: '.5rem' }} value="D" control={<Radio />} label="D" /></Box>
                            <Box mt={2} ml={5}><img className={classes.piechart_size} src={Question_Option} alt="" /></Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding={1} mt={2} sx={{ width: 615, display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img src={Left_Arrow} alt="" /> <Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginLeft: '0.5rem' }}>Föregående</Typography></Box>
                    <Box><Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>överblick</Typography></Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginRight: '0.5rem' }}>Nästa</Typography><img src={Right_Arrow} alt="" /></Box>
                </Box>
            </Container>
        </Container>
    </div>;
};

export default StandardViewXyz;
