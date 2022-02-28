import React from "react";
import { Typography, Box } from "@mui/material";
import Graph from "../../../assets/Graph/Graph.svg";

const DevelopmentGraph = () => {
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
        <img style={{width:'100%'}} src={Graph} alt="" />
      </Box>
    </Box>
  );
};

export default DevelopmentGraph;
