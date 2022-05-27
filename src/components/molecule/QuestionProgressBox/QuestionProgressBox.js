import React from "react";
import { Typography, Box, Container } from "@mui/material";

const QuestionProgressBox = () => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        border: "1px solid #dddddd",
        boxShadow: "1px 1px 8px #dfdfdf",
        borderRadius: 2,
        padding: ".5rem 2rem",
      }}
    >
      <Box
        sx={{
          padding: ".75rem 1rem",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            style={{
              textTransform: "Uppercase",
              textAlign: "center",
              fontSize: "0.5rem",
              minHeight: "1.6rem",
            }}
          >
            Gör minst 30 frågor för att få prognos
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" style={{ marginRight: "0.5rem" }}>
            10
          </Typography>
          <Typography variant="body2">Prognos</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default QuestionProgressBox;
