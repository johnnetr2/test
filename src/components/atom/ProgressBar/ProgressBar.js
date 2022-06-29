import React from "react";
import { LinearProgress, Box, Typography, Stack, Chip } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#6FCF97",
    },
  },
}));

const ProgressBar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          className={classes.root}
          sx={{
            height: 18,
            borderRadius: "5rem",
            backgroundColor: "#e1e1e1",
            color: "red",
          }}
          variant="determinate"
          value={50}
        />
        {/* <Chip
          label="Copy här"
          variant="outlined"
          className={classes.root}
          style={{
            // width: "100%",
            height: "1.5rem",
            borderRadius: "5rem",
            textTransform: "uppercase",
            backgroundColor: "#6FCF97",
            color: "#0A5B2D",
            border: "none",
          }}
        /> */}
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          50
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
