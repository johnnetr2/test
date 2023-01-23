import React from "react";
import { Link, useLocation } from "react-router-dom";
import PremiumCTA from "./PremiumCTA";
import Logo from "../../../assets/Icons/Logo.svg";
import LogoIcon from "../../../assets/Icons/LogoIcon.svg";
import Menus from "./Menus";
import {
  Container,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  container: {
    borderRight: "1px solid #e1e1e1",
    height: "100vh",
    backgroundColor: "#FFFFFF",
    color: "white",
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    position: "sticky",
    top: 0,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      backgroundColor: "#FFFFFF",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#FFFFFF",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem 1.5rem 1rem 0.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
  logoStyling: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "5rem",
    },
  },
  premiumCTAStyling: {
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem",
    },
  },
}));

const LeftBar = (props) => {
  const classes = useStyles();
  const currentPage = useLocation().pathname;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const logoSrc = isSmallScreen ? LogoIcon : Logo;

  return (
    //Mother container
    <Container
      maxWidth="false"
      style={{ width: "100%" }}
      className={classes.container}
    >
      <Container //Logo container
        className={classes.logoContainer}
      >
        <Link to="/home">
          <img src={logoSrc} alt="logo" className={classes.logoStyling} />
        </Link>
      </Container>
      <Menus
        currentPage={currentPage}
        toggleIcon={props.toggleIcon}
        setToggleIcon={props.setToggleIcon}
      />
      <Container //Change to PremiumCTA later
        className={classes.premiumCTAStyling}
      >
        <PremiumCTA />
      </Container>
    </Container>
  );
};

export default LeftBar;