import React from "react";
import { Typography, Box } from "@mui/material";
import Graph from "../../../assets/Graph/Graph.svg";
import Ellipsis from "../../../assets/Icons/Ellipsis.svg";

const ImpDatesCard = () => {

  const currentDate = new Date();
  const convertedDate = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #dddddd",
        boxShadow: "1px 1px 8px #dfdfdf",
        borderRadius: 2,
        padding: "2rem",
      }}
    >
        {/* <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
            <img src={Ellipsis} alt="" />
        </Box> */}
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant="h5" style={{marginRight:'0.5rem'}}>{convertedDate}</Typography>
          <Typography variant="body2">
            100 dagar till anmälan öppnar
          </Typography>
      </Box>
    </Box>
  );
};

export default ImpDatesCard;
