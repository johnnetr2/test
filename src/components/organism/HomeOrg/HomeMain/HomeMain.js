import React, { useState } from "react";
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
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("1280")]: {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  flexStart: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "flex-start",
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
  const [totalPrognos, setTotalPrognos] = useState();
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        boxSizing: "border-box",
      }}
    >
      <Grid container wrap="nowrap" className={classes.main}>
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
        <Grid item xs={12} sm={11} md={7} lg={7} xl={7}>
          <HomeFeedContent getPrognos={(e) => setTotalPrognos(e)} />
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
            totalPrognos={totalPrognos && totalPrognos}
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
