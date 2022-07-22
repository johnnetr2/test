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
          flexDirection: 'column'
        }}
      >
        <Typography style={{
          textTransform: "Uppercase",
          textAlign: "center",
          fontSize: "0.5rem",
        }}
        >{!props.showPrognos && 'Gör minst 20 frågor per kategori'}</Typography>
        <Typography
          variant="body2"
          style={{
            textTransform: "Uppercase",
            textAlign: "center",
            fontSize: "0.5rem",
            width: "80%",
          }}
        >
          {props.totalPrognos ? null : "Gör minst 30 frågor för att få prognos"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".25rem 1rem",
        }}
      >
        <Typography
          variant="h3"
          style={{ marginRight: "0.5rem", fontSize: "2.5rem", }}
        >
          {props.showPrognos ? props.totalPrognos : '-'}
        </Typography>
        <Typography variant="body2" style={{ fontSize: '0.7rem', color: '#505050', marginTop: '0.2rem' }}>
          Prognos
        </Typography>
      </Box>
    </Container>
  );
};

export default QuestionProgressBox;
