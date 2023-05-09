import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Thumb from "../../../assets/Imgs/Thumb.png";

const LearnMoreCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #dddddd",
        boxShadow: "1px 1px 8px #dfdfdf",
        borderRadius: 2,
        padding: "1rem 0 1rem 1rem",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: 'column', width: '13rem' }}
      >
        <Typography variant="h6">
          Lär dig ännu mer!
        </Typography>
        <Typography variant="body2">
          Lås upp premiumfunktioner endast för 199 sek per sektion
        </Typography>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'flex-end ' }}>
        <img src={Thumb} alt="" style={{ maxWidth: '80%' }} />
      </Box>
    </Box>
  );
};

export default LearnMoreCard;
