import React from "react";
import Ellipsis from "../../../assets/Icons/Ellipsis.svg";
import { Typography, Box } from "@mui/material";

const GoalBox = () => {
  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #dddddd",
        boxShadow: "1px 1px 8px #dfdfdf",
        borderRadius: 2,
        padding: "3rem 3rem 3rem 3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={Ellipsis} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" style={{ marginRight: "0.5rem" }}>
            10
          </Typography>
          <Typography variant="body2">Mål</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GoalBox;
