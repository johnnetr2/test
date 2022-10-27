import {
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  Paper,
  Radio,
  Typography,
} from "@material-ui/core";
import { Close, OpenInFull } from "@mui/icons-material/";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { EndPoints, instance, instance2 } from "../../../../../service/Route";
import React, { useEffect, useRef, useState } from "react";

import BlueLeftIcon from "../../../../../../assets/Icons/BlueLeftIcon.svg";
import ArrowSalt from "../../../../../../assets/Icons/ArrowSalt.svg";
import BlueRightIcon from "../../../../../../assets/Icons/BlueRightIcon.svg";
import CircularProgress from "@mui/material/CircularProgress";
import Draggable from "react-draggable";
import ExerciseBtn from "../../../../../atom/ExerciseBtn/ExerciseBtn";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import ResultQuestionViewDtkOrg from "./ResultQuestionViewDTKOrg";
import Righticon from "../../../../../../assets/Imgs/Righticon.png";
import Ruler from "../../../../../../assets/Imgs/ruler.png";
import RulerButton from "../../../../../atom/RulerButton/RulerButton";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

let dataSubmit = [];

const QuestionViewDTKOrg = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quiz, setQuiz] = useState();
  const [showResult, setShowResult] = useState(false);
  const [answerExistance, setAnswerExistance] = useState();
  const [onHover, setOnHover] = useState();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const { user, token } = useSelector((state) => state.value);
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  // let minutes = 0;
  // let seconds = 0;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundColor: "#fff",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    scrollbar: {
      "&::-webkit-scrollbar": {
        width: 3,
        height: 5,
      },
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#505050",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#707070",
      },
    },
    header: {
      minHeight: "10vh",
      backgroundColor: "#fff",
      border: "1px solid #b4b4b4",
    },
    appbar: {
      border: "1px solid #E1E1E1",
      backgroundColor: "#f9f9f9",
    },
    size: {
      width: 15,
      height: 15,
    },
    center_align: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    color_progress: {
      backgroundColor: "#B4B4B4",
      color: "#6FCF97",
    },
    content: {
      minHeight: "90vh",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "90vw",
    },
  }));

  const classes = useStyles(10);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollTop();
    if (props.paragraphIndex != undefined) {
      setSelectedIndex(props.questionIndex);
      setQuiz(props.question);
    } else {
      setQuiz(props.question);
    }
  }, []);

  const Button = (question) => {
    if (props.paragraphIndex != undefined) {
      return (
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
      );
    } else {
      return (
        <Box
          sx={{
            width: "100%",
            maxWidth: 600,
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <ExerciseBtn title="svara" onClick={() => submitAnswer(question)} />
        </Box>
      );
    }
  };

  var tymer;
  useEffect(() => {
    tymer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(tymer);
  }, []);

  // quiz?.[0]?.question?.[0]?.answer &&

  const getTimeForUnattemptedQuestions = (quiz, index) => {
    const ans = quiz[index].question.map((item) => {
      if (item.answer) {
        return true;
      } else if (!item.answer) {
        return false;
      }
    });
    return ans;
  };

  const handleRightArrowFunction = () => {
    const Quiz = { ...quiz };

    const data = {
      questionId: Quiz.question[selectedIndex]._id,
      optionId: Quiz.question[selectedIndex].optionId,
      MultipartQuestion: Quiz._id,
      timeleft: props?.timeLeft ? props?.timeLeft : 0,
      totaltime: props?.totalTime ? props?.totalTime : null,
      spendtime: dataSubmit[selectedIndex]?.spendtime
        ? dataSubmit[selectedIndex]?.spendtime + seconds
        : seconds,
      // Boolean(
      //   getTimeForUnattemptedQuestions(props.quiz, props.selectedIndex)
      // )
      //   ? seconds
      //   : 0,
    };

    // dataSubmit.splice(selectedIndex, 1, data);
    const ifExists = dataSubmit.some(
      (obj) => obj.questionId == quiz.question[selectedIndex]._id
    );
    if (ifExists) {
      const index = dataSubmit.findIndex(
        (obj) => obj.questionId == quiz.question[selectedIndex]._id
      );
      dataSubmit.splice(index, 1, data);
    } else {
      dataSubmit.push(data);
    }
    selectedIndex + 1 < quiz.question.length &&
      setSelectedIndex(selectedIndex + 1);
    selectedIndex + 1 < quiz?.question.length && props.updateQuiz(quiz);
    selectedIndex + 1 < quiz?.question.length && props.changeIndex();
    setSeconds(0);
    setMinutes(0);
  };

  const handleLeftArrowFunction = () => {
    const Quiz = { ...quiz };
    const data = {
      questionId: Quiz.question[selectedIndex]._id,
      optionId: Quiz.question[selectedIndex].optionId,
      MultipartQuestion: Quiz._id,
      timeleft: props?.timeLeft ? props?.timeLeft : 0,
      totaltime: props?.totalTime ? props?.totalTime : null,
      spendtime: dataSubmit[selectedIndex]?.spendtime
        ? dataSubmit[selectedIndex]?.spendtime + seconds
        : seconds,
      // Boolean(
      //   getTimeForUnattemptedQuestions(props.quiz, props.selectedIndex)
      // )
      //   ? seconds
      //   : 0,
    };
    // dataSubmit.splice(selectedIndex, 1, data);
    const ifExists = dataSubmit.some(
      (obj) => obj.questionId == quiz.question[selectedIndex]._id
    );
    if (ifExists) {
      const index = dataSubmit.findIndex(
        (obj) => obj.questionId == quiz.question[selectedIndex]._id
      );
      dataSubmit.splice(index, 1, data);
    } else {
      dataSubmit.push(data);
    }

    setSelectedIndex(selectedIndex - 1);
    props.previosQuestion();
    setSeconds(0);
    setMinutes(0);
  };

  const SelectFunc = (item, optionIndex) => {
    let allQuiz = { ...quiz };
    const qz = allQuiz?.question;
    let question = qz[selectedIndex];
    question.selectedOptionIndex = optionIndex;
    question.optionId = item._id;
    allQuiz.question = qz;
    setQuiz(allQuiz);

    // const data = {
    //   questionId: quiz.question[selectedIndex]._id,
    //   optionId: quiz.question[selectedIndex].optionId,
    //   MultipartQuestion: quiz._id,
    // timeleft: props?.timeLeft ? props?.timeLeft : null,
    // totaltime: props?.totalTime ? props?.totalTime : null,
    // spendtime: getSpendTime(props?.timeLeft, props?.totalTime, selectedIndex),
    // };

    // const ifExists = dataSubmit.some(
    //   (obj) => obj.questionId == quiz.question[selectedIndex]._id
    // );
    // if (ifExists) {
    //   const index = dataSubmit.findIndex(
    //     (obj) => obj.questionId == quiz.question[selectedIndex]._id
    //   );
    //   dataSubmit.splice(index, 1, data);
    // } else {
    //   dataSubmit.push(data);
    // }

    const answerLenght = quiz.question.filter((item) => item.optionId).length;
    if (answerLenght == quiz.question.length) {
      setAnswerExistance(true);
    }
  };

  const Options = (question, option, optionIndex) => {
    if (optionIndex == question.selectedOptionIndex) {
      return (
        <Radio color="primary" checked={true} style={{ color: "#0A1596" }} />
      );
    } else {
      return (
        <Radio
          color="primary"
          checked={false}
          style={{ color: option._id == onHover && "#0A1596" }}
        />
      );
    }
  };

  const submitAnswer = async () => {
    const Quiz = { ...quiz };

    const data = {
      questionId: Quiz.question[selectedIndex]._id,
      optionId: Quiz.question[selectedIndex].optionId,
      MultipartQuestion: Quiz._id,
      timeleft: props?.timeLeft ? props?.timeLeft : 0,
      totaltime: props?.totalTime ? props?.totalTime : null,
      spendtime: dataSubmit[selectedIndex]?.spendtime
        ? dataSubmit[selectedIndex]?.spendtime + seconds
        : seconds,
      spendtimevtwo: props?.totalTime
        ? props?.totalTime - props?.timeLeft
        : seconds,
      // Boolean(
      //   getTimeForUnattemptedQuestions(props.quiz, props.selectedIndex)
      // )
      //   ? seconds
      //   : 0,
    };

    dataSubmit.splice(selectedIndex, 1, data);

    props.updateQuiz(quiz);

    try {
      props.stopTimer();
      const obj = {
        quiz: props.quizId,
        user: user._id,
        sectionCategory: quiz.sectionCategory,
        answer: dataSubmit,
        isTimeRestricted: props.isTimeRestricted,
      };

      const URL = EndPoints.submitMultiquestionParagragh;
      await instance2.post(URL, obj, { headers }).then((response) => {
        dataSubmit = [];
        setShowResult(true);
      });

      const Quiz = [...props?.quiz];
      let paragraphID = Quiz[props?.selectedIndex]?._id;
      const payload = {
        quiz: props?.quizId,
      };

      const URL1 = EndPoints.getParagraphQuestionAnswer + paragraphID;
      instance2.post(URL1, payload, { headers }).then((response) => {
        response?.data?.question?.map((item, index) => {
          if (Quiz[props?.selectedIndex].question[index]) {
            Quiz[props?.selectedIndex].question[index]["answer"] = item?.answer;
          }
        });
        props.updateCompleteQuiz(Quiz);
      });
    } catch (error) {
      console.log("in catch block: ", error);
    }
  };

  function OptionIndex(index) {
    switch (index) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      default:
        return "";
    }
  }

  const [extendedView, setExtendView] = useState(false);
  const openExtended = () => {
    setExtendView(true);
  };
  const closeExtended = () => {
    setExtendView(false);
  };

  return (
    <div>
      <CssBaseline />

      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#fff",
          height: "fit-content",
        }}
      >
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
            paddingX={{ xs: 4, md: 10 }}
            paddingY={2}
            sx={{
              backgroundColor: "#fff",
              width: "100%",
              maxWidth: 600,
              height: 373,
              overflow: "auto",
              border: "1px solid #e1e1e1",
            }}
            className={classes.scrollbar}
            style={{ position: "relative" }}
          >
            <Typography
              variant="subtitle1"
              style={{
                fontSize: ".7rem",
                fontWeight: "500",
                marginBottom: ".25rem",
              }}
            >
              {quiz && quiz.question.length + " uppgifter:"}
            </Typography>
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
            <Typography variant="h6" component="h6">
              {!quiz?.title === "DTK" ? quiz?.title : ""}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: ".875rem",
                fontWeight: "400",
              }}
            >
              <div className="DTK">
                {" "}
                {/* DTK styling on ./styles/QuestionBody.css */}
                <MarkLatex content={quiz?.description} />
              </div>
            </Typography>
            {quiz?.image && (
              <>
                <DialogTitle
                  style={{
                    padding: "0 5rem 2rem",
                    flex: "1",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      style={{
                        textTransform: "uppercase",
                        fontSize: ".7rem",
                        fontWeight: "500",
                      }}
                    >
                      {quiz && quiz.question.length + " uppgifter:"}
                    </Typography>
                    <Typography variant="h3" component="h3">
                      {quiz?.title !== "DTK" ? quiz?.title : ""}
                    </Typography>
                  </Box>
                  <Box>
                    <RulerButton></RulerButton>
                  </Box>
                </DialogTitle>
                <DialogContent
                  style={{
                    padding: "0 5rem 2rem",
                    display: "flex",
                    border: "1px solid #f00",
                  }}
                >
                  <Box style={{ width: "90%" }}>
                    <img src={quiz?.image} style={{ width: "100%" }} alt="" />
                  </Box>
                  <Box
                    style={{
                      width: "10%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Draggable>
                      <img
                        src={Ruler}
                        style={{
                          background: "#fff",
                          width: "75%",
                          border: "1px solid #f00",
                        }}
                        alt=""
                      />
                    </Draggable>
                  </Box>
                </DialogContent>
              </>
            )}

            <Dialog
              open={extendedView}
              onClose={closeExtended}
              maxWidth={"xl"}
              fullWidth={true}
            >
              {quiz?.description && (
                <>
                  <DialogTitle style={{ padding: "2rem 5rem 2rem" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        textTransform: "uppercase",
                        fontSize: ".7rem",
                        fontWeight: "500",
                      }}
                    >
                      {quiz && quiz.question.length + " uppgifter:"}
                    </Typography>
                    <Typography variant="h3" component="h3">
                      {!quiz?.title === "DTK" ? quiz?.title : ""}
                    </Typography>
                  </DialogTitle>
                  <DialogContent /* 1 column for DTK and 2 columns for LÄS/ELF */
                    style={{
                      columnCount: `${quiz.title === "DTK" ? "1" : "2"}`,
                      padding: "0 5rem 2rem",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: ".85rem",
                      }}
                    >
                      <MarkLatex content={quiz?.description} />
                    </Typography>
                  </DialogContent>
                </>
              )}
              {quiz?.image && (
                <>
                  <DialogTitle
                    style={{
                      padding: "0 5rem 2rem",
                      flex: "1",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="subtitle1"
                        style={{
                          textTransform: "uppercase",
                          fontSize: ".7rem",
                          fontWeight: "500",
                        }}
                      >
                        {quiz && quiz.question.length + " uppgifter:"}
                      </Typography>
                      <Typography variant="h3" component="h3">
                        {quiz?.title}
                      </Typography>
                    </Box>
                    <Box>
                      <RulerButton></RulerButton>
                    </Box>
                  </DialogTitle>
                  <DialogContent
                    style={{ padding: "0 5rem 2rem", display: "flex" }}
                  >
                    <Box style={{ width: "90%" }}>
                      <img src={quiz?.image} style={{ width: "100%" }} alt="" />
                    </Box>
                    <Box
                      style={{
                        width: "10%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Draggable>
                        <img
                          src={Ruler}
                          style={{ background: "#fff", width: "75%" }}
                          alt=""
                        />
                      </Draggable>
                    </Box>
                  </DialogContent>
                </>
              )}
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
          {showResult ? (
            <ResultQuestionViewDtkOrg
              paragraphIndex={props.paragraphIndex}
              onRightClick={() => props.onRightClick()}
              onLeftClick={() => props.onLeftClick()}
              onResultHandler={() => props.onResultHandler()}
              questionIndex={props.questionIndex}
              paragraph={quiz}
              quizId={props.quizId}
              stopTimer={() => props.stopTimer()}
              startTimer={() => props.startTimer()}
              selectedIndex={props.selectedIndex}
              nextQuestion={() => props.nextQuestion()}
            />
          ) : (
            quiz &&
            quiz?.question?.map((question, index) => {
              if (index == selectedIndex) {
                return (
                  <Box sx={{ maxWidth: 600, width: "100%" }}>
                    <Box
                      paddingX={8}
                      mt={5}
                      sx={{
                        backgroundColor: "#fff",
                        maxWidth: 600,
                        border: "1px solid #e1e1e1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          marginTop: 10,
                        }}
                      >
                        <Box
                          style={{
                            position: "absolute",
                            top: 10,
                            right: 0,
                            width: 70,
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                          }}
                        >
                          {selectedIndex > 0 && (
                            <img
                              onClick={handleLeftArrowFunction}
                              src={BlueLeftIcon}
                              style={{ cursor: "pointer" }}
                              className={classes.size}
                              alt=""
                            />
                          )}
                          <Typography
                            variant="body1"
                            component="body1"
                            style={{ fontSize: ".8rem" }}
                          >
                            {selectedIndex + 1 + "/" + quiz.question.length}
                          </Typography>
                          {
                            quiz &&
                              selectedIndex < quiz?.question?.length - 1 &&
                              quiz?.question.length > 1 &&
                              quiz?.question[0].selectedOptionIndex !=
                                undefined && (
                                <img
                                  onClick={handleRightArrowFunction}
                                  src={BlueRightIcon}
                                  style={{ cursor: "pointer" }}
                                  className={classes.size}
                                  alt=""
                                />
                              )
                            // : (
                            //   <img
                            //     src={Righticon}
                            //     alt=""
                            //     style={{ height: 15 }}
                            //   />
                          }
                        </Box>
                      </Box>
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          padding: "3rem 0rem",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <MarkLatex content={question.questionStatement} />

                        {question.image && (
                          <img
                            src={question.image[0]}
                            style={{ height: "10rem", marginBottom: ".4rem" }}
                          />
                        )}
                      </Typography>
                    </Box>
                    {question.options[0].options.map((option, optionIndex) => {
                      return (
                        <Box
                          padding={1}
                          sx={{
                            backgroundColor: "#fff",
                            width: "100%",
                            maxWidth: 600,
                            border: "1px solid #e1e1e1",
                            // marginLeft: ".5rem",
                            color:
                              optionIndex == question.selectedOptionIndex &&
                              "#0A1596",
                            "&:hover": {
                              cursor: !option.answer && "pointer",
                              color: !option.answer && "#0A1596",
                            },
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          onClick={(e) => {
                            !question.answerSubmited &&
                              SelectFunc(option, optionIndex);
                          }}
                          onMouseOver={() => setOnHover(option._id)}
                          onMouseLeave={() => setOnHover()}
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
                                flexDirection: "row",
                              }}
                            >
                              <FormControlLabel
                                value={option._id}
                                style={{
                                  marginLeft: ".5rem",
                                }}
                                control={Options(question, option, optionIndex)}
                              />
                              <Typography
                                style={{
                                  marginTop: "1.25rem",
                                  marginLeft: "-1.7rem",
                                  fontSize: "0.6rem",
                                }}
                                variant="body2"
                              >
                                {OptionIndex(optionIndex)}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "1rem",
                            }}
                          >
                            <Typography style={{ fontSize: "0.9rem" }}>
                              {option?.value && (
                                <MarkLatex
                                  content={option?.value.replace("\f", "\\f")}
                                />
                              )}{" "}
                            </Typography>
                          </Box>
                        </Box>
                      );
                    })}

                    {answerExistance ? (
                      Button(question)
                    ) : (
                      <Box
                        padding={1}
                        style={{
                          backgroundColor: "grey",
                          color: "#FFFFFF",
                          height: "2.7rem",
                          borderRadius: ".4rem",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "2rem",
                          marginTop: "1rem",
                        }}
                      >
                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "0.75rem",
                            width: "3rem",
                          }}
                        >
                          svara
                        </Typography>
                      </Box>
                    )}
                  </Box>
                );
              }
            })
          )}
        </Container>
      </Container>
    </div>
  );
};

export default QuestionViewDTKOrg;
