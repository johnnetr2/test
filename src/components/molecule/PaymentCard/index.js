import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { appColors } from "../../service/commonService";
import { useNavigate } from "react-router-dom";

const PaymentCard = (props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/checkout");
  };

  const isSmallScreen = useMediaQuery("(max-width: 1380px)");

  return (
    <Box
      onClick={onClick}
      style={{
        margin: `${props.isInTrial ? "50px" : "0px"}  auto`,
        backgroundColor: appColors.blueColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "440px",
        width: "100%",
        height: "193px",
        padding: "23px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      <Typography
        variant="body2"
        style={{
          display: "flex",
          textAlign: "center",
          color: appColors.whiteColor,
          fontStyle: "normal",
          fontSize: "20px",
          lineHeight: "38px",
          padding: isSmallScreen ? "0px 0px 0px 0px" : "0px 10px 0px 10px",
        }}
      >
        {props.title}
      </Typography>
      <Button
        disableRipple={true}
        autoFocus
        onClick={onClick}
        style={{
          backgroundColor: appColors.whiteColor,
          color: appColors.blueColor,
          textTransform: "capitalize",
          fontWeight: "regular",
          padding: ".60rem 3rem",
          marginBottom: "1.5rem",
          marginTop: "1.5rem",
          width: "168px",
          height: "37.93px",
        }}
      >
        {"Läs mer"}
      </Button>
    </Box>
  );
};

export default PaymentCard;
