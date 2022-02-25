import React from 'react'
import Logo from '../../../../assets/Icons/Logo.svg'
import Home from '../../../../assets/Icons/HomeC.svg'
import Course from '../../../../assets/Icons/Courses.svg'
import Feedback from '../../../../assets/Icons/Msg.svg'
import Profile from '../../../../assets/Icons/Profile.svg'
import { Container, makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRight: '1px solid #e1e1e1',
    height: "100vh",
    backgroundColor: '#f9f9f9',
    color: "white",
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    position:'sticky',
    top:0,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      backgroundColor: "#FAFAFA"
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#FAFAFA",
      color: "#555",
    },
  },
  item: {
    display: "flex",
    flexDirection: 'column',
    minHeight: '5rem',
    marginBottom: theme.spacing(1),
    "&:hover": {
      backgroundColor: '#0A1596'
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(0),
      cursor: "pointer",
    },
  },
  icon: {
    height: '2rem',
    marginBottom: theme.spacing(1),
  },
  text: {
    fontSize: '0.65rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const LeftBar = () => {

  const classes = useStyles();

  return (

    <Container className={classes.container}>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight:'5rem', borderBottom:'1px solid #e1e1e1' }}>
        <img src={Logo} style={{ maxWidth: '4rem' }} />
      </Box>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Home} className={classes.icon} />
        <Typography variant="body1" component="body1" className={classes.text}>Dashboard</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Course} className={classes.icon} />
        <Typography variant="body1" component="body1" className={classes.text}>Simulera prov</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Feedback} className={classes.icon} />
        <Typography variant="body1" component="body1" className={classes.text}>Feedback</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Profile} className={classes.icon} />
        <Typography variant="body1" component="body1" className={classes.text}>Profile</Typography>
      </div>
    </Container>
  )
}

export default LeftBar