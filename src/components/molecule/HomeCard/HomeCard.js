import React from "react";
import { Typography, Box } from "@mui/material";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

const HomeCard = (props) => {

  const data = props?.item;
  const navigate = useNavigate()
  console.log(data, 'this is dat')

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
        cursor: 'pointer'
      }}
      onClick={() => navigate('/category', {
        state: {
         item: data
        }
      })} 
    >
      <Box sx={{ width: "60%"}}>
        <Typography variant="h5">{data?.title}</Typography>
        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>{data?.information}</Typography>
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
