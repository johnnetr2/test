import React, { useEffect } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import CategoryPagesFeedContent from "../../CategoryPages/CategoryPagesContentFeed/CategoryPagesContentFeed";
import CategoryPagesRightBar from "../../CategoryPages/CategoryPagesRightBar/CategoryPagesRightBar";
import CategoryPagesLeftBar from "../../../HomeLeftBar/HomeLeftBar";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1000")]: {
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
          <CategoryPagesLeftBar />
        </Grid>
        <Grid
          item
          style={{ maxWidth: "100rem" }}
          sm={12}
          xs={11}
          md={7}
          lg={7}
          xl={7}
        >
          <CategoryPagesFeedContent item={params?.state?.item} />
        </Grid>
        <Grid
          style={{
            width: "35rem",
          }}
          className={classes.right}
        >
          <CategoryPagesRightBar item={params?.state?.item} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoryPagesMain;
