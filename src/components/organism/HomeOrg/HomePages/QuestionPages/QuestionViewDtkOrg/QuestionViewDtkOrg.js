import {
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  Radio,
  Typography,
} from "@material-ui/core";
import { Close } from "@mui/icons-material/";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { EndPoints, instance2 } from "../../../../../service/Route";
import React, { useEffect, useState } from "react";

import ArrowSalt from "../../../../../../assets/Icons/ArrowSalt.svg";
import BlueLeftIcon from "../../../../../../assets/Icons/BlueLeftIcon.svg";
import BlueRightIcon from "../../../../../../assets/Icons/BlueRightIcon.svg";
import ExerciseBtn from "../../../../../atom/ExerciseBtn/ExerciseBtn";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import QuestionStatement from "../../../../../molecule/QuestionStatement/QuestionStatement";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import ResultQuestionViewDtkOrg from "./ResultQuestionViewDTKOrg";
import RulerButton from "../../../../../atom/RulerButton/RulerButton";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { appColors, scrollTop, optionsCharacters } from "../../../../../../utils/commonService";
import RulerComponent from "../../../../../molecule/RulerComponent";

let dataSubmit = [];

const QuestionViewDTKOrg = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quiz, setQuiz] = useState();
  const [showResult, setShowResult] = useState(false);
  const [answerExistance, setAnswerExistance] = useState();
  const [onHover, setOnHover] = useState();
  const [seconds, setSeconds] = useState(0);
  const [showRuler, setShowRuler] = useState(false);

  const handleShowRuler = () => {
    setShowRuler((prevState) => !prevState)
  };
  const { user, token } = useSelector((state) => state.value);
  const [enterSubmitted, setEnterSubmitted] = useState(true)
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

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
    ruler: {
      display: 'flex'
    }
  }));

  const classes = useStyles(10);

  useEffect(() => {
    scrollTop();
    if (props.paragraphIndex !== undefined) {
      setSelectedIndex(props.questionIndex);
      setQuiz(props.question);
    } else {
      setQuiz(props.question);
    }
  }, []);

  useEffect(() => {
    const handleEnterClick = (e) => {
      if (e.keyCode === 13 && enterSubmitted && answerExistance) {
        submitAnswer();
      }
    }
    document.addEventListener("keydown", handleEnterClick);
    return () => {
      document.removeEventListener("keydown", handleEnterClick);
    }
  }, [enterSubmitted, answerExistance])

  const Button = (question) => {
    if (props.paragraphIndex !== undefined) {
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
    };

    const ifExists = dataSubmit.some(
      (obj) => obj.questionId === quiz.question[selectedIndex]._id
    );
    if (ifExists) {
      const index = dataSubmit.findIndex(
        (obj) => obj.questionId === quiz.question[selectedIndex]._id
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
    };
    const ifExists = dataSubmit.some(
      (obj) => obj.questionId === quiz.question[selectedIndex]._id
    );
    if (ifExists) {
      const index = dataSubmit.findIndex(
        (obj) => obj.questionId === quiz.question[selectedIndex]._id
      );
      dataSubmit.splice(index, 1, data);
    } else {
      dataSubmit.push(data);
    }

    setSelectedIndex(selectedIndex - 1);
    props.previosQuestion();
    setSeconds(0);
  };

  const SelectFunc = (item, optionIndex) => {
    let allQuiz = { ...quiz };
    const qz = allQuiz?.question;
    let question = qz[selectedIndex];
    question.selectedOptionIndex = optionIndex;
    question.optionId = item._id;
    allQuiz.question = qz;
    setQuiz(allQuiz);

    const answerLenght = quiz.question.filter((item) => item.optionId).length;
    if (answerLenght === quiz.question.length) {
      setAnswerExistance(true);
    }
  };

  const Options = (question, option, optionIndex) => {
    if (optionIndex === question.selectedOptionIndex) {
      return (
        <Radio color="primary" checked={true} style={{ color: appColors.blueColor }} />
      );
    } else {
      return (
        <Radio
          color="primary"
          checked={false}
          style={{ color: option._id === onHover && appColors.hoverBlue }}
        />
      );
    }
  };

  const submitAnswer = async () => {
    setEnterSubmitted(true)
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
        setEnterSubmitted(false)
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
            {quiz && (
              <QuestionStatement
                numberOfQuestions={quiz?.question.length}
                title={quiz?.title}
                description={quiz?.description}
              />
            )}
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
                  {quiz && (
                    <QuestionStatement
                      numberOfQuestions={quiz?.question.length}
                      title={quiz?.title === "DTK" && quiz?.title}
                      description={quiz?.description}
                    />
                  )}
                  <Box>
                    <RulerButton />
                  </Box>
                </DialogTitle>
                <div
                  style={{
                    padding: "0 5rem 2rem",
                    display: "flex",
                    border: "1px solid #f00",
                  }}
                >
                  <Box style={{ width: "90%" }}>
                    <img src={quiz?.image} style={{ width: "100%" }} alt="" />
                  </Box>
                </div>
              </>
            )}
            <Dialog
              open={extendedView}
              onClose={closeExtended}
              maxWidth={"lg"}
              fullWidth={true}
            >
              {quiz?.description && (
                <>
                  <DialogTitle style={{ padding: "2rem 5rem 0rem" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        textTransform: "uppercase",
                        fontSize: ".85rem",
                        maxWidth: "650px",
                        margin: quiz?.description.length < 2000 ? "auto" : "0",
                      }}
                    >
                      {quiz && quiz.question.length + " uppgifter"}
                    </Typography>
                  </DialogTitle>
                  <DialogContent /* 1 column for DTK and 2 columns for LÄS/ELF */
                    style={{
                      position: 'relative',
                      columnCount: `${quiz.title === "DTK" || quiz?.description.length < 2000
                        ? "1"
                        : "2"
                        }`,
                      padding: "0rem 5rem 2rem",
                    }}
                  >
                    {quiz.title === "DTK" && (
                      <Box display={"flex"} justifyContent="flex-end">
                        <RulerButton
                          onClick={handleShowRuler}
                          isRulerOppened={showRuler}
                        ></RulerButton>
                      </Box>
                    )}
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: ".85rem",
                        maxWidth: "650px",
                        margin: "auto",
                        position: 'relative'
                      }}
                      className={quiz?.description.includes("hp-appen.s3.eu-north-1.amazonaws.com") ? "questionImage" : ""}
                    >
                      <h1 style={{ fontSize: "28px" }}>{quiz?.title}</h1>
                      <MarkLatex content={quiz?.description} />

                    </Typography>
                    {quiz?.title === "DTK" && showRuler && (
                      // <PositionableContainer
                      //   movable
                      //   resizable
                      //   rotatable
                      //   position={position}
                      //   onUpdate={handleUpdate}
                      // >
                      //   <img
                      //     src={Ruler}
                      //     style={{
                      //       background: "#fff",
                      //       width: "100%",
                      //     }}
                      //   ></img>
                      // </PositionableContainer>
                      <RulerComponent></RulerComponent>
                    )}
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
                  </DialogTitle>
                  <DialogContent
                    style={{ padding: "0 5rem 2rem", display: "flex" }}
                  >
                    <Box style={{ width: "90%" }}>
                      <img src={quiz?.image} style={{ width: "100%" }} alt="" />
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
              isAnswerExist={answerExistance}
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
              if (index === selectedIndex) {
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
                          alignItems: "center"
                        }}
                      >
                        <QuestionStatement
                          description={question?.questionStatement}
                          indications={[
                            question?.information1,
                            question?.information2,
                          ]}
                          type={quiz?.title}
                        />
                        {question.image && (
                          <img
                            src={question.image[0]}
                            style={{ height: "10rem", marginBottom: ".4rem" }}
                          />
                        )}
                      </Typography>
                    </Box>
                    <Container
                      disableGutters
                      maxWidth="sm"
                      style={{
                        // marginTop: "1rem",
                        display: "flex",
                        flexWrap: "wrap",
                        backgroundColor: "#fff",
                      }}
                    // ref={props.onScrollBottom}
                    >
                      {question.options[0].options.map((option, optionIndex) => {
                        return (
                          <Box sx={{ display: 'flex' }}>
                            <Box
                              padding={1}
                              sx={{
                                height:
                                  question?.options[0].options.length > 4 ||
                                    !option.value.includes(
                                      "hp-appen.s3.eu-north-1.amazonaws.com"
                                    )
                                    ? 60
                                    : 150,
                                padding:
                                  question?.options[0].options.length > 4 ||
                                    !option.value.includes(
                                      "hp-appen.s3.eu-north-1.amazonaws.com"
                                    )
                                    ? 0
                                    : 10,
                                border: "1px solid #e1e1e1",
                                maxWidth:
                                  question?.options[0].options.length > 4 ||
                                    !option.value.includes(
                                      "hp-appen.s3.eu-north-1.amazonaws.com"
                                    )
                                    ? 600
                                    : 300,
                                color:
                                  optionIndex === question.selectedOptionIndex &&
                                  appColors.blueColor,
                                "&:hover": {
                                  cursor: !option.answer && "pointer",
                                  color: !option.answer && appColors.hoverBlue,
                                },
                                display: "flex",
                                // flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: '#FFF',
                                paddingRight: '10px'

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
                                    {optionsCharacters(optionIndex)}
                                  </Typography>
                                </Box>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  marginLeft:
                                    question?.options[0].options.length > 4 ||
                                      option.image === ""
                                      ? "1rem"
                                      : "0",
                                  width: !option.value.includes(
                                    "hp-appen.s3.eu-north-1.amazonaws.com"
                                  )
                                    ? 600
                                    : 300,
                                  justifyContent:
                                    question?.options[0].options.length > 4 ||
                                      !option.value.includes(
                                        "hp-appen.s3.eu-north-1.amazonaws.com"
                                      )
                                      ? "flex-start"
                                      : "center",
                                  alignItems: "center",
                                }}
                              >
                                <Typography className={option.value.includes("hp-appen.s3.eu-north-1.amazonaws.com") ? "optionImage" : ""} style={{ fontSize: "0.9rem" }}>
                                  {option?.value && (
                                    <MarkLatex
                                      content={option?.value}
                                    />
                                  )}{" "}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
                    </Container>

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
                          Svara
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
