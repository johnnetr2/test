import React from "react";
import { Typography, Box } from "@mui/material";
import Graph2 from "../../../assets/Graph/Graph2.svg";

const LineGraph = () => {
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
        <img style={{width:'100%'}} src={Graph2} alt="" />
      </Box>
    </Box>
  );
};

export default LineGraph;
