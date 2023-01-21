import { Container, Grid } from "@material-ui/core";
import {
  gridStyling,
  leftBarGridSizes,
  middleGridSizes,
  feedbackMiddleGridSizes,
} from "../../../styles/GridSystem";
import { useLocation } from "react-router-dom";

const GridLayout = (props) => {
  const location = useLocation().pathname;
  console.log(location.pathname);
  const classes = gridStyling();
  return (
    <Container maxWidth="false" disableGutters>
      <Grid container wrap="nowrap" className={classes.main}>
        <Grid item className={classes.leftBarGrid} {...leftBarGridSizes}>
          {props.leftBar}
        </Grid>
        <Grid item {...middleGridSizes} className={classes.middleGrid}>
          {props.middle}
        </Grid>
        {/* //hide if it is feeback page */}
        <Grid item className={classes.rightBarGrid}>
          {props.rightBar}
        </Grid>
      </Grid>
      {props.bottomNav}
    </Container>
  );
};

export default GridLayout;
