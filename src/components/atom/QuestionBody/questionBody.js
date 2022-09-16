import { Box, Container, FormControlLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Decrement from "../../../assets/Icons/Decrement.svg";
import FeedbackCard from "../../molecule/FeedbackCard/FeedbackCard";
import Increment from "../../../assets/Icons/Increment.svg";
import MarkLatex from "../Marklatex/MarkLatex";
import MultiQuestionSummary from "../../organism/HomeOrg/HomePages/QuestionPages/ResultSummaryOrg/MultiQuestionSummary";
import QuestionViewDTKOrg from "../../organism/HomeOrg/HomePages/QuestionPages/QuestionViewDtkOrg/QuestionViewDtkOrg";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 30,
    padding: 0,
  },
});

const QuestionBody = (props) => {
  const classes = useStyles();
  const [question, setQuestion] = useState(props?.question);
  const [count, setCount] = useState();
  const [feedbackPopup, setFeedbackPopup] = useState(false);

  const updateQuiz = (value) => {
    let quiz = [...props.quiz];
    setQuestion(value);
    const index = quiz.findIndex((obj) => obj._id == value._id);
    quiz.splice(index, 1, value);
    props.updateQuiz(quiz);
  };

  const PlusPoint = () => {
    setCount(1);
    setFeedbackPopup(true);
  };

  const MinusPoint = () => {
    setCount(0);
    setFeedbackPopup(true);
  };

  const changeOptionsColor = (item) => {
    if (question.answer && question.answer.option == item._id) {
      return "#27AE60";
    } else if (question.answer && item._id == question?.optionId) {
      return "#EB5757";
    } else if (question.answer && item._id != question?.optionId) {
      return "#E1E1E1";
    } else {
      return "";
    }
  };

  const questionId = props.question._id;

  if (props.question.type == "multiple") {
    return (
      <QuestionViewDTKOrg
        question={props.question}
        selectedOption={props.selectedOption}
        totalQuestions={props.totalQuestions}
        selectedIndex={props.selectedIndex}
        onRightClick={() => props.onRightClick()}
        onLeftClick={() => props.onLeftClick()}
        onResultHandler={() => props.onResultHandler()}
        onCloseTimer={() => props.CloseTimerFunc()}
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
      // changeTime={(time) => props.changeTime(time)}
      />
    );
  } else if (props.question.multipartQuestion) {
    return (
      <MultiQuestionSummary
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
        {/* question container for single question */}
        <Container
          maxWidth="sm"
          style={{
            padding: "4rem 4rem",
            marginTop: "1rem",
            border: "1px solid #e1e1e1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MarkLatex content={question?.questionStatement} />
          </Typography>

          {/* {question?.images[0] && (
            <Typography
              variant="h6"
              component="h6"
              style={{
                height: "12rem",
                display: "flex",
              }}
            >
              <img style={{ height: "80%" }} src={question?.images[0]} />
            </Typography>
          )} */}

          <Box
            sx={{
              marginTop: question?.images[0] == "" ? 0 : "2rem",
            }}
          >
            {question?.information1 && (
              <Box sx={{ display: "flex" }}>
                <Box sx={{ marginRight: ".5rem", fontSize: "0.75rem" }}>
                  {props.questionTypeTitle === "KVA" ? (
                    <Typography
                      variant="p"
                      sx={{ fontStyle: "italic", fontSize: "0.75rem" }}
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
                    fontSize: "0.75rem",
                    display: "flex",
                    // maxHeight: "1.25rem",
                  }}
                >
                  <MarkLatex content={question?.information1} />
                </Typography>
              </Box>
            )}
            {question?.information2 && (
              <Box sx={{ display: "flex" }}>
                <Box sx={{ marginRight: ".5rem", fontSize: "0.75rem" }}>
                  {props.questionTypeTitle === "KVA" ? (
                    <Typography
                      variant="p"
                      sx={{ fontStyle: "italic", fontSize: "0.75rem" }}
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
                    fontSize: "0.75rem",
                    // maxHeight: "1.25rem",
                    display: "flex",
                  }}
                >
                  <MarkLatex content={question?.information2} />
                </Typography>
              </Box>
            )}
          </Box>
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
        >
          {props?.questionTypeTitle == "NOG" ? (
            <Box
              sx={{
                width: 600,
                height: 100,
                border: "1px solid #e1e1e1",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="p"
                style={{ fontWeight: "bold", marginLeft: "50px" }}
              >
                Tillräckligt information för lösningen erhålls
              </Typography>
            </Box>
          ) : null}
          {question?.options[0]?.options?.map((item, optionIndex) => {
            if (item.value) {
              return (
                <Box sx={{ display: "flex" }}>
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
                      width:
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
                          ? "#0A1596"
                          : "",
                      "&:hover": {
                        cursor: !question.answer && "pointer",
                        color: !question.answer && "#0A1596",
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
                          {props.OptionValue(optionIndex)}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        // width:
                        //   question?.options[0].options.length > 4
                        //     ? "20rem"
                        //     : "14rem",
                        display: "flex",
                        marginLeft:
                          question?.options[0].options.length > 4 ||
                            item.image === ""
                            ? "1rem"
                            : "0",
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
                      {item.image ? (
                        <img src={item.image} />
                      ) : (
                        <Typography>
                          <MarkLatex
                            content={item.value.replace("\f", "\\f")}
                          />{" "}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              );
            }
          })}
        </Container>

        {question.answer && (
          // <Box
          //   paddingX={4}
          //   mt={2}
          //   sx={{
          //     backgroundColor: "#fff",
          //     width: 600,
          //     border: "1px solid #e1e1e1",
          //   }}
          // >
          <Container
            maxWidth="sm"
            style={{
              marginTop: "1.5rem",
              backgroundColor: "#fff",
              border: "1px solid #e1e1e1",
              padding: "1rem 3rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                style={{
                  fontSize: "1.25rem",
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
                }}
              >
                <MarkLatex content={question.answer.answer} />
              </Typography>

              {question?.answer?.image ? (
                <img
                  style={{ width: 100 }}
                  src={question?.answer?.image}
                  alt="Explanation Image"
                />
              ) : (
                <div></div>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                height: 30,
              }}
            >
              <Typography
                variant="body1"
                component="body1"
                style={{
                  fontSize: ".75rem",
                  fontWeight: "500",
                }}
              >
                Berätta för oss om du var nöjd med lösningen
              </Typography>
              <Box ml={1} mr={0.5}>
                <img
                  src={Increment}
                  style={{ cursor: "pointer" }}
                  onClick={PlusPoint}
                  alt=""
                />
              </Box>
              <Box mr={1}>
                <img
                  src={Decrement}
                  style={{ cursor: "pointer" }}
                  onClick={MinusPoint}
                  alt=""
                />
              </Box>
            </Box>
          </Container>
        )}

        {/* {(params.state.questionIndex != undefined) ? (<ResultFooter/>) :  */}
        {props.submitButton(question)}
        {/* }  */}
      </Container>
    );
  }
};

export default QuestionBody;
