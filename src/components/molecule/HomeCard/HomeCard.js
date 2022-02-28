import React from "react";
import { Typography, Box } from "@mui/material";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";

const HomeCard = (props) => {
  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #dddddd",
        boxShadow: "1px 1px 8px #dfdfdf",
        padding: 3,
        marginTop: 2,
        borderRadius: 2,
      }}
    >
      <Box sx={{ width: "60%" }}>
        <Typography variant="h5">XYZ</Typography>
        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
          Prövar din förmåga att göra kvantitativa jämförelser inom aritmetik,
          algebra, geometri, funktionslära och statistik.s
        </Typography>
        <Box>
          <ProgressBar />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
        }}
      >
        <Typography variant="h4" mr={1}>
          0.0
        </Typography>
        <Typography variant="body1" sx={{ fontSize: ".75rem" }}>
          Prognos
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeCard;
