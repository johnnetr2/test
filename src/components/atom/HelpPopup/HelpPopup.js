import { Typography, Box } from "@mui/material";
import React from "react";
// import "./HelpPopup.css";

const HelpPopup = () => {
  return (
    <>
      <Box
        sx={{
          // content: "",
          position: "absolute",
          zIndex: 10,
          right: 20,
          top: 80,
          // left: "80%",
          background: "#252525",
          width: "2rem",
          height: "2rem",
          // width: "12px",
          // height: "12px",
          transform: "translateY(-50%) rotate(45deg)",
          // marginTop: "-23px",
          // borderTeft: "1px solid #E1E1E1",
          // borderTop: "1px solid #E1E1E1",
          // zIndex: 5,
        }}
      ></Box>
      <Box
        //   sx={{ width: "50%" }}
        sx={{
          backgroundColor: "#252525",
          padding: "2rem 3rem",
          color: "#fff",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          position: "absolute",
          top: 70,
          right: 0,
        }}
      >
      <Box>
        <Typography variant="h5">Välkommen till övningsläget!</Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          style={{
            lineHeight: "1.5rem",
            marginTop: "1rem",
            fontSize: "0.75rem",
          }}
        >
        • Du kan se vilken fråga du är på uppe till vänster.
        </Typography>
        <Typography
          variant="body1"
          style={{
            lineHeight: "1.5rem",

            fontSize: "0.75rem",
          }}
        >
        • Uppe till höger visas tid kvar om du valt att köra på tid.
        </Typography>
        <Typography
          variant="body1"
          style={{
            lineHeight: "1.5rem",

            fontSize: "0.75rem",
          }}
        >
        • Vill du avbryta? Klicka då på pilen längst uppe till vänster.
        </Typography>

      </Box>
      </Box>
    </>
  );
};

export default HelpPopup;
