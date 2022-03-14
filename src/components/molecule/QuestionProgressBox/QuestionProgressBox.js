import React from "react";
import { Typography, Box } from "@mui/material";

const QuestionProgressBox = () => {
  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #dddddd",
        boxShadow: "1px 1px 8px #dfdfdf",
        borderRadius: 2,
        padding: "3rem"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{ textTransform: "Uppercase", textAlign: "center" }}
          >
            {/* Gör minst 30 frågor för att få prognos */}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" style={{marginRight:'0.5rem'}}>10</Typography>
          <Typography variant="body2">Prognos</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionProgressBox;
