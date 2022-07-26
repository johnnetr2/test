import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/Icons/Logo.svg";
import Home from "../../../../assets/Icons/Home.svg";
import HomeC from "../../../../assets/Icons/HomeC.svg";
import Course from "../../../../assets/Icons/Courses.svg";
import CourseC from "../../../../assets/Icons/CoursesC.svg";
import Feedback from "../../../../assets/Icons/Msg.svg";
import FeedbackC from "../../../../assets/Icons/FeedbackC.svg";
import Profile from "../../../../assets/Icons/Profile.svg";
import ProfileC from "../../../../assets/Icons/ProfileC.svg";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  TableContainer,
} from "@material-ui/core";

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
      color: "#fff",
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
  navStyle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#b4b4b4",
    textDecoration: "none",
  },
  text: {
    fontSize: "0.65rem",
    textAlign: "center",
    "&:active": {
      color: "#fff",
    },
    textTransform: "uppercase",
    // color: "#b4b4b4",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const HomeLeftBar = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="false"
      style={{ width: "6rem" }}
      className={classes.container}
    >
      <TableContainer
        style={{
          padding: "1rem",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        <Link to="/home">
          <img src={Logo} />
        </Link>
      </TableContainer>
      <NavLink
        to="/home"
        onClick={() => {
          navigate("/home", {
            state: {
              popUpStatus: true,
            },
          });
        }}
        className={classes.navStyle}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "#0A1596" : "none",
            color: isActive ? "#fff" : "none",
          };
        }}
      >
        <Box
          className={classes.item}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          // onClick={() =>
          // navigate("/home", {
          //   state: {
          //     popUpStatus: true,
          //   },
          // })
          // }
        >
          {/* <img src={HomeC} alt="" srcset="" /> */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={props.currentPage === "home" ? HomeC : Home}
              className={classes.icon}
            />
          </Box>
          <Typography
            variant="body1"
            component="body1"
            className={classes.text}
          >
            Övningar
          </Typography>
        </Box>
      </NavLink>
      <NavLink
        to="/courses"
        className={classes.navStyle}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "#0A1596" : "none",
            color: isActive ? "#fff" : "none",
          };
        }}
      >
        <Box
          className={classes.item}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={props.currentPage === "course" ? CourseC : Course}
              className={classes.icon}
            />
          </Box>
          <Typography
            variant="body1"
            component="body1"
            className={classes.text}
          >
            prov
          </Typography>
        </Box>
      </NavLink>
      <NavLink
        to="/message"
        className={classes.navStyle}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "#0A1596" : "none",
            color: isActive ? "#fff" : "none",
          };
        }}
      >
        <Box
          className={classes.item}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={props.currentPage === "feedback" ? FeedbackC : Feedback}
              className={classes.icon}
            />
          </Box>
          <Typography
            variant="body1"
            component="body1"
            className={classes.text}
          >
            Feedback
          </Typography>
        </Box>
      </NavLink>
      <NavLink
        to="/profile"
        className={classes.navStyle}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "#0A1596" : "none",
            color: isActive ? "#fff" : "none",
          };
        }}
      >
        <Box
          className={classes.item}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={props.currentPage === "profile" ? ProfileC : Profile}
              className={classes.icon}
            />
          </Box>
          <Typography
            variant="body1"
            component="body1"
            className={classes.text}
          >
            Profile
          </Typography>
        </Box>
      </NavLink>
    </Container>
  );
};

export default HomeLeftBar;
