import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import HomeFeedContent from "../HomeFeedContent/HomeFeedContent";
import HomeRightBar from "../HomeRightBar/HomeRightBar";
import HomeLeftBar from "../HomeLeftBar/HomeLeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const HomeMainOrg = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="false" disableGutters>
      <Container maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
            <HomeLeftBar />
          </Grid>
          <Grid item sm={11} xs={11} md={7} lg={7} xl={7}>
            <HomeFeedContent />
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ backgroundColor: "#fafafa" }}
            className={classes.right}
          >
            <HomeRightBar />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default HomeMainOrg;
