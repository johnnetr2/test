import React, { useState } from "react";
import { Grid, makeStyles, Container, Box } from "@material-ui/core";
import HomeFeedContent from "../HomeFeedContent/HomeFeedContent";
import HomeRightBar from "../HomeRightBar/HomeRightBar";
import HomeLeftBar from "../HomeLeftBar/HomeLeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1243")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
}));

const HomeMainOrg = (props) => {
  const classes = useStyles();
  const [totalPrognos, setTotalPrognos] = useState();
  return (
    <Container maxWidth="false" disableGutters>
      <Grid container className={classes.main}>
        <Grid
          style={{ maxWidth: "6rem" }}
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
        >
          <HomeLeftBar />
        </Grid>
        <Grid item xs={11} sm={11} md={7} lg={7} xl={7}>
          <HomeFeedContent getPrognos={(e) => setTotalPrognos(e)} />
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          xl={4}
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
