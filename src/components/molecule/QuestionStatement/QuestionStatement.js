import { Box, Typography } from "@mui/material";

import MarkLatex from "../../atom/Marklatex/MarkLatex";
import React from "react";

const QuestionStatement = ({
  numberOfQuestions,
  title,
  description,
  image,
  indications,
  type,
}) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        style={{
          fontSize: ".7rem",
          fontWeight: "500",
        }}
      >
        {numberOfQuestions && `${numberOfQuestions} ${numberOfQuestions === 1 ? 'uppgift' : 'uppgifter'}:`}
      </Typography>
      <Typography variant="h6" component="h6">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className={description?.includes("hp-appen.s3.eu-north-1.amazonaws.com") ? "questionImage" : ""}
        style={{ fontSize: ".875rem", fontWeight: "400", width: image ? "100%" : "auto" }}
      >
        <MarkLatex content={description} />
      </Typography>
      {image && (
        <Box>
          <img src={image} style={{ width: "100%" }} alt="" />
        </Box>
      )}

      <Box
        sx={{
          marginTop: image && "2rem",
        }}
      >
        {indications && indications[0] && (
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: ".7rem", fontSize: ".875rem" }}>
              {type === "KVA" ? (
                <Typography
                  variant="p"
                  sx={{ fontStyle: "italic", fontSize: ".875rem" }}
                >
                  Kvantitet I:{" "}
                </Typography>
              ) : (
                "(1)"
              )}
            </Box>
            <Typography
              variant="body1"
              component="body1"
              style={{
                fontSize: ".875rem",
                display: "flex",
                // maxHeight: "1.25rem",
              }}
            >
              <MarkLatex content={indications[0]} />
            </Typography>
          </Box>
        )}
        {indications && indications[1] && (
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: ".7rem", fontSize: ".875rem" }}>
              {type === "KVA" ? (
                <Typography
                  variant="p"
                  sx={{ fontStyle: "italic", fontSize: ".875rem" }}
                >
                  Kvantitet II:{" "}
                </Typography>
              ) : (
                "(2)"
              )}
            </Box>
            <Typography
              variant="body1"
              component="body1"
              style={{
                fontSize: ".875rem",
                // maxHeight: "1.25rem",
                display: "flex",
              }}
            >
              <MarkLatex content={indications[1]} />
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default QuestionStatement;
