import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import HomeFeedContent from "../HomeFeedContent/HomeFeedContent";
import HomeLeftBar from "../HomeLeftBar/HomeLeftBar";
import HomeRightBar from "../HomeRightBar/HomeRightBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1200")]: {
      display: "none",
    },
  },
  main: {
    minHeight: "100vh",
    [theme.breakpoints.up("1300")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("1280")]: {
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
  const [totalPrognos, setTotalPrognos] = useState(0);
  return (
    <Container maxWidth="false" disableGutters>
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
          <HomeLeftBar
            currentPage="home"
            toggleIcon={props.toggleIcon}
            setToggleIcon={props.setToggleIcon}
          />
        </Grid>
        <Grid item xs={12} sm={11} md={7} lg={7} xl={7}>
          <HomeFeedContent getPrognos={(e) => setTotalPrognos(e)}
            studentPreference={
              props?.StudentPreference && props?.StudentPreference
            }
          />
        </Grid>
        <Grid
          item
          style={{
            width: "35rem",
            backgroundColor: "#fafafa",
          }}
          className={classes.right}
        >
          <HomeRightBar
            totalPrognos={totalPrognos && totalPrognos}
            studentPreference={
              props?.StudentPreference && props?.StudentPreference
            }
          />
        </Grid>
      </Grid>
      <BottomNavBar currentPage="home" />
    </Container>
  );
};

export default HomeMainOrg;
