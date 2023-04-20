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

  const c = `Vi löser denna med uträkning. För att kunna addera talen i täljaren behöver vi förlänga så att vi får samma nämnare. Det som i fetstil är våra förlängningar

  $$ 
  \begin{aligned} 
  \frac{3}{4}+\frac{4}{3} &=\boldsymbol{{\frac{3}{3}}}\cdot\frac{3}{4}+\boldsymbol{\frac{4}{4}}\cdot\frac{4}{3} \\ \\
  &=\frac{9}{12}+\frac{16}{12} \\ \\ &= \frac{25}{12}
  \end{aligned} 
  $$ 
  
  Talet i täljaren är alltså $\frac{25}{12}$, och hela divisionen ser ut på följande vis $$ \begin{aligned} \frac{\frac{25}{12}}{\frac{12}{5}}\end{aligned} $$ Det påminns om att division med ett bråktal är samma sak som multiplikation med bråktalets *invers*. Vi får således att $$ \begin{aligned} \frac{\frac{25}{12}}{\frac{12}{5}} &=\frac{25}{12}\cdot\frac{5}{12} \\ \\ &=\frac{125}{144}\end{aligned} $$`
  

  return (
    <>
      <Typography
        variant="subtitle1"
        style={{
          fontSize: ".7rem",
          fontWeight: "500",
        }}
      >
        {numberOfQuestions && numberOfQuestions + " uppgifter:"}
      </Typography>
      <Typography variant="h6" component="h6">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className={description?.includes("hp-appen.s3.eu-north-1.amazonaws.com") ? "questionImage" : ""}
        style={{ fontSize: ".875rem", fontWeight: "400", width: image ? "100%" : "auto" }}
      >
        <MarkLatex content={c} />
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
