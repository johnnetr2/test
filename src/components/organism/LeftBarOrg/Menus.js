import React from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import Home from "../../../assets/Icons/Home.svg";
import HomeC from "../../../assets/Icons/HomeC.svg";
import Course from "../../../assets/Icons/Course.svg";
import CourseC from "../../../assets/Icons/CourseC.svg";
import Profile from "../../../assets/Icons/Profile.svg";
import Feedback from "../../../assets/Icons/Feedback.svg";
import FeedbackC from "../../../assets/Icons/FeedbackC.svg";
import ProfileC from "../../../assets/Icons/ProfileC.svg";

import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import { appColors } from "../../../utils/commonService";
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "1rem",
    paddingLeft: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
      paddingTop: "1rem",
    },
  },
  item: {
    display: "flex",
    flexDirection: "column",
    minHeight: "3rem",
    justifyContent: "center",
    borderRadius: "1rem",
    textDecoration: "none",
    color: "#b4b4b4",
    marginBottom: "1rem",
    marginTop: "0.5rem",
    "&:hover": {
      backgroundColor: appColors.leftBarHover,
    },
    [theme.breakpoints.up("sm")]: {
      cursor: "pointer",
    },
  },
  innerItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    marginLeft: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginLeft: "0rem",
    },
  },
  icon: {
    height: "1.6rem",
  },
  text: {
    fontSize: "1rem",
    textAlign: "center",
    marginLeft: "0.8rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const navigationLinks = [
  {
    to: "/home",
    icon: Home,
    iconActive: HomeC,
    label: "Övningar",
  },
  {
    to: "/courses",
    icon: Course,
    iconActive: CourseC,
    label: "Prov",
  },
  {
    to: "/feedback",
    icon: Feedback,
    iconActive: FeedbackC,
    label: "Feedback",
  },
  {
    to: "/profile",
    icon: Profile,
    iconActive: ProfileC,
    label: "Profil",
  },
];

const Menus = (props) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Container className={classes.container}>
      {navigationLinks.map(({ to, icon, iconActive, label }) => (
        <NavLink
          key={to}
          to={to}
          className={classes.item}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? appColors.leftBarHover : "none",
            };
          }}
        >
          <Box className={classes.innerItem}>
            <img
              src={location.pathname === to ? iconActive : icon}
              alt={label}
              className={classes.icon}
            />
            <Typography
              className={classes.text}
              style={{
                color:
                  location.pathname === to ? appColors.blueColor : "#4F4F4F",
              }}
            >
              {label}
            </Typography>
          </Box>
        </NavLink>
      ))}
    </Container>
  );
};

export default Menus;
