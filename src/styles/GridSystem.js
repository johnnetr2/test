import { makeStyles } from "@material-ui/core";

export const gridStyling = makeStyles((theme) => ({
  //Main is parent styling for left, middle and right grids.
  main: {
    minHeight: "100vh",
    [theme.breakpoints.up("1300")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("1280")]: {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  //leftBarGrid - a.k.a Navbar
  leftBarGrid: {
    maxWidth: "13rem",
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
  },

  //Below is for RightBarGrid
  rightBarGrid: {
    maxWidth: "38rem",
    backgroundColor: "#fafafa",
    [theme.breakpoints.down("1200")]: {
      display: "none",
    },
  },
  //Special size for RightBarGrid on category
  rightBarGridCategory: {
    width: "35rem",
    paddingRight: "1rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  //Below is for middleGrid
  middleGrid: {
    margin: "0 auto",
  },
}));

export const leftBarGridSizes = {
  xs: 2,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 2,
};

export const middleGridSizes = {
  xs: 12,
  sm: 10,
  lg: 7,
  xl: 7,
};
