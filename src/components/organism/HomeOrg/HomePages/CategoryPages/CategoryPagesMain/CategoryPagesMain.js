import { Container, Grid } from "@material-ui/core";
import { EndPoints, instance2 } from "../../../../../service/Route";
import React, { useEffect } from "react";

import BottomNavBar from "../../../../../molecule/BottomNavBar/BottomNavBar";
import CategoryPagesFeedContent from "../../CategoryPages/CategoryPagesContentFeed/CategoryPagesContentFeed";
import CategoryPagesLeftBar from "../../../HomeLeftBar/HomeLeftBar";
import CategoryPagesRightBar from "../../CategoryPages/CategoryPagesRightBar/CategoryPagesRightBar";
import HomeLeftBar from "../../../HomeLeftBar/HomeLeftBar";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("1300")]: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("1280")]: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
    },
  },
  leftBarHide: {
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
  },
}));

const CategoryPagesMain = () => {
  const classes = useStyles();
  const params = useLocation();

  return (
    <Container maxWidth="false" disableGutters>
      <Grid container wrap="nowrap" className={classes.main}>
        <Grid
          item
          style={{ maxWidth: "6rem" }}
          className={classes.leftBarHide}
          sm={1}
          xs={1}
          md={1}
          lg={1}
          xl={1}
        >
          <HomeLeftBar />
        </Grid>
        <Container
          maxWidth="xl"
          disableGutters
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={12} sm={10} lg={7} xl={7}>
            <CategoryPagesFeedContent item={params?.state?.item} />
          </Grid>
          <Grid item className={classes.right}>
            <CategoryPagesRightBar
              item={params?.state?.item}
              progress={params?.state.progress}
            />
          </Grid>
        </Container>
      </Grid>
      <BottomNavBar currentPage="category" />
    </Container>
  );
};

export default CategoryPagesMain;
