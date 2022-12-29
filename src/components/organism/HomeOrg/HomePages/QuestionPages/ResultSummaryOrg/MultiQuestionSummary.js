import {
  Box,
  Container,
  FormControlLabel,
  Radio,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Correct from "../../../../../../assets/Imgs/correct.png";
import FeedbackButtons from "../../../../../atom/FeedbackButtons/FeedbackButtons";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import QuestionStatement from "../../../../../molecule/QuestionStatement/QuestionStatement";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import WarningIcon from "../../../../../../assets/Icons/WarningIcon.svg";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import { makeStyles } from "@material-ui/core/styles";
import AnswerStatement from "../../../../../molecule/AnswerStatement/AnswerStatement";

const useStyles = makeStyles((theme) => ({
  unAttemptedQuestion: {
    padding: "2rem 4rem",
    marginTop: "1rem",
    border: "1px solid #e1e1e1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
}));

function MultiQuestionSummary(props) {
  const classes = useStyles();
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
    } else if (
      question.answer &&
      curentOption._id === question.answer.option &&
      question?.optionId
    ) {
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
    } else if (question.answer && curentOption._id !== question?.optionId) {
      return (
        <Radio
          disabled
          checked={false}
          style={{ marginRight: "0.5rem", color: "#E1E1E1" }}
        />
      );
    }
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
      {!question?.optionId && question?.answer && (
        <Container maxWidth="sm" className={classes.unAttemptedQuestion}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={WarningIcon}
              alt="warning-icon"
              style={{ marginRight: "1rem" }}
            />
            <Typography
              variant="body1"
              style={{ fontSize: ".75rem", fontWeight: 500, margin: 0 }}
            >
              Tiden gick ut och du hann inte svara på denna fråga.
            </Typography>
          </Box>
        </Container>
      )}
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
        <QuestionStatement
          numberOfQuestions={props.selectedIndex + 1}
          title={question?.multipartQuestion.title}
          description={question?.multipartQuestion.description}
          image={question?.multipartQuestion.image}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: '600px'
        }}>
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
                onClick={(e) => { }}
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
      </Box>
      {question?.optionId && (
        <Box
          paddingX={4}
          mt={3}
          sx={{
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: 600,
            border: "1px solid #e1e1e1",
          }}
        >
          {question.answer && (
            <AnswerStatement
              answer={question?.answer?.answer}
              image={question?.answer?.image}
            />
          )}
          <FeedbackButtons />
        </Box>
      )}

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
