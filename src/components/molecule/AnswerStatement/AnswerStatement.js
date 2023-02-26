import React from "react";
import { Box, Typography } from "@mui/material";
import MarkLatex from "../../atom/Marklatex/MarkLatex";

const AnswerStatement = ({ answer, image }) => {
  //Frontend fix, maybe move to backend later? Trello ticket about the problem: https://trello.com/c/F7i6zYry
  const addLineBreaker = answer.replace(/\n\s*\n/g, "\n \n&nbsp;\n\n");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: image ? "auto" : 500,
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          style={{
            fontSize: "1rem",
            fontWeight: 500,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Förklaring:
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ fontSize: "0.875rem" }}
        >
          <div className="Explaination">
            {" "}
            <MarkLatex content={addLineBreaker} />
          </div>
        </Typography>
      </Box>
      {image && (
        <Box
          mt={2}
          style={{
            marginTop: "2rem",
          }}
        >
          <img style={{ height: 110 }} src={image} alt="" />
        </Box>
      )}
    </>
  );
};

export default AnswerStatement;
