import React from "react";
import { Box, Typography} from "@mui/material";

const ProgressBar = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: ".5rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "1.25rem",
          mr: 1,
          backgroundColor: "rgba(155, 166, 250, 0.25)",
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
        <Box
          sx={{
            width: (props.average < 2) ? (props.average + 2 + "%") : props.average + "%",
            height: "1.25rem",
            borderRadius: "100px 0 0 100px",
            backgroundColor: (props.average < 0.001) ? null : "#6FCF97",
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
                position: "absolute",
                marginTop: 3,
              }}
            >
              GJORDA UPPGIFTER
            </Typography>
          )}
        </Box>
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
