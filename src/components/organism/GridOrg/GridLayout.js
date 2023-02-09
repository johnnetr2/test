import { Container, Grid } from "@material-ui/core";
import {
  gridStyling,
  leftBarGridSizes,
  middleGridSizes,
} from "../../../styles/GridSystem";
import { useLocation } from "react-router-dom";

const GridLayout = (props) => {
  const location = useLocation().pathname;
  console.log("h1", location);
  const classes = gridStyling();
  return (
    <Container maxWidth="false" disableGutters>
      <Grid container wrap="nowrap" className={classes.main}>
        <Grid item >
          {props.leftBar}
        </Grid>
        <Grid item {...(location === "/checkout" ? { xs: 12 } : middleGridSizes)} className={classes.middleGrid}>
          {props.middle}
        </Grid>
        {!props.rightBar ? null : (
          <Grid
            item
            className={`${location === "/category"
              ? classes.rightBarGridCategory
              : classes.rightBarGrid
              }`}
          >
            {props.rightBar}
          </Grid>
        )}
      </Grid>
      {props.bottomNav}
    </Container>
  );
};

export default GridLayout;
