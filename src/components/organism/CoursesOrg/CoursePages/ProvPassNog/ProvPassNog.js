import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import BarChart from '../../../../../assets/Icons/BarChart.svg'
import RightArrow from '../../../../../assets/Icons/RightArrow.svg'
import LeftArrow from '../../../../../assets/Icons/LeftArrow.svg'
import StarIcon from '../../../../../assets/Icons/StarIcon.svg'
import NogFigure from '../../../../../assets/Icons/NogFigure.svg'
import Clock from '../../../../../assets/Icons/Clock.svg'
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Radio, Button, FormControlLabel, Toolbar, Container, LinearProgress } from '@material-ui/core';
import ExerciseBtn from '../../../../atom/ExerciseBtn/ExerciseBtn';

const ProvPassNog = () => {

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
                {/* <ArrowBackIosIcon color='black' sx={{ width: 100 }} /> */}
                <Typography variant="body1" style={{ width: 1200 }} className={classes.center_align}>
                    NOG
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container padding={0} maxWidth="md" style={{ backgroundColor: '#fff' }}>
                <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box mt={2} width={100} sx={{ color: '#222' }}><img src={BarChart} alt="" />1 av 10</Box>
                    <Box mt={2} sx={{ color: '#222' }}><img src={Clock} alt="" />20:00 min</Box>
                </Box>
                <Box mt={2}>
                    <LinearProgress className={classes.color_progress} variant="determinate" value={progress} />
                </Box>
            </Container>
            <Container maxWidth="md" style={{ marginTop: 0, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box style={{ marginLeft: '70rem', width: '10rem', display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ width: '6rem', border: '1px solid #0A1596', color: '#0A1596' }}> <img style={{ width: '1rem', marginRight: '.5rem' }} src={StarIcon} alt="" /> Spara</Button>
                </Box>
                <Box mt={5} paddingX={6} paddingY={2} sx={{ backgroundColor: '#fff', width: 600, height: 373, overflow: 'auto', border: '1px solid #e1e1e1' }}>
                    {/* <Typography variant="subtitle1" style={{ textTransform: 'uppercase', fontSize: '.7rem', fontWeight: '500' }}>
                        5 uppgifter:
                    </Typography> */}
                    <Typography variant="h6" component='h6' style={{ fontSize: '0.85rem', fontWeight: 550, marginTop: 20 }}>
                        Vilka koordinater har punkten A?
                    </Typography>
                    <Box>
                        <img src={NogFigure} alt="" />
                    </Box>
                    <Typography mt={8} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        (1) Triangelns area är 30 areaenheter.
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        (2)	Sträckan AC är 13 längdenheter.
                    </Typography>
                </Box>
                <Box paddingX={4} mt={5} sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', width: 600, height: 90, border: '1px solid #e1e1e1' }}>
                    <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                        Tillräcklig information för lösningen erhålls
                    </Typography>
                </Box>
                <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
                    <FormControlLabel value="female" control={<Radio />} label="i (1) men ej i (2)" />
                </Box>
                <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
                    <FormControlLabel value="female" control={<Radio />} label="i (2) men ej i (1)" />
                </Box>
                <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
                    <FormControlLabel value="female" control={<Radio />} label="i (1) tillsammans med (2)" />
                </Box>
                <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
                    <FormControlLabel value="female" control={<Radio />} label="i (1) och (2) var för sig" />
                </Box>
                <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
                    <FormControlLabel value="female" control={<Radio />} label="ej genom de båda påståendena" />
                </Box>
                <Box padding={1} mt={2} sx={{ width: 615, display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img src={LeftArrow} alt="" />
                        <Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginLeft: '0.5rem' }}>Föregående
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>överblick
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography variant="h6" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginRight: '0.5rem' }}>
                            Nästa
                        </Typography>
                        <img src={RightArrow} alt="" />
                    </Box>
                </Box>
            </Container>
        </Container>
    </div>;
};

export default ProvPassNog;