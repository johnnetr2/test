import React from 'react'
import Logo from '../../../../assets/icons/logo.svg'
import { Container, makeStyles, Typography } from "@material-ui/core";
// import {
//   Bookmark,
//   List,
//   ExitToApp,
//   Home,
//   Person,
//   PhotoCamera,
//   PlayCircleOutline,
//   Settings,
//   Storefront,
//   TabletMac,
// } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRight: '1px solid #e1e1e1',
    height: "100vh",
    backgroundColor: '#f9f9f9',
    color: "white",
    paddingTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    '& .MuiContainer-root': {
      backgroundColor: '#f00',
    },
    '& .makeStyles-container-12': {
      backgroundColor: '#f00',
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    minWidth: '5rem',
    border: '1px solid #f0f',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    height: '2rem',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontSize: '0.65rem',
    textAlign: 'center',
    border:'1px solid #0f0',
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
      <div className={classes.item}>
        <img src={Logo} className={classes.icon, classes.text} />
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center'}}>
        {/* <Person className={classes.icon} /> */}
        <Typography variant="body1" component="body1" className={classes.text}>Dashboard</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center'}}>
        {/* <List className={classes.icon} /> */}
        <Typography variant="body1" component="body1" className={classes.text}>Simola prov</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center'}}>
        {/* <List className={classes.icon} /> */}
        <Typography variant="body1" component="body1" className={classes.text}>Feedback</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <List className={classes.icon} /> */}
        <Typography variant="body1" component="body1" className={classes.text}>Profile</Typography>
      </div>
    </Container>
  )
}

export default LeftBar