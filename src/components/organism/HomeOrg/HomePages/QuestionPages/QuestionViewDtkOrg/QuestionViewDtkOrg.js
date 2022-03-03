import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import BarChart from '../../../assets/Icons/BarChart.svg'
import RightArrow from '../../../assets/Icons/RightArrow.svg'
import DtkImg from '../../../assets/Imgs/DtkImg.png'
import Clock from '../../../assets/Icons/Clock.svg'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Radio, FormControlLabel, Toolbar, Container, LinearProgress } from '@material-ui/core';
import ExerciseBtn from '../../atom/ExerciseBtn/ExerciseBtn';

const QuestionViewDTKOrg = () => {
  
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
      width:15,
      height:15
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
          DTK
        </Typography>
      </Toolbar>
    </AppBar>

    <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
      <Container padding={0} maxWidth="md" style={{ backgroundColor: '#fff' }}>
        <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box mt={2} width={100} sx={{ color: '#222' }}><img src={BarChart} alt="" />8 av 12</Box>
          <Box mt={2} sx={{ color: '#222' }}><img src={Clock} alt="" />10:45 min</Box>
        </Box>
        <Box mt={2} maxWidth="100" sx={{width:'100%'}}>
          <LinearProgress color="primary" variant="determinate" value={progress} />
        </Box>
      </Container>
      <Container maxWidth="md" style={{ marginTop: 0, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box mt={5} paddingX={6} paddingY={2} sx={{ backgroundColor: '#fff', width: 600, height: 373, border: '1px solid #e1e1e1' }}>
          <Typography variant="subtitle1" style={{ textTransform: 'uppercase', fontSize: '.7rem', fontWeight: '500' }}>
            3 uppgifter:
          </Typography>
          <Typography variant="h6" component='h6'>
            Teater och dans i siffror
          </Typography>
          <Typography variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
            Verksamhet och ekonomi för samtliga statligt stödda institutioner och fria grupper inom teater och dans åren 1997–2005.
          </Typography>
          <Box>
            <img src={DtkImg} alt="" />
          </Box>
        </Box>
        <Box paddingX={4} mt={5} sx={{ backgroundColor: '#fff', width: 600, height: 120, border: '1px solid #e1e1e1' }}>
          <Box style={{display:'flex', justifyContent:'flex-end', alignItems:'center', marginTop:10}}>
            <Typography variant='body1' component="body1">1/3</Typography>
            <img src={RightArrow} className={classes.size} alt="" />
          </Box>
          <Typography  variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600', marginTop:20 }}>
            Vilket år såg samtliga fem typer av institutioner och grupper sina intäkter ökajämfört med föregående år?
          </Typography>
        </Box>
        <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
          <FormControlLabel value="female" control={<Radio />} label="1998" />
        </Box>
        <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
          <FormControlLabel value="female" control={<Radio />} label="2000" />
        </Box>
        <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
          <FormControlLabel value="female" control={<Radio />} label="2002" />
        </Box>
        <Box padding={1} sx={{ backgroundColor: '#fff', width: 600, border: '1px solid #e1e1e1' }}>
          <FormControlLabel value="female" control={<Radio />} label="2004" />
        </Box>
        <Box padding={1} m={2} sx={{ width: 615 }}>
          <Link to="/result-question-view-dtk"><ExerciseBtn title="Nästa" /></Link>
        </Box>
      </Container>
    </Container>
  </div>;
};

export default QuestionViewDTKOrg;
