import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

const HomeCard = (props) => {
  const data = props?.item;
  const previousRecord = props?.previousRecord;
  const navigate = useNavigate();
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
        cursor: "pointer",
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
          <ProgressBar average={previousRecord && previousRecord} />
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
          {props.prognos}
        </Typography>
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
  );
};

export default HomeCard;
