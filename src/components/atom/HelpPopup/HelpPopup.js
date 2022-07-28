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
          width: "35%",
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
        <Typography variant="h5">Välkommen till provpassvyn!</Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            lineHeight: "1.5rem",
            marginTop: "1rem",
            fontSize: "0.75rem",
          }}
        >
          Du kan fritt gå emellan uppgifter genom att trycka på nästa och
          föregående längst ner. Facit visas efter att hela provet är inlämnat.
          Trycker du på överblick får du se alla provpassets uppgifter.Om du
          avbryter genom att klicka på pilen längst uppe till vänster sparas
          inte provpasset, men du kan göra om det senare.
        </Typography>
      </Box>
    </>
  );
};

export default HelpPopup;