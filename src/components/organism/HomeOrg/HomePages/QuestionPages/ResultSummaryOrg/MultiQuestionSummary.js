import {
  Box,
  Container,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import FeedbackButtons from "../../../../../atom/FeedbackButtons/FeedbackButtons";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import QuestionStatement from "../../../../../molecule/QuestionStatement/QuestionStatement";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import WarningIcon from "../../../../../../assets/Icons/WarningIcon.svg";
import { makeStyles } from "@material-ui/core/styles";
import AnswerStatement from "../../../../../molecule/AnswerStatement/AnswerStatement";
import RadioButtonOptions from "../../../../../molecule/RadioButtonsOptions";
import { MixpanelTracking } from "../../../../../../tools/mixpanel/Mixpanel";
import FeedbackCard from "../../../../../molecule/FeedbackCard/FeedbackCard";


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
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [count, setCount] = useState();

  const PlusPoint = () => {
    setCount(1);
    MixpanelTracking.getInstance().feedbackButtonClicked(
      localStorage.email,
      props.sectionCategory.title,
      question.questionCategory,
      question._id,
      "positive"
    );
    setFeedbackPopup(true);
  };

  const MinusPoint = () => {
    setCount(0);
    MixpanelTracking.getInstance().feedbackButtonClicked(
      localStorage.email,
      props.sectionCategory.title,
      question.questionCategory,
      question._id,
      "negative"
    );
    setFeedbackPopup(true);
  };


  useEffect(() => {
    setQuestion(props.question);
  }, []);

  return (
    <>
      <FeedbackCard
        count={count}
        show={feedbackPopup}
        onClose={() => setFeedbackPopup(false)}
        questionId={question?._id}
      />
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
                  style={{
                    marginLeft: ".5rem", marginTop: ".3rem", color: question?.answer.option !== curentOption._id && question.optionId === curentOption._id ? "#EB5757" : question?.answer &&
                      question?.answer?.option === curentOption._id ? "#27AE60" : "#505050"
                  }}
                  control={RadioButtonOptions(curentOption, question, optionIndex)}
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
            <FeedbackButtons onClickPlus={PlusPoint} onClickMinus={MinusPoint} />

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
    </>

  );
}

export default MultiQuestionSummary;
