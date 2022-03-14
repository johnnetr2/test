import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";

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
      border: "1px solid #dddddd",
      boxShadow: "1px 1px 8px #dfdfdf",
      borderRadius: 2,
      padding: "2rem",
    }}
  >
    <Box>
      <ProgressBar/>
    </Box>
  </Box>
  );
};

export default CourseProgress;
