import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import FeedbackButtons from "../../../../../atom/FeedbackButtons/FeedbackButtons";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import QuestionStatement from "../../../../../molecule/QuestionStatement/QuestionStatement";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import WarningIcon from "../../../../../../assets/Icons/WarningIcon.svg";
import { makeStyles } from "@material-ui/core/styles";
import AnswerStatement from "../../../../../molecule/AnswerStatement/AnswerStatement";
import { MixpanelTracking } from "../../../../../../tools/mixpanel/Mixpanel";
import FeedbackCard from "../../../../../molecule/FeedbackCard/FeedbackCard";
import OptionsComponent from "../../../../../molecule/OptionsComponents";
import ArrowSalt from "../../../../../../assets/Icons/ArrowSalt.svg";
import { Close } from "@mui/icons-material/";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  const [extendedView, setExtendView] = useState(false);

  const openExtended = () => {
    setExtendView(true);
  };
  const closeExtended = () => {
    setExtendView(false);
  };

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
        maxWidth='md'
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
          <Container maxWidth='sm' className={classes.unAttemptedQuestion}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={WarningIcon}
                alt='warning-icon'
                style={{ marginRight: "1rem" }}
              />
              <Typography
                variant='body1'
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
            position: "relative",
          }}
        >
          <img
            onClick={openExtended}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              cursor: "pointer",
            }}
            src={ArrowSalt}
          />
          <QuestionStatement
            numberOfQuestions={props.selectedIndex + 1}
            title={question?.multipartQuestion.title}
            description={question?.multipartQuestion.description}
            image={question?.multipartQuestion.image}
          />

          <Dialog
            open={extendedView}
            onClose={closeExtended}
            maxWidth={"lg"}
            fullWidth={true}
          >
            <DialogTitle>
              <Typography
                variant='subtitle1'
                style={{
                  textTransform: "uppercase",
                  fontSize: ".85rem",
                  maxWidth: "90%",
                  margin:
                    question?.multipartQuestion.description.length < 2000
                      ? "auto"
                      : "0",
                }}
              >
                {props.selectedIndex + 1 + " uppgifter"}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Typography
                variant='subtitle1'
                style={{
                  fontSize: ".85rem",
                  maxWidth: "90%",
                  margin: "auto",
                  position: "relative",
                }}
                className={
                  question?.multipartQuestion.description.includes(
                    "hp-appen.s3.eu-north-1.amazonaws.com"
                  )
                    ? "questionImage"
                    : ""
                }
              >
                <Typography variant='h1' style={{ fontSize: "28px" }}>
                  {question?.multipartQuestion.title}
                </Typography>
                <MarkLatex content={question?.multipartQuestion.description} />
              </Typography>
            </DialogContent>
            <Close
              onClick={() => {
                setExtendView(false);
              }}
              style={{
                position: "absolute",
                top: "20",
                right: "20",
                cursor: "pointer",
              }}
            />
          </Dialog>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
          }}
        >
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
              variant='h6'
              component='h6'
              className={
                question?.questionStatement?.includes(
                  "hp-appen.s3.eu-north-1.amazonaws.com"
                )
                  ? "questionImage"
                  : ""
              }
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
          <OptionsComponent question={props.question} resultComponent={true} />
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
            <FeedbackButtons
              onClickPlus={PlusPoint}
              onClickMinus={MinusPoint}
            />
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
