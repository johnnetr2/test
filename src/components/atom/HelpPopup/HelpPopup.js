import { Typography, Box } from "@mui/material";
import React from "react";
// import "./HelpPopup.css";

const HelpPopup = () => {
  return (
    <Box
      //   sx={{ width: "50%" }}
      sx={{
        backgroundColor: "#252525",
        padding: "4rem 2rem",
        color: "#fff",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        position: "absolute",
        top: 80,
        right: 0,
      }}
    >
      <Typography variant="h4">Välkommen till provpassvyn!</Typography>
      <Typography
        variant="body1"
        style={{ textAlign: "center", lineHeight: "1.5rem", marginTop: "1rem" }}
      >
        Du kan fritt gå emellan uppgifter genom att trycka på nästa och
        föregående längst ner. Facit visas efter att hela provet är inlämnat.
        Trycker du på överblick får du se alla provpassets uppgifter.Om du
        avbryter genom att klicka på pilen längst uppe till vänster sparas inte
        provpasset, men du kan göra om det senare.
      </Typography>
    </Box>
  );
};

export default HelpPopup;
