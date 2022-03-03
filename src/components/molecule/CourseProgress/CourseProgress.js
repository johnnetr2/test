import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#6FCF97",
    },
  },
}));

const CourseProgress = (props) => {
  const classes = useStyles();

  
  return (
    <Box
    sx={{
      height: "20%",
      display: "flex",
      justifyContent:'center',
      alignItems:'center',
      border: "1px solid #dddddd",
      boxShadow: "1px 1px 8px #dfdfdf",
      borderRadius: 2,
      padding: "2rem",
    }}
  >
    <Box>
    <LinearProgress
    className={classes.root}
    sx={{
      height: "1rem",
      borderRadius: "5rem",
      backgroundColor: "#e1e1e1",
    }}
    variant="determinate"
    value={50}
  />
    </Box>
  </Box>
  );
};

export default CourseProgress;
