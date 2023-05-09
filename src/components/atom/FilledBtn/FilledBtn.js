import React from "react";
import Button from "@mui/material/Button";
import { appColors } from "../../../utils/commonService";

const Filled_btn = ({ title, onClick, disabled, type }) => {
  return (
    <div className="filled-btn-1">
      <Button
        // variant="contained"
        onClick={onClick}
        type={type}
        disabled={disabled}
        sx={{
          backgroundColor: appColors.blueColor,
          borderRadius: "8px",
          color: appColors.whiteColor,
          textTransform: "initial",
          width: "100%",
          textDecoration: "none",
          fontWeight: 400,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: appColors.hoverBlue,
            opacity: [1, 1, 0.9],
          },
          width: "100%",
          flex: "none",
          fontStyle: "normal",
          order: 0,
          flexGrow: 0,
        }}
      >
        {title}
      </Button>
    </div>
  );
};

export default Filled_btn;
