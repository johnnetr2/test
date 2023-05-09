import { Button } from "@mui/material";
import React from "react";

const RulerButton = (props) => {
  return (
    <div className="exercise-btn-1">
      <Button
        variant={!props.isRulerOppened ? "contained" : "outlined"}
        onClick={props.onClick}
        xs={12}
        size="medium"
        style={{
          backgroundColor: !props.isRulerOppened && "#5263EB",
          color: !props.isRulerOppened ? "#FFFFFF" : "red",
          borderColor: props.isRulerOppened && "red",
          borderRadius: ".6em",
          padding: ".5em 3em",
          textTransform: "none",
          fontWeight: "400",
        }}
      >
        {!props.isRulerOppened ? "Visa linjal" : "Dölj linjal"}
      </Button>
    </div>
  );
};

export default RulerButton;
