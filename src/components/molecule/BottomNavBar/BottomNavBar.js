import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import CoursesGrey from "../../../assets/Icons/CoursesGrey.svg";
import Home from "../../../assets/Icons/Home.svg";
import HomeC from "../../../assets/Icons/HomeC.svg";
import MsgGrey from "../../../assets/Icons/MsgGrey.svg";
import ProfileGrey from "../../../assets/Icons/ProfileGrey.svg";
import { appColors } from "../../../utils/commonService";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f9f9f9",
    color: "white",
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    position: "sticky",
    bottom: 0,
    [theme.breakpoints.down("600")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.up("600")]: {
      display: "none",
    },
  },
  item: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 2),
    borderRadius: "4px",

    "&:hover": {
      backgroundColor: appColors.blueColor,
      color: "#fff",
    },
  },
  DisableItem: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 2),
  },
  icon: {
    height: "1.5rem",
  },
  navStyle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#b4b4b4",
    textDecoration: "none",
    borderRadius: "4px",
  },
  disabledNavStyle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#e1e1e1",
    "&:hover": {
      color: "#e1e1e1",
      cursor: "unset",
    },
    // backgroundColor: "#e1e1e1",
    textDecoration: "none",
  },
  text: {
    fontSize: "0.65rem",
    textAlign: "center",
    // "&:active": {
    //   color: "#fff",
    // },
  },
  active: {
    visibility: "visible",
    transition: "all 0.5s",
  },
  hidden: {
    visibility: "hidden",
    transition: "all 0.5s",
    transform: "translateY(100%)",
  },
}));

const BottomNavBar = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="false"
      style={{ width: "auto", height: "56px" }}
      className={[classes.container, classes.active]}
    >
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
            backgroundColor: isActive ? appColors.blueColor : "none",
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
        // to="/courses"
        to="#"
        className={classes.disabledNavStyle}
      // style={({ isActive }) => {
      //   return {
      //     backgroundColor: isActive ? appColors.blueColor : "none",
      //     color: isActive ? "#fff" : "none",
      //   };
      // }}
      >
        <Box
          className={classes.DisableItem}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              // src={props.currentPage === "course" ? CourseC : Course}
              src={CoursesGrey}
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
        // to="/message"
        to="#"
        className={classes.disabledNavStyle}
      // style={({ isActive }) => {
      //   return {
      //     backgroundColor: isActive ? appColors.blueColor : "none",
      //     color: isActive ? "#fff" : "none",
      //   };
      // }}
      >
        <Box
          className={classes.DisableItem}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* <img
              src={props.currentPage === "feedback" ? FeedbackC : Feedback}
              className={classes.icon}
            /> */}
            <img src={MsgGrey} alt="" className={classes.icon} />
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
        to="#"
        className={classes.disabledNavStyle}
      // style={({ isActive }) => {
      //   return {
      //     backgroundColor: isActive ? appColors.blueColor : "none",
      //     color: isActive ? "#fff" : "none",
      //   };
      // }}
      >
        <Box
          className={classes.DisableItem}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* <img
              src={props.currentPage === "profile" ? ProfileC : Profile}
              className={classes.icon}
            /> */}
            <img src={ProfileGrey} className={classes.icon} alt="" />
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

export default BottomNavBar;
