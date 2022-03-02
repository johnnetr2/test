import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Thumb from "../../../assets/Imgs/newthumb.png";

const LearnMoreCard = () => {
  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #dddddd",
        boxShadow: "1px 1px 8px #dfdfdf",
        borderRadius: 2,
        padding: "2rem",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection:'column' }}
      >
        <Typography variant="h6">
          Lär dig ännu mer!
        </Typography>
        <Typography variant="body2">
          Lås upp premiumfunktioner endast för 199 sek per sektion
        </Typography>
        <Button variant='contained' style={{backgroundColor:'#0A1596', color:'#fff', marginTop:'1rem', marginBottom:'1rem'}}>Lås upp kategorier</Button>
      </Box>
      <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
            <img src={Thumb} alt="" />
        </Box>
    </Box>
  );
};

export default LearnMoreCard;
