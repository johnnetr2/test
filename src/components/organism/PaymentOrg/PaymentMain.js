import { Container, Grid, makeStyles } from "@material-ui/core";
import BottomNavBar from "../../molecule/BottomNavBar/BottomNavBar";
import HomeLeftBar from "../../organism/HomeOrg/HomeLeftBar/HomeLeftBar";
import React from "react";
import Pricing from "./Pricing";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1000")]: {
      display: "none",
    },
  },
  leftBarHide: {
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
  },
}));

const PaymentMain = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        boxSizing: "border-box",
      }}
    >
      <Grid container wrap="nowrap" sx={{ minHeight: "100vh" }}>
        <Grid
          item
          className={classes.leftBarHide}
          style={{ maxWidth: "6rem" }}
          sm={1}
          xs={1}
          md={1}
          lg={1}
          xl={1}
        >
          <HomeLeftBar currentPage="checkout" />
        </Grid>
        <Pricing />
      </Grid>
      <BottomNavBar currentPage="checkout" />
    </Container>
  );
};

export default PaymentMain;
