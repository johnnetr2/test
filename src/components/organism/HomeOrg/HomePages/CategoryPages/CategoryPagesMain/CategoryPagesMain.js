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
    <Container maxWidth="false" disableGutters>
      <Container maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
            <CategoryPagesLeftBar />
          </Grid>
          <Grid item sm={11} xs={11} md={7} lg={7} xl={7}>
            <CategoryPagesFeedContent item={params?.state?.item} />
          </Grid>
          <Grid item sm={4} md={4} lg={4} xl={4} className={classes.right}>
            <CategoryPagesRightBar item={params?.state?.item} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default CategoryPagesMain;
