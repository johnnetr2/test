import React from "react";
import { Typography, Box, Container } from "@mui/material";

const QuestionProgressBox = (props) => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      style={{
        border: "1px solid #dddddd",
        boxShadow: "0px 5px 10px #f2f2f2",
        borderRadius: 5,
        padding: ".5rem 0",
        height: "6.2rem",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          style={{
            textTransform: "Uppercase",
            textAlign: "center",
            fontSize: "0.5rem",
            position: "absolute",
            top: 5,
            right: 0,
            left: 0,
          }}
        >
          {!props.showPrognos && "Gör minst 20 frågor per kategori"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: !props.showPrognos ? "center" : "flex-end",
        }}
      >
        <Typography
          variant="h3"
          style={{ marginRight: "0.5rem", fontSize: "2.5rem" }}
        >
          {!props.showPrognos ? "-" : props.totalPrognos}
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontSize: "0.7rem",
            color: "#505050",
            marginBottom: !props.showPrognos ? "0rem" : "0.2rem",
            marginTop: !props.showPrognos ? "0.2rem" : 0,
          }}
        >
          Prognos
        </Typography>
      </Box>
    </Container>
  );
};

export default QuestionProgressBox;
