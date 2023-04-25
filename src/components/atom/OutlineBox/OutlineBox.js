import React from "react";
import Box from "@mui/material/Box";
import { appColors } from "../../../utils/commonService";

const OutlineBox = (props) => {
  return (
    <div onClick={() => props.onChangeCheck(props.title)}>
      <Box
        sx={{
          width: props.size === "large" ? "10rem" : "4rem",
          height: "4rem",
          backgroundColor: props.checked ? appColors.blueColor : appColors.whiteColor,
          boxShadow: "1px 1px 8px #dfdfdf",
          borderRadius: ".25rem",
          marginLeft: ".25rem",
          marginRight: ".25rem",
          border: "1px solid #e1e1e1",
          display: "flex",
          flexWrap: "wrap",
          color: props.checked ? appColors.whiteColor : "#555555",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            background: props.checked ? appColors.hoverBlue : "#f4f4f4",
          },
        }}
      >
        {props.title}
      </Box>
    </div>
  );
};

export default OutlineBox;
