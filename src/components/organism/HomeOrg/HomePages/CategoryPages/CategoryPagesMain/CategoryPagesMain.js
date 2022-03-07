import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useParams, useLocation } from "react-router-dom";
import CategoryPagesFeedContent from "../../CategoryPages/CategoryPagesContentFeed/CategoryPagesContentFeed";
import CategoryPagesRightBar from "../../CategoryPages/CategoryPagesRightBar/CategoryPagesRightBar";
import CategoryPagesLeftBar from "../../../HomeLeftBar/HomeLeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const CategoryPagesMain = (props) => {
  // const {sectionData} = useParams();
  const params = useLocation();

  // const params = useParams();

  // const { state } = props.location.state;

  useEffect(() => {
    // const data = params
    console.log(params.state, "this is final & final console.");
  }, []);

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={1} xs={2}>
        <CategoryPagesLeftBar />
      </Grid>
      <Grid item sm={7} xs={10}>
        <CategoryPagesFeedContent />
      </Grid>
      <Grid item sm={4} className={classes.right}>
        <CategoryPagesRightBar />
      </Grid>
    </Grid>
  );
};

export default CategoryPagesMain;
