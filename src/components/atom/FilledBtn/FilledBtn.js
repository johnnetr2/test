import React from "react";
import Button from "@mui/material/Button";

const Filled_btn = ({ title, onClick, disabled }) => {
  return (
    <div className="filled-btn-1">
      <Button
        variant="contained"
        onClick={onClick}
        disabled={disabled}
        sx={{
          backgroundColor: "#0A1596",
          color: "#fff",
          textTransform: "initial",
          "&:hover": {
            backgroundColor: "#0A1596",
            opacity: [1, 1, 0.9],
          },
          width: "100%",
          textDecoration: "none",
        }}
      >
        {title}
      </Button>
    </div>
  );
};

export default Filled_btn;
