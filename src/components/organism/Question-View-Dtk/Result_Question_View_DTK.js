import React, { useEffect, useState } from 'react';
import Barchart_Icon from '../../../assets/icons/bar_chart.svg'
import Right_Arrow from '../../../assets/icons/right_arrow.svg'
import Dtk_Img from '../../../assets/imgs/dtk-question.png'
import Clock from '../../../assets/icons/clock.svg'
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Radio, FormControlLabel, Toolbar, Container, LinearProgress } from '@material-ui/core';
import Exercise_Btn from '../../atom/exercise-btn/Exercise_Btn';

const Result_Question_View_DTK = () => {




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
        <ArrowBackIosIcon color='black' sx={{ width: 100 }} />
        <Typography variant="body1" style={{ width: 1200 }} className={classes.center_align}>
          DTK
        </Typography>
        <HelpOutlineIcon sx={{ width: 100 }} />
      </Toolbar>
    </AppBar>

    <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
      <Container padding={0} maxWidth="md" style={{ backgroundColor: '#fff' }}>
        <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box mt={2} width={100} sx={{ color: '#222' }}><img src={Barchart_Icon} alt="" />8 av 12</Box>
          <Box mt={2} sx={{ color: '#222' }}><img src={Clock} alt="" />10:45 min</Box>
        </Box>
        <Box mt={2}>
          <LinearProgress className={classes.color_progress} variant="determinate" value={progress} />
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
            <img src={Dtk_Img} alt="" />
          </Box>
        </Box>
        <Box paddingX={4} mt={5} sx={{ backgroundColor: '#f9f9f9', width: 600, height: 120, border: '1px solid #e1e1e1' }}>
          <Box style={{display:'flex', justifyContent:'flex-end', alignItems:'center', marginTop:10}}>
            <Typography variant='body1' component="body1">1/3</Typography>
            <img src={Right_Arrow} className={classes.size} alt="" />
          </Box>
          <Typography  variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600', marginTop:20 }}>
            Vilket år såg samtliga fem typer av institutioner och grupper sina intäkter ökajämfört med föregående år?
          </Typography>
        </Box>
        <Box padding={1} sx={{ backgroundColor: '#f9f9f9', width: 600, border: '1px solid #e1e1e1' }}>
          <FormControlLabel value="female" control={<Radio />} label="1998" />
        </Box>
        <Box padding={1} sx={{ backgroundColor: '#f9f9f9', width: 600, border: '1px solid #e1e1e1' }}>
          <FormControlLabel value="female" control={<Radio />} label="2000" />
        </Box>
        <Box padding={1} sx={{ backgroundColor: '#f9f9f9', width: 600, border: '1px solid #e1e1e1' }}>
          <FormControlLabel value="female" control={<Radio />} label="2002" />
        </Box>
        <Box padding={1} sx={{ backgroundColor: '#f9f9f9', width: 600, border: '1px solid #e1e1e1' }}>
          <FormControlLabel value="female" control={<Radio />} label="2004" />
        </Box>
        <Box padding={1} m={2} sx={{ width: 615 }}>
          <Exercise_Btn title="Nästa" />
        </Box>
      </Container>
    </Container>

  </div>;
};

export default Result_Question_View_DTK;
