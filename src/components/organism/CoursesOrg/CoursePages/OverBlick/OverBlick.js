import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import RightArrow from '../../../../../assets/Icons/RightArrow.svg'
import Tick from '../../../../../assets/Icons/Tick.svg'
import YellowStar from '../../../../../assets/Icons/YellowStar.svg'
import Warning from '../../../../../assets/Icons/Warning.svg'
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Paper, Box, CssBaseline, Toolbar, Container, Button } from '@material-ui/core';

const OverBlick = () => {

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
                    Överblick
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth={false} disableGutters style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container maxWidth="md" style={{ marginTop: 65, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box mt={3} sx={{ display: 'flex', width: 600, flexDirection: 'column' }}>
                    <Typography variant="h6" component="h6">Överblick Provpass 5</Typography>
                    <Typography variant="body2" component="body2">Innan du lämnar in se över vilka frågor du har missat, sparat samt gjort klart</Typography>
                    <Box sx={{ display: 'flex', marginTop: '1rem' }}>
                        <Box mt={1} sx={{ color: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ marginRight: '.25rem', width: '1rem' }} src={Tick} alt="" />
                            <Typography variant="body2">Gjord uppgit</Typography>
                        </Box>
                        <Box mt={1} ml={1} sx={{ color: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ marginRight: '.25rem', width: '1rem' }} src={YellowStar} alt="" />
                            <Typography variant="body2">Sparad uppgift</Typography>
                        </Box>
                        <Box mt={1} ml={1} sx={{ color: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ marginRight: '.25rem', width: '1rem' }} src={Warning} alt="" />
                            <Typography variant="body2">Missad uppgift</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box mt={3} padding={6} sx={{ backgroundColor: '#fff', width: 600, height: 373, overflow: 'auto', display: 'flex', justifyContent: 'center', border: '1px solid #e1e1e1' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30rem', height: '4rem', marginBottom:'1rem' }}>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30rem', height: '4rem', marginBottom:'1rem' }}>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30rem', height: '4rem', marginBottom:'1rem' }}>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30rem', height: '4rem', marginBottom:'1rem' }}>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30rem', height: '4rem', marginBottom:'1rem' }}>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30rem', height: '4rem', marginBottom:'1rem' }}>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30rem', height: '4rem', marginBottom:'1rem' }}>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30rem', height: '4rem', marginBottom:'1rem' }}>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #e1e1e1', width: '14rem', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', width: '10rem', alignItems: 'center', padding: '1rem' }}>
                                    <img style={{ width: '1rem', marginRight: '1rem' }} src={Tick} alt="" />
                                    <Typography variant='body2' sx={{ textTransform: 'uppercase' }}>Uppgift 1</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ marginRight: '1rem' }} src={RightArrow} alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding={3} sx={{ width: '98vw', backgroundColor:'#fff', display:'flex', justifyContent:'center', boxShadow:'1px 1px 5px #999' }}>
                    <Button variant="outlined" style={{ width: 600, textTransform:'capitalize', color:'#0A1596', border:'1px solid #0A1596' }}>Lämna in provpass</Button>
                </Box>
            </Container>
        </Container>
    </div>;
};

export default OverBlick;
