import React, { useEffect } from "react";
import { LinearProgress, Box, Typography, Stack, Chip } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#6FCF97",
    },
  },
}));

const ProgressBar = (props) => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: ".5rem",
      }}
    >
      {/* <Box sx={{ width: "100%", mr: 1 }}>
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
        <Chip
          label="Copy här"
          variant="outlined"
          className={classes.root}
          style={{
            width: "100%",
            height: "1.25rem",
            borderRadius: "5rem",
            textTransform: "uppercase",
            backgroundColor: "#6FCF97",
            color: "#0A5B2D",
            border: "none",
          }}
        />
      </Box> */}
      <Box
        sx={{
          width: "100%",
          height: "1.25rem",
          mr: 1,
          backgroundColor: "#e1e1e1",
          borderRadius: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.average < 30 && (
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: "0.65rem",
                color: "#505050",
                position: "absolute",
                marginTop: 3,
              }}
            >
              GJORDA UPPGIFTER
            </Typography>
          )}
        </Box>
        {/* <Box
          sx={{
            width: props.average + "%",
            height: "1.25rem",
            borderRadius: "100px   0 0 100px",
            backgroundColor: "#6FCF97",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.average > 30 && (
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: "0.65rem",
                color: "#0A5B2D",
              }}
            >
              GJORDA UPPGIFTER
            </Typography>
          )}
        </Box> */}
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.average ? props.average : 0
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
