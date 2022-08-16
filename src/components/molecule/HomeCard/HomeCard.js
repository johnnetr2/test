import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import image70 from '../../../assets/Imgs/image70.png'

const HomeCard = (props) => {
  const data = props?.item;
  const navigate = useNavigate();
  console.log('proviuos dataaaaaaaaaaa', props.previousRecord)
  let previosData = props?.data?.find(obj => obj._id == props?.item._id)
  console.log(previosData, 'one object')
  return (
    <Box
      sx={{
        height: "20%",
        maxWidth: "41rem",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #e1e1e1",
        boxShadow: "0px 5px 10px #f2f2f2",
        padding: 3,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 1,
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
        },
      }}
      onClick={() =>
        navigate("/category", {
          state: {
            item: data,
          },
        })
      }
    >
      <Box sx={{ width: "60%" }}>
        <Typography variant="h5">{data.title}</Typography>
        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
          {data?.information}
        </Typography>
        <Box>
          <ProgressBar average={props?.previousRecord ? ((props?.previousRecord.CorrectQuestion / props?.previousRecord.TotalQuestion)*100) : 0} />
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
        <Typography variant="h4" style={{ paddingRight: ".75rem" }}>
          {props?.previousRecord?.AttemptedQuestion >= 20 ? ((props?.previousRecord?.CorrectQuestion / props?.previousRecord?.TotalQuestion)*2).toFixed(1) : '-'}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '3.5rem'
          }}
        >
          {props?.previousRecord?.AttemptedQuestion < 20 && <img src={image70} style={{ display: 'flex', height: '0.5rem', width: '0.5rem', alignSelf: 'flex-end' }} />}
          <Typography
            variant="body1"
            style={{
              fontSize: ".75rem",
              marginTop: ".75rem",
            }}
          >
            Prognos
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default HomeCard;
