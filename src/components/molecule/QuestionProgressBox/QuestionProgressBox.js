import React from "react";
import { Typography, Box, Container } from "@mui/material";

const QuestionProgressBox = (props) => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        border: "1px solid #dddddd",
        boxShadow: "0px 5px 10px #f2f2f2",
        borderRadius: 1,
        padding: ".5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "1.6rem",
        }}
      >
        <Typography
          variant="body2"
          style={{
            textTransform: "Uppercase",
            textAlign: "center",
            fontSize: "0.5rem",
            width: "80%",
          }}
        >
          Gör minst 30 frågor för att få prognos
        </Typography>
      </Box>
      <Box
        sx={{
          padding: ".25rem 1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="h3"
            style={{ marginRight: "0.5rem", fontSize: "2.5rem" }}
          >
            {props.totalPrognos ? props.totalPrognos : "0:00"}
          </Typography>
          <Typography variant="body2" style={{ marginBottom: ".5rem" }}>
            Prognos
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default QuestionProgressBox;
