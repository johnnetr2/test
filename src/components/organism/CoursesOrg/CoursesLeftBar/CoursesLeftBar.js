import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/Icons/Logo.svg";
import Home from "../../../../assets/Icons/HomeC.svg";
import Course from "../../../../assets/Icons/Courses.svg";
import Feedback from "../../../../assets/Icons/Msg.svg";
import Profile from "../../../../assets/Icons/Profile.svg";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRight: "1px solid #e1e1e1",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    color: "white",
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    position: "sticky",
    top: 0,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      backgroundColor: "#FAFAFA",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#FAFAFA",
      color: "#555",
    },
  },
  item: {
    display: "flex",
    flexDirection: "column",
    minHeight: "5rem",
    marginBottom: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#0A1596",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(0),
      cursor: "pointer",
    },
  },
  icon: {
    height: "2rem",
    marginBottom: theme.spacing(1),
  },
  text: {
    fontSize: "0.65rem",
    textAlign: "center",
    "&:hover": {
      color: "#fff",
    },
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const CoursesLeftBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "5rem",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        <Link
          to="/home"
          style={{
            minWidth:'5rem'
          }}
        >
          <img src={Logo} style={{ maxWidth: "8rem" }} />
        </Link>
      </Box>
      <Box
        className={classes.item}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link
          to="/home"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "#252525",
            textDecoration: "none",
          }}
        >
          <img src={Home} className={classes.icon} />
          <Typography
            variant="body1"
            component="body1"
            className={classes.text}
          >
            Dashboard
          </Typography>
        </Link>
      </Box>
      <Box
        className={classes.item}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link
          to="/courses"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "#252525",
            textDecoration: "none",
          }}
        >
          <img src={Course} className={classes.icon} />
          <Typography
            variant="body1"
            component="body1"
            className={classes.text}
          >
            Simulera prov
          </Typography>
        </Link>
      </Box>
      <Box
        className={classes.item}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link
          to="/message"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "#252525",
            textDecoration: "none",
          }}
        >
          <img src={Feedback} className={classes.icon} />
          <Typography
            variant="body1"
            component="body1"
            className={classes.text}
          >
            Feedback
          </Typography>
        </Link>
      </Box>
      <Box
        className={classes.item}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link
          to="/profile"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "#252525",
            textDecoration: "none",
          }}
        >
          <img src={Profile} className={classes.icon} />
          <Typography
            variant="body1"
            component="body1"
            className={classes.text}
          >
            Profile
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default CoursesLeftBar;
