import { Box, Typography } from "@material-ui/core";

import LeftArrow from "../../../assets/Icons/LeftArrow.svg";
import React from "react";
import RightArrow from "../../../assets/Icons/RightArrow.svg";
import { useNavigate } from "react-router-dom";

const ResultFooter = (props) => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", maxWidth: 615 }}>
      <Box
        padding={1}
        sx={{
          width: "100%",
          maxWidth: 615,
          display: "flex",
          justifyContent: "space-between",
          marginTop:'.75rem',
          marginBottom:'1.5rem'
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            props.questionIndex > 0 && props.onLeftClick();
          }}
        >
          {" "}
          <img src={LeftArrow} alt="" />{" "}
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              marginLeft: "0.5rem",
            }}
          >
            Föregående
          </Typography>
        </Box>
        <Box
          onClick={() => {
            props.onResultHandler();
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Resultatsida
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            props.questionIndex < props.questionLength - 1 &&
              props.onRightClick();
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              marginRight: "0.5rem",
            }}
          >
            Nästa
          </Typography>
          <img src={RightArrow} alt="" />
        </Box>
      </Box>
    </div>
  );
};

export default ResultFooter;
