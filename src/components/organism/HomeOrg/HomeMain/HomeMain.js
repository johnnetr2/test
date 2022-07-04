import React from "react";
import { Grid, makeStyles, Container, Box } from "@material-ui/core";
import HomeFeedContent from "../HomeFeedContent/HomeFeedContent";
import HomeRightBar from "../HomeRightBar/HomeRightBar";
import HomeLeftBar from "../HomeLeftBar/HomeLeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1000")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("1300")]: {
      display: "flex",
      // flexWrap: "nowrap",
      justifyContent: "space-between",
      border: "1px solid #f00",
    },
    [theme.breakpoints.down("1280")]: {
      display: "flex",
      // flexWrap: "nowrap",
      justifyContent: "flex-start",
      border: "1px solid #f0f",
    },
  },
  flexStart: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "flex-start",
      border: "1px solid #00f",
    },
  },
  leftBarHide: {
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
  },
}));

const HomeMainOrg = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="false" disableGutters>
      <Grid container className={classes.main}>
        <Grid
          item
          className={classes.leftBarHide}
          style={{ maxWidth: "6rem" }}
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
        >
          <HomeLeftBar />
        </Grid>
        <Grid
          style={{ border: "1px solid #f00", backgroundColor: "#0ff" }}
          item
          xs={12}
          sm={11}
          md={11}
          lg={11}
          xl={11}
        >
          <HomeFeedContent />
        </Grid>
        <Grid
          item
          style={{
            maxWidth: "30rem",
            backgroundColor: "#fafafa",
          }}
          className={classes.right}
        >
          <HomeRightBar
            studentPreference={
              props.studentPreference && props.studentPreference
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeMainOrg;
