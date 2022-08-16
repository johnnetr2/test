import React, { useEffect, useState } from "react";
import Increment from "../../../assets/Icons/Increment.svg";
import Decrement from "../../../assets/Icons/Decrement.svg";
import QuestionViewDTKOrg from "../../organism/HomeOrg/HomePages/QuestionPages/QuestionViewDtkOrg/QuestionViewDtkOrg";
import { Box, FormControlLabel, Container } from "@material-ui/core";
import { Typography } from "@mui/material";
import MarkLatex from "../Marklatex/MarkLatex";
import MultiQuestionSummary from "../../organism/HomeOrg/HomePages/QuestionPages/ResultSummaryOrg/MultiQuestionSummary";
import FeedbackCard from "../../molecule/FeedbackCard/FeedbackCard";
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

  const PlusPoint = () => {
    setCount(1);
    setFeedbackPopup(true);
  };

  const MinusPoint = () => {
    setCount(0);
    setFeedbackPopup(true);
  };

  const changeOptionsColor = (item) => {
    if(question.answer && question.answer.option == item._id) {
      return '#27AE60'
    } else if(question.answer && item._id == question?.optionId) {
      return '#EB5757'
    } else {
      return ''
    }
  }

  const questionId = props.question._id;
  // const optionArray = ;

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
        paragraphIndex={props.paragraphIndex}
        questionIndex={props.questionIndex}
        timeLeft={props.timeLeft}
        quizId={props.quizId}
        totalTime={props.totalTime}
        quiz={props.quiz}
        sectionCategory={props?.sectionCategory}
        nextQuestion={() => props.nextQuestion()}
        stopTimer={() => props.stopTime()}
        startTimer={() => props.startTime()}
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
            justifyContent: "center",
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
            }}
          >
            <MarkLatex content={question?.questionStatement} />
          </Typography>

          {question?.images[0] && (
            <Typography
              variant="h6"
              component="h6"
              style={{
                height: "12rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ height: "100%" }} src={question?.images[0]} />
            </Typography>
          )}

          <Box
            sx={{
              marginTop: question?.images[0] == "" ? 0 : "2rem",
            }}
          >
            {question?.information1 && (
              <Box sx={{ display: "flex" }}>
                <Box sx={{ marginRight: ".5rem", fontSize: "0.75rem" }}>
                  (1)
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
                  (2)
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
          {question.options[0].options.map((item, optionIndex) => {
            if (item.value) {
              return (
                <Box
                  sx={{
                    height:
                      question?.options[0].options.length > 4 ||
                      item.image === ""
                        ? 60
                        : 120,
                    border: "1px solid #e1e1e1",
                    width:
                      question?.options[0].options.length > 4 ||
                      item.image === ""
                        ? 600
                        : 300,
                    display: "flex",
                    color: !question.answer && optionIndex == question.selectedIndex ? "#0A1596" : '',
                    "&:hover": {
                      cursor: !question.answer && "pointer",
                      color: !question.answer && "#0A1596",
                    },
                  }}
                  onMouseOver={() => props.onhover(item._id)}
                  onMouseLeave={() => props.onHoverLeave()}
                  onClick={(e) => {
                    !question?.answer && props.SelectOption(item, optionIndex);
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
                        control={props.showOptions(question, item, optionIndex)}
                        className={classes.root}
                      />
                      <Typography
                        style={{
                          marginTop: "1.25rem",
                          color: changeOptionsColor(item)
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
                        item.image === ""
                          ? "flex-start"
                          : "center",
                      alignItems: "center",
                    }}
                  >
                    {item.image ? (
                      <img src={item.image} />
                    ) : (
                      <Typography>
                        <MarkLatex content={item.value.replace("\f", "\\f")} />{" "}
                      </Typography>
                    )}
                  </Box>
                </Box>
              );
            }
          })}
        </Container>

        {question.answer && (
          <Box
            paddingX={4}
            mt={2}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              height: 320,
              border: "1px solid #e1e1e1",
              overflow: "auto",
              "&::-webkit-scrollbar": { display: "none" },
              //   '&::-webkit-scrollbar': { width : 0 },
            }}
          >
            <Box sx={{ width: 500, display: "flex" }}>
              <Box sx={{ padding: "2rem 2rem" }}>
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
                    width: question?.answer.image ? "auto" : 500,
                  }}
                >
                  {/* {question.answer.answer} */}
                  <MarkLatex content={question.answer.answer} />
                </Typography>
              </Box>
              <Box
                mt={2}
                style={{
                  // marginLeft: "15rem",
                  marginTop: "2rem",
                }}
              >
                {question?.answer && (
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
                alignItems: "center",
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
                  // width: "32rem",
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
          </Box>
        )}

        {/* {(params.state.questionIndex != undefined) ? (<ResultFooter/>) :  */}
        {props.submitButton(question)}
        {/* }  */}
      </Container>
    );
  }
};

export default QuestionBody;
