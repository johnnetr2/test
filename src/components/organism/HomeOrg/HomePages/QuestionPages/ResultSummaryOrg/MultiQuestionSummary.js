import {
  Box,
  Container,
  FormControlLabel,
  Radio,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import BarChart from "../../../../../../assets/Icons/BarChart.svg";
import Clock from "../../../../../../assets/Icons/Clock.svg";
import Correct from "../../../../../../assets/Imgs/correct.png";
import Decrement from "../../../../../../assets/Icons/Decrement.svg";
import Increment from "../../../../../../assets/Icons/Increment.svg";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import Timer from "../../../../../atom/Timer/timer";
import Wrong from "../../../../../../assets/Imgs/wrong.png";

function MultiQuestionSummary(props) {
  const [question, setQuestion] = useState();

  useEffect(() => {
    setQuestion(props.question);
  }, []);

  const Options = (question, curentOption, optionIndex) => {
    if (question.answer && question.optionId == curentOption._id) {
      return (
        <img
          src={Correct}
          style={{
            marginRight: "0.5rem",
            marginLeft: ".5rem",
            marginBottom: ".6rem",
          }}
        />
      );
    } else if (question.answer && curentOption._id === question.answer.option) {
      return (
        <img
          src={Wrong}
          style={{
            marginRight: "0.5rem",
            marginLeft: ".5rem",
            marginBottom: ".6rem",
          }}
        />
      );
    }
    // else {
    //     return <Radio color="primary" checked={false} style={{ marginBottom: '.5rem' }} />;
    // }
    if (optionIndex == question.selectedIndex) {
      return (
        <Radio
          color="primary"
          checked={true}
          style={{ marginBottom: ".5rem" }}
        />
      );
    } else {
      return (
        <Radio
          color="primary"
          checked={false}
          style={{ marginBottom: ".5rem" }}
        />
      );
    }
  };

  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: 0,
        backgroundColor: "#f9f9f9",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        mt={5}
        paddingX={6}
        paddingY={2}
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: 600,
          height: 373,
          border: "1px solid #e1e1e1",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: 10,
          },
        }}
      >
        <Typography
          variant="subtitle1"
          style={{
            fontSize: ".7rem",
            fontWeight: "500",
          }}
        >
          {props.selectedIndex + 1 + " uppgifter:"}
        </Typography>
        <Typography variant="h6" component="h6">
          {question?.multipartQuestion.title}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ fontSize: ".7rem", fontWeight: "500" }}
        >
          <MarkLatex content={question?.multipartQuestion.description} />
        </Typography>
        {question?.multipartQuestion.image && (
          <Box>
            <img
              src={question?.multipartQuestion.image}
              style={{ width: "100%" }}
              alt=""
            />
          </Box>
        )}
      </Box>

      <Box>
        <Box
          paddingX={4}
          mt={5}
          sx={{
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: 600,
            border: "1px solid #e1e1e1",
          }}
        >
          {/* <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 10,
            }}
          ></Box> */}
          <Typography
            variant="h6"
            component="h6"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginTop: 20,
              paddingBottom: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MarkLatex content={question?.questionStatement} />

            {/* {question?.images[0] && (
              <img src={question.images[0]} style={{ marginBottom: ".4rem" }} />
            )} */}
          </Typography>
        </Box>
        {question?.options[0].options.map((curentOption, optionIndex) => {
          return (
            <Box
              padding={1}
              sx={{
                backgroundColor: "#fff",
                width: "100%",
                maxWidth: 600,
                border: "1px solid #e1e1e1",
              }}
            >
              <FormControlLabel
                onClick={(e) => {}}
                value={curentOption._id}
                style={{ marginLeft: ".5rem", marginTop: ".3rem" }}
                control={Options(question, curentOption, optionIndex)}
                label={
                  <MarkLatex
                    content={curentOption.value.replace("\f", "\\f")}
                  />
                }
              />
            </Box>
          );
        })}
        {/* {Button(question) } */}
      </Box>
      <Box
        paddingX={4}
        mt={3}
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: 600,
          height: 220,
          border: "1px solid #e1e1e1",
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          //   '&::-webkit-scrollbar': { width : 0 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="h5"
              component="h5"
              style={{
                fontSize: ".75rem",
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              Förklaring:
            </Typography>
            <Typography
              variant="body1"
              component="div"
              style={{
                fontSize: ".75rem",
                fontWeight: "500",
                marginTop: 10,
                width: "100%",
                maxWidth: question?.answer.image ? "auto" : 540,
              }}
            >
              <MarkLatex content={question?.answer.answer} />
            </Typography>
          </Box>
          <Box
            mt={2}
            style={{
              //   marginLeft: "15rem",
              marginTop: "2rem",
            }}
          >
            {question?.answer.image && (
              <img
                style={{ height: 110 }}
                src={question?.answer.image}
                alt=""
              />
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: 60,
          }}
        >
          <Typography
            variant="body1"
            component="body1"
            style={{
              fontSize: ".75rem",
              fontWeight: "500",
              marginTop: 10,
              //   width: "32rem",
            }}
          >
            Berätta för oss om du var nöjd med lösningen
          </Typography>
          <Box ml={1} mr={0.5}>
            <img src={Increment} alt="" />
          </Box>
          <Box mr={1}>
            <img src={Decrement} alt="" />
          </Box>
        </Box>
      </Box>

      {/* <ResultFooter/> */}
      <ResultFooter
        questionLength={props.quiz.length}
        questionIndex={props.selectedIndex}
        onResultHandler={() => props.onResultHandler()}
        onLeftClick={() => {
          props.onLeftClick();
        }}
        onRightClick={() => {
          props.onRightClick();
        }}
      />
    </Container>
  );
}

export default MultiQuestionSummary;
