import React, { useEffect } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import CategoryPagesFeedContent from "../../CategoryPages/CategoryPagesContentFeed/CategoryPagesContentFeed";
import CategoryPagesRightBar from "../../CategoryPages/CategoryPagesRightBar/CategoryPagesRightBar";
import CategoryPagesLeftBar from "../../../HomeLeftBar/HomeLeftBar";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const CategoryPagesMain = () => {
  const classes = useStyles();
  const params = useLocation();

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <Grid container>
          <Grid item sm={1} xs={2}>
            <CategoryPagesLeftBar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <CategoryPagesFeedContent item={params?.state?.item} />
          </Grid>
          <Grid item sm={4} className={classes.right}>
            <CategoryPagesRightBar item={params?.state?.item} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default CategoryPagesMain;
