import React from "react";
import Button from "@mui/material/Button";

const Filled_btn = ({ title, onClick, disabled }) => {
  return (
    <div className="filled-btn-1">
      <Button
        // variant="contained"
        onClick={onClick}
        disabled={disabled}
        sx={{
          backgroundColor: "#0A1596",
          borderRadius: "8px",
          color: '#FFFFFF',
          textTransform: "initial",
          "&:hover": {
            backgroundColor: "#0A1596",
            opacity: [1, 1, 0.9],
          },
          fontWeight: 400,
          width: "100%",
          flex: "none",
          textDecoration: "none",
          fontStyle: "normal",
          fontFamily: "Roboto",
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
