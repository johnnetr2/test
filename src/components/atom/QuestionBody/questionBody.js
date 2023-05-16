import { Box, FormControlLabel, Container } from "@material-ui/core";
import React, { useState } from "react";
import FeedbackCard from "../../molecule/FeedbackCard/FeedbackCard";
import WarningIcon from "../../../assets/Icons/WarningIcon.svg";
import MarkLatex from "../Marklatex/MarkLatex";
import MultiQuestionSummary from "../../organism/HomeOrg/HomePages/QuestionPages/ResultSummaryOrg/MultiQuestionSummary";
import QuestionViewDTKOrg from "../../organism/HomeOrg/HomePages/QuestionPages/QuestionViewDtkOrg/QuestionViewDtkOrg";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import "../../../styles/QuestionBody.css";
import FeedbackButtons from "../FeedbackButtons/FeedbackButtons";
import { MixpanelTracking } from "../../../tools/mixpanel/Mixpanel";
import QuestionStatement from "../../molecule/QuestionStatement/QuestionStatement";
import AnswerStatement from "../../molecule/AnswerStatement/AnswerStatement";
import { appColors, optionsCharacters } from "../../../utils/commonService";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 30,
    padding: 0,
  },
  questionContainer: {
    padding: "4rem",
    marginTop: "1rem",
    border: "1px solid #e1e1e1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
      overflow: "scroll",
    },
  },
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

const QuestionBody = (props) => {
  const classes = useStyles();

  const [question, setQuestion] = useState(props?.question);
  const [count, setCount] = useState();
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const questionId = props.question._id;

  const updateQuiz = (value) => {
    let quiz = [...props.quiz];
    setQuestion(value);
    const index = quiz.findIndex((obj) => obj._id === value._id);
    quiz.splice(index, 1, value);
    props.updateQuiz(quiz);
  };

  const PlusPoint = () => {
    setCount(1);
    MixpanelTracking.getInstance().feedbackButtonClicked(
      localStorage.email,
      props.sectionCategory.title,
      question.questionCategory,
      question.questionId,
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
      question.questionId,
      "negative"
    );
    setFeedbackPopup(true);
  };

  const changeOptionsColor = (item) => {
    if (
      question.answer &&
      question.answer.option == item._id &&
      question.optionId
    ) {
      return "#27AE60";
    } else if (question.answer && item._id === question?.optionId) {
      return "#EB5757";
    } else if (question.answer && item._id !== question?.optionId) {
      return "#E1E1E1";
    } else {
      return "";
    }
  };

  if (props.question.type === "multiple") {
    return (
      <QuestionViewDTKOrg
        isTimeRestricted={props.isTimeRestricted}
        question={props.question}
        selectedOption={props.selectedOption}
        totalQuestions={props.totalQuestions}
        selectedIndex={props.selectedIndex}
        onRightClick={() => props.onRightClick()}
        onLeftClick={() => props.onLeftClick()}
        onResultHandler={() => props.onResultHandler()}
        callBackForTimer={(value) => props.setTimeLeft(value)}
        paragraphIndex={props.paragraphIndex}
        questionIndex={props.questionIndex}
        timeLeft={props.timeLeft}
        quizId={props.quizId}
        totalTime={props.totalTime}
        quiz={props.quiz}
        updateQuiz={(value) => updateQuiz(value)}
        changeIndex={() => props.changeIndex()}
        sectionCategory={props?.sectionCategory}
        nextQuestion={() => props.nextQuestion()}
        stopTimer={() => props.stopTime()}
        startTimer={() => props.startTime()}
        previosQuestion={() => props.previosQuestion()}
        PopupTimeEnd={props.PopupTimeEnd}
        updateCompleteQuiz={(quiz) => props.updateCompleteQuiz(quiz)}
      />
    );
  } else if (props.question.multipartQuestion) {
    return (
      <MultiQuestionSummary
        sectionCategory={props?.sectionCategory}
        question={props?.question}
        totalQuestions={props.totalQuestions}
        selectedIndex={props.selectedIndex}
        onRightClick={() => props.onRightClick()}
        questionIndex={props.questionIndex}
        quiz={props.quiz}
        onResultHandler={() => props.onResultHandler()}
        onLeftClick={() => props.onLeftClick()}
      />
    );
  } else {
    return (
      <Container
        maxWidth="md"
        disableGutters
        style={{
          height: "fit-content",
          backgroundColor: "#f9f9f9",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FeedbackCard
          count={count}
          show={feedbackPopup}
          onClose={() => setFeedbackPopup(false)}
          questionId={questionId}
        />
        {/* unAttempted question warning */}
        {!question.optionId && question.answer && (
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
        <Container maxWidth="sm" className={classes.questionContainer}>
          <QuestionStatement
            description={question?.questionStatement}
            indications={[question?.information1, question?.information2]}
            type={props.questionTypeTitle}
          />
        </Container>

        <Container
          disableGutters
          maxWidth="sm"
          style={{
            marginTop: "1rem",
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "#fff",
          }}
          ref={props.onScrollBottom}
        >
          {props?.questionTypeTitle === "NOG" ? (
            <Box
              sx={{
                width: "100%",
                maxWidth: 600,
                height: 100,
                border: "1px solid #e1e1e1",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <p style={{ marginLeft: "50px", fontSize: "16px", fontWeight: "bold" }}>Tillräckligt information för lösningen erhålls</p>
            </Box>
          ) : null}
          {/* <OptionsComponent question={question}
            onMouseOver={(optionId) => props.onhover(optionId)}
            onMouseLeave={() => props.onHoverLeave()}
            SelectOption={(item, optionIndex) => {
              props.SelectOption(item, optionIndex);
            }}
          /> */}
          {question?.options[0]?.options?.map((item, optionIndex) => {
            if (item?.value) {
              return (
                <Box sx={{ display: "flex", }}>
                  <Box
                    sx={{
                      height:
                        question?.options[0].options.length > 4 ||
                          !item.value.includes(
                            "hp-appen.s3.eu-north-1.amazonaws.com"
                          )
                          ? 60
                          : 150,
                      padding:
                        question?.options[0].options.length > 4 ||
                          !item.value.includes(
                            "hp-appen.s3.eu-north-1.amazonaws.com"
                          )
                          ? 0
                          : 10,
                      border: "1px solid #e1e1e1",
                      maxWidth:
                        question?.options[0].options.length > 4 ||
                          !item.value.includes(
                            "hp-appen.s3.eu-north-1.amazonaws.com"
                          )
                          ? 600
                          : 300,
                      display: "flex",
                      color:
                        !question.answer &&
                          optionIndex == question.selectedIndex
                          ? appColors.blueColor
                          : "",
                      "&:hover": {
                        cursor: !question.answer && "pointer",
                        color: !question.answer && appColors.hoverBlue,
                      },
                    }}
                    onMouseOver={() => props.onhover(item._id)}
                    onMouseLeave={() => props.onHoverLeave()}
                    onClick={(e) => {
                      !question?.answer &&
                        props.SelectOption(item, optionIndex);
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <FormControlLabel
                          style={{
                            margin: 0,
                            size: "0.5rem",
                          }}
                          value={item?._id}
                          control={props.showOptions(
                            question,
                            item,
                            optionIndex
                          )}
                          className={classes.root}
                        />
                        <Typography
                          style={{
                            marginTop: "1.25rem",
                            paddingLeft: "1px",
                            color: changeOptionsColor(item),
                            fontSize: "0.6rem",
                          }}
                          variant="body2"
                        >
                          {optionsCharacters(optionIndex)}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        marginLeft:
                          question?.options[0].options.length > 4 ||
                            item.image === ""
                            ? "1rem"
                            : "0",
                        width: !item.value.includes(
                          "hp-appen.s3.eu-north-1.amazonaws.com"
                        )
                          ? 600
                          : 300,
                        justifyContent:
                          question?.options[0].options.length > 4 ||
                            !item.value.includes(
                              "hp-appen.s3.eu-north-1.amazonaws.com"
                            )
                            ? "flex-start"
                            : "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography className={item.value.includes("hp-appen.s3.eu-north-1.amazonaws.com") ? "optionImage" : ""}>
                        <MarkLatex
                          content={item.value}
                        />
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            }
          })}
        </Container>

        {question.answer && question?.optionId && (
          <Container
            maxWidth="sm"
            style={{
              marginTop: "1.5rem",
              backgroundColor: "#fff",
              border: "1px solid #e1e1e1",
              padding: { xs: "1rem", sm: "1rem 3rem" },
            }}
          >
            {question && <AnswerStatement answer={question.answer.answer} />}
            <FeedbackButtons
              onClickPlus={PlusPoint}
              onClickMinus={MinusPoint}
            />
          </Container>
        )}
        {props.submitButton(question)}
      </Container>
    );
  }
};

export default QuestionBody;
