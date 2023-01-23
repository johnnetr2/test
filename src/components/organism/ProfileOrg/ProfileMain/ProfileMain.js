import { Container, Grid, makeStyles } from "@material-ui/core";

import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import LeftBar from "../../LeftBarOrg/LeftBar";
import ProfileFeedContent from "../ProfileFeedContent/ProfileFeedContent";
import ProfileRightBar from "../ProfileRightBar/ProfileRightBar";
import React from "react";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1200")]: {
      display: "none",
    },
  },
  main: {
    minHeight: "100vh",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("md")]: {
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

const ProfileMain = () => {
  const classes = useStyles();

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
          className={classes.leftBarHide}
          item
          style={{ maxWidth: "13rem" }}
          sm={2}
          xs={2}
          md={2}
          lg={2}
          xl={2}
        >
          <LeftBar currentPage="profile" />
        </Grid>
        <Grid
          item
          sm={11}
          xs={12}
          md={7}
          lg={7}
          xl={7}
          style={{ maxWidth: "100rem" }}
        >
          <ProfileFeedContent />
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: "#fafafa",
            width: "35rem",
          }}
          className={classes.right}
        >
          <ProfileRightBar />
        </Grid>
      </Grid>
      <BottomNavBar currentPage="profile" />
    </Container>
  );
};

export default ProfileMain;
