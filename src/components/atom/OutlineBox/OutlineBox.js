import React from "react";
import Box from "@mui/material/Box";

const OutlineBox = (props) => {
  return (
    <div onClick={() => props.onChangeCheck(props.title)}>
      <Box
        sx={{
          width: props.size === "large" ? "10rem" : "4rem",
          height: "4rem",
          backgroundColor: props.checked ? "#0a1596" : "#fff",
          boxShadow: "1px 1px 8px #dfdfdf",
          borderRadius: ".25rem",
          marginLeft: ".25rem",
          marginRight: ".25rem",
          border: "1px solid #e1e1e1",
          display: "flex",
          flexWrap: "wrap",
          color: props.checked ? "#fff" : "#555555",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            background: props.checked ? "#0b158b" : "#f4f4f4",
          },
        }}
      >
        {props.title}
      </Box>
    </div>
  );
};

export default OutlineBox;
