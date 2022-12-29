import React from "react";
import { Box, Typography } from "@mui/material";
import Increment from "../../../assets/Icons/Increment.svg";
import Decrement from "../../../assets/Icons/Decrement.svg";

const FeedbackButtons = ({ onClickPlus, onClickMinus }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 60,
      }}
    >
      <Typography
        variant="body1"
        component="body1"
        style={{
          fontSize: ".75rem",
          fontWeight: "500",
        }}
      >
        Berätta för oss om du var nöjd med lösningen
      </Typography>
      <Box ml={1} mr={0.5}>
        <img
          src={Increment}
          style={{ cursor: "pointer" }}
          onClick={onClickPlus}
          alt=""
        />
      </Box>
      <Box mr={1}>
        <img
          src={Decrement}
          style={{ cursor: "pointer" }}
          onClick={onClickMinus}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default FeedbackButtons;
