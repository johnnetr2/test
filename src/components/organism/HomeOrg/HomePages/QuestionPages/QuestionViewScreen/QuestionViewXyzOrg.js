import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Paper,
  Radio,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { EndPoints, instance2, instance3 } from "../../../../../service/Route";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import AlertDialogSlide from "../../../../../molecule/QuitTaskPopup/QuitTaskPopup";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Correct from "../../../../../../assets/Imgs/correct.png";
import DropPenPopup from "../../../../../molecule/DropPenPopup/DropPenPopup";
import Header from "../../../../../atom/Header/header";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HelpPopup from "../../../../../atom/HelpPopup/HelpPopup";
import LeftArrow from "../../../../../../assets/Icons/LeftArrow.svg";
import QuestionBody from "../../../../../atom/QuestionBody/questionBody";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import UnAttemptedPopup from "../../../../../molecule/UnAttemptedPopup/UnAttemptedPopup";
import UnAttemptedTimer from "../../../../../molecule/UnAttemptedTimer/UnAttemptedTimer";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const QuestionViewXyzOrg = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quiz, setQuiz] = useState();
  const params = useLocation();
  const [status, setStatus] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [time, setTime] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timeEnd, setTimeEnd] = useState(false);
  const [nextPress, setNextPress] = useState(undefined);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [helpPopup, setHelpPopup] = useState(false);
  const [onHover, setOnhover] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answerSubmittedState, setAnsSubmittedState] = useState();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    // console.log(params?.state, "params.state on the question view xyz");
    const questionToShow = params?.state?.questionIndex;
    if (questionToShow != undefined) {
      setSelectedIndex(questionToShow);
      setCurrentQuestion(questionToShow);
      setCurrentQuestion(questionToShow + 1);
      setQuiz(params?.state?.quiz.question);
      setTotalQuestions(params?.state?.quiz?.question?.length);
      setLoading(false);
    } else {
      if (localStorage.getItem("quiz")) {
        let refreshQuiz = JSON.parse(localStorage.getItem("quiz"));
        let totalQ = 0;
        setLoading(false);
        refreshQuiz &&
          refreshQuiz.map((item) => {
            if (item?.answer) {
              setSelectedIndex((selectedIndex) => selectedIndex + 1);
              setCurrentQuestion((currentQuestion) => currentQuestion + 1);
            }
            if (item.type == "multiple") {
              setTotalQuestions((totalQ) => totalQ + item?.question?.length);
              totalQ = totalQ + item?.question?.length;
            } else {
              totalQ = totalQ + 1;
              setTotalQuestions((totalQ) => totalQ + 1);
            }
          });
        setTime(60);
        // setTime((params.state.sectionCategory.time * totalQ * 60).toFixed(0));
        setStatus(true);
        if (localStorage.getItem("quiz")) {
          setQuiz(JSON.parse(localStorage.getItem("quiz")));
        } else {
          setQuiz(params?.state?.data?.quiz);
        }
        // }
      } else {
        let totalQ = 0;
        setLoading(false);
        params?.state?.data?.quiz &&
          params?.state?.data?.quiz?.map((item) => {
            if (item?.answer) {
              setSelectedIndex((selectedIndex) => selectedIndex + 1);
              setCurrentQuestion((currentQuestion) => currentQuestion + 1);
            }
            if (item.type == "multiple") {
              setTotalQuestions((totalQ) => totalQ + item?.question?.length);
              totalQ = totalQ + item?.question?.length;
            } else {
              totalQ = totalQ + 1;
              setTotalQuestions((totalQ) => totalQ + 1);
            }
          });
          setTime(60);

        // setTime((params.state.sectionCategory.time * totalQ * 60).toFixed(0));
        setStatus(true);
        if (localStorage.getItem("quiz")) {
          setQuiz(JSON.parse(localStorage.getItem("quiz")));
        } else {
          setQuiz(params?.state?.data?.quiz);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      if (JSON.parse(localStorage.getItem("quiz"))) {
        setQuiz(JSON.parse(localStorage.getItem("quiz")));
      }
    }
  }, []);

  const Next = (question) => {
    if (question.answer) {
      if (selectedIndex + 1 == quiz.length) {
        navigate("/resultsummary", {
          state: {
            sectionCategory: params?.state?.sectionCategory,
            quizId: params?.state?.quizId,
            spendtime: answerSubmittedState,
            time: params?.state?.time,
          },
        });
        localStorage.removeItem("time");
        localStorage.removeItem("quiz");
      } else {
        setStatus(true);
        selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1);
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      if (question.selectedIndex + 1) {
        const questions = [...quiz];
        let ques = questions[selectedIndex];
        const URL = EndPoints.getAnswerByQuestionId + ques._id;
        instance2.get(URL).then((response) => {
          // console.log(response, "this is the console of response");
          ques.answer = response?.data;
          ques.answerSubmited = true;
          !params?.state?.data?.value && setNextPress(!nextPress);
          localStorage.setItem("quiz", JSON.stringify(questions));
          setQuiz(questions);
          setStatus(false);
          // console.log(quiz);
        });
      }
    }
  };

  useEffect(() => {
    if (
      nextPress &&
      quiz?.length > 0 &&
      (timeLeft || (!params?.state?.data.value && !timeLeft))
    ) {
      const questions = [...quiz];
      let question = questions[selectedIndex];
      const data = {
        quiz: params?.state?.quizId,
        user: localStorage.getItem("userId"),
        optionId: question.optionId,
        questionId: question._id,
        sectionCategory: params?.state?.sectionCategory?._id,
        timeleft: timeLeft ? timeLeft : 0,
        totaltime: time ? time : 0,
        spendtime: timeLeft ? time - timeLeft : 0,
        MultipartQuestion: null,
      };
      // console.log(data, 'this is the console of data to check the timing of the quiz')
      const URL = EndPoints.submitAnswer;
      instance2.post(URL, data).then((response) => {
        // console.log(response, "this is answer submiited");
        setAnsSubmittedState(response.data.answer);
        setTime(timeLeft);
        setNextPress(undefined);
        // localStorage.setItem('quiz', JSON.stringify(quiz))

        // localStorage.setItem("quiz", quiz);
        // console.log("Answer submited");
      });
    } else {
      return;
    }
  }, [nextPress, timeLeft]);

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundColor: "#fff",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
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
    piechart_size: {
      width: 100,
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
    radio: {
      color: onHover && "#0A1596",
      // '&$checked': {
      //   color: '#0A1596',
      //   marginRight: "0.5rem"
      // }
    },
  }));

  const classes = useStyles();
  const navigate = useNavigate();

  const AnswerArrayPayloadForCloseTimerFunc = () => {
    let singleQuestionArray = [];
    // console.log(quiz, "this is the console of quiz");
    quiz?.map((item) => {
      if (
        item.hasOwnProperty("multipartQuestion") &&
        item?.multipartQuestion === null
      ) {
        if (!item.answer) {
          // console.log(item, 'hasdhasdhakssada')
          // console.log('inside single question')
          singleQuestionArray.push({
            questionId: item._id,
            timeleft: 0,
            totaltime: time ? time : 0,
            spendtime: timeLeft ? time - timeLeft : 0,
          });
        }
      } else {
        item?.question?.map((value) => {
          // console.log(value, 'asdjlkasjdlksajdkl')
          if (value?.multipartQuestion && !value?.answer) {
            // console.log("inside multipart questions");
            singleQuestionArray.push({
              questionId: value?._id,
              timeleft: 0,
              totaltime: time ? time : 0,
              spendtime: timeLeft ? time - timeLeft : 0,
            });
          }
        });
      }
    });
    return singleQuestionArray;
  };

  const CloseTimerFunc = async () => {
    setTimeEnd(true);
    try {
      const payload = {
        quiz: params?.state?.quizId,
        user: localStorage.getItem("userId"),
        sectionCategory: params?.state?.sectionCategory?._id,
        answer: AnswerArrayPayloadForCloseTimerFunc(),
      };
      // console.log(payload, "this is the console of payload");
      const URL = EndPoints.submitMultiquestionParagragh;
      instance2
        .post(URL, payload)
        .then((response) => {
          // console.log(
          //   response,
          //   "this is the console of response of closer time function"
          // );
        })
        .catch((error) => {
          // console.log("this is the consnole of error", error);
        });
      // console.log(quiz, 'this is the console of whole quiz inside closer timer function')
      // return await Promise.all(
      //   quiz?.map(async (item) => {
      //     if (!item.answer) {
      //       const data = {
      //         quiz: params?.state?.quizId,
      //         user: localStorage.getItem("userId"),
      //         questionId: item._id,
      //         sectionCategory: params?.state?.sectionCategory?._id,
      //         timeleft: 0,
      //         totaltime: time ? time : 0,
      //         spendtime: timeLeft ? time - timeLeft : 0,
      //       };
      //       console.log(data, 'this is the console of payload')
      //       const URL = EndPoints.submitAnswer;
      //       await instance2.post(URL, data).then((response) => {
      //         console.log(response, 'this is the console of response of close timer function')
      //       }).catch((error) => {
      //         console.log(error, 'this is the console of api catch error')
      //       })
      //     }
      //   })
      // );
    } catch (error) {
      // console.log("in catch block: ", error);
    }
  };

  const SelectFunc = (item, optionIndex) => {
    const questions = [...quiz];
    let question = questions[selectedIndex];
    question.selectedIndex = optionIndex;
    question.optionId = item._id;
    // localStorage.setItem('quiz', JSON.stringify(questions))
    setQuiz(questions);
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
      case 4:
        return "E";
      default:
        return "";
    }
  }

  const Options = (question, curentOption, optionIndex) => {
    if (question.answer && question.answer.option == curentOption._id) {
      return (
        <img src={Correct} style={{ marginLeft: ".45rem", width: "1.5rem" }} />
      );
    } else if (question.answer && curentOption._id == question?.optionId) {
      return (
        <img
          src={Wrong}
          style={{ marginLeft: "0.45rem", width: "1.5rem", color: "grey" }}
        />
      );
    } else if (question.answer && curentOption._id != question?.optionId) {
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
          color="blue"
          checked={true}
          style={{ marginRight: "0.5rem", color: "#0A1596" }}
        />
      );
    } else {
      return (
        <Radio
          color="primary"
          checked={false}
          style={{
            marginRight: "0.5rem",
            color: !question.answer && curentOption._id == onHover && "#0A1596",
          }}
        />
      );
    }
  };

  const getSubmitButton = (question) => {
    if (params?.state?.questionIndex != undefined) {
      return (
        <ResultFooter
          questionLength={quiz.length}
          questionIndex={selectedIndex}
          onResultHandler={() => {
            navigate("/resultsummary", {
              state: {
                sectionCategory: params?.state?.sectionCategory,
                quizId: params?.state?.quizId,
                time: params?.state?.time,
              },
            });
          }}
          onLeftClick={() => {
            setSelectedIndex((previousIndex) => previousIndex - 1);
            setCurrentQuestion((previousIndex) => previousIndex - 1);
          }}
          onRightClick={() => {
            setSelectedIndex((previousIndex) => previousIndex + 1);
            setCurrentQuestion((previousIndex) => previousIndex + 1);
          }}
        />
      );
    } else {
      return question.selectedIndex + 1 || question.answer ? (
        <Box
          onClick={() => Next(question)}
          padding={1}
          mt={2}
          mb={2}
          sx={{
            width: 600,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#0A1596",
            borderRadius: ".3rem",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "intialize",
              marginRight: "0.5rem",
              color: "#FFFFFF",
            }}
          >
            Svara
          </Typography>
        </Box>
      ) : (
        <Box
          padding={1}
          mt={2}
          mb={2}
          sx={{
            width: 600,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#e1e1e1",
            borderRadius: ".3rem",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "intialize",
              marginRight: "0.5rem",
              color: "#b4b4b4",
            }}
          >
            Svara
          </Typography>
        </Box>
      );
    }
  };

  const PopupHandler = () => {
    const checkPopup = params?.state?.questionIndex;
    if (checkPopup != undefined) {
    }
    // else if (
    //   (quiz[0].answer && quiz[0].multipartQuestion === null) ||
    //   (quiz &&
    //     quiz?.[0]?.question[0]?.answer &&
    //     quiz?.[0]?.question[0].multipartQuestion !== null)
    // ) {
    setOpen(true);
    // setIsOpen(false);
    // } else {
    //   setIsOpen(true);
    //   setOpen(false);
    // }
  };

  const handleAlertDialogPopup = () => {
    // console.log("clciccckced");
    if (
      (quiz && quiz?.[0]?.answer && quiz?.[0]?.multipartQuestion === null) ||
      (quiz &&
        quiz?.[0]?.question?.[0]?.answer &&
        quiz?.[0]?.question?.[0]?.multipartQuestion !== null)
    ) {
      navigate("/resultsummary", {
        state: {
          sectionCategory: params?.state?.sectionCategory,
          quizId: params?.state?.quizId,
          time: params?.state?.time,
        },
      });
      localStorage.removeItem("quiz");
      localStorage.removeItem("time");
    } else {
      // console.log("tyess");
      navigate("/category", {
        state: {
          item: params?.state?.sectionCategory,
        },
      });
      localStorage.removeItem("quiz");
    }
  };

  

  return (
    <>
      <CssBaseline />
      {helpPopup && <HelpPopup />}

      <AppBar
        color="#fff"
        className={classes.appbar}
        style={{
          boxShadow: "none",
        }}
        position="static"
      >
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" size="5rem" />
        </Backdrop>
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            onClick={PopupHandler}
            sx={{
              height: "8vh",
              width: "2.3rem",
              display: "flex",
              alignItems: "center",
              borderRight: "1px solid #E1E1E1",
              cursor: "pointer",
            }}
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>

          <Typography
            variant="body1"
            style={{ fontSize: "1.5rem", fontWeight: 400 }}
            className={classes.center_align}
          >
            {params?.state?.sectionCategory?.title}
          </Typography>

          <Box onClick={() => setHelpPopup(!helpPopup)}>
            <HelpOutlineIcon sx={{ cursor: "pointer" }} />
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="false"
        style={{
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        {(time || (!time && !params?.state?.data?.value)) && (
          <Header
            selectedIndex={currentQuestion}
            totalQuestions={totalQuestions}
            params={params?.state?.data}
            status={time && status}
            time={time && time}
            nextPress={() => setNextPress(true)}
            onCloseTimer={() => CloseTimerFunc()}
            quiz={quiz}
            timeLeft={(timer) => {
              setTimeLeft(timer);
            }}
            callBackForTimer={(value) => setTimeLeft(value)}
          />

        )}
        {(quiz && quiz?.[0]?.answer && quiz?.[0]?.multipartQuestion === null) ||
        (quiz &&
          quiz?.[0]?.question?.[0]?.answer &&
          quiz?.[0]?.question?.[0]?.multipartQuestion !== null) ? (
          <AlertDialogSlide
            title={"Vill du avsluta?"}
            description={"Du tas nu till summeringssidan."}
            cancelBtnName={"Fortsätt öva"}
            agreeBtnName={"Avsluta"}
            popUpstatus={open}
            handleClose={() => setOpen(false)}
            redirect={() => handleAlertDialogPopup()}
          />
        ) : !quiz?.[0]?.answer || !quiz?.[0]?.question?.[0]?.answer ? (
          <AlertDialogSlide
            title={"Vill du avsluta?"}
            description={"Ingen fråga är besvarad."}
            cancelBtnName={"Fortsätt öva"}
            agreeBtnName={"Avsluta"}
            popUpstatus={open}
            handleClose={() => setOpen(false)}
            redirect={() => handleAlertDialogPopup()}
          />
        ) : null}

        {(quiz && quiz?.[0]?.answer && quiz?.[0]?.multipartQuestion === null) ||
        (quiz &&
          quiz?.[0]?.question?.[0]?.answer &&
          quiz?.[0]?.question?.[0]?.multipartQuestion !== null) ? (
          <DropPenPopup
            title={"Tiden är över."}
            description={"Bra kämpat! Gå vidare och checka ditt resultat."}
            btnName={"Se resultat"}
            popUpstatus={timeEnd}
            redirect={() => {
              navigate("/resultsummary", {
                state: {
                  sectionCategory: params?.state?.sectionCategory,
                  quizId: params?.state?.quizId,
                  time: params?.state?.time,
                },
              });
              localStorage.removeItem("quiz");
              localStorage.removeItem("time");
            }}
          />
        ) : !quiz?.[0]?.answer || !quiz?.[0]?.question?.[0]?.answer ? (
          <UnAttemptedTimer
            title={"Tiden är över."}
            description={
              "Ingen fråga är besvarad så du tas direkt tillbaka till övningssidan."
            }
            btnName={"Avsluta"}
            popUpstatus={timeEnd}
            redirect={() => {
              navigate("/category", {
                state: {
                  item: params?.state?.sectionCategory,
                },
              });
              localStorage.removeItem("quiz");
            }}
          />
        ) : null}

        {quiz &&
          quiz?.map((item, index) => {
            if (index === selectedIndex) {
              return (
                <QuestionBody
                  question={quiz[selectedIndex]}
                  totalQuestions={totalQuestions}
                  selectedOption={params.state.selectedOption}
                  paragraphIndex={params?.state?.paragraphIndex}
                  questionIndex={params?.state?.questionIndex}
                  questionTypeTitle={params?.state.sectionCategory.title}
                  selectedIndex={selectedIndex}
                  onLeftClick={() => {
                    setCurrentQuestion((previousIndex) => previousIndex - 1);
                    setSelectedIndex((previousIndex) => previousIndex - 1);
                  }}
                  onRightClick={() => {
                    setCurrentQuestion((previousIndex) => previousIndex + 1);
                    setSelectedIndex((previousIndex) => previousIndex + 1);
                  }}
                  stopTime={() => setStatus(false)}
                  SelectOption={(e, index) => SelectFunc(e, index)}
                  onCloseTimer={() => CloseTimerFunc()}
                  callBackForTimer={(value) => setTimeLeft(value)}
                  totalTime={time}
                  quiz={quiz}
                  onhover={(optionId) => setOnhover(optionId)}
                  onHoverLeave={() => setOnhover(null)}
                  sectionCategory={params?.state?.sectionCategory}
                  onResultHandler={() => {
                    navigate("/resultsummary", {
                      state: {
                        sectionCategory: params?.state?.sectionCategory,
                        quizId: params?.state?.quizId,
                        time: params?.state?.time,
                      },
                    });
                    localStorage.removeItem("quiz");
                    localStorage.removeItem("time");
                  }}
                  startTime={() => setStatus(true)}
                  showOptions={(question, item, optionIndex) =>
                    Options(question, item, optionIndex)
                  }
                  updateQuiz={(value) => setQuiz(value)}
                  changeIndex={() => setCurrentQuestion(currentQuestion + 1)}
                  previosQuestion={() =>
                    setCurrentQuestion(currentQuestion - 1)
                  }
                  OptionValue={(optionIndex) => OptionIndex(optionIndex)}
                  submitButton={(question) => getSubmitButton(question)}
                  quizId={params?.state?.quizId}
                  timeLeft={timeLeft}
                  PopupTimeEnd={timeEnd}
                  updateCompleteQuiz={(quiz) => setQuiz(quiz)}
                  nextQuestion={() => {
                    if (selectedIndex + 1 < quiz.length) {
                      setSelectedIndex(selectedIndex + 1);
                      setCurrentQuestion(currentQuestion + 1);
                      localStorage.setItem("quiz", JSON.stringify(quiz));
                    } else {
                      navigate("/resultsummary", {
                        state: {
                          sectionCategory: params?.state?.sectionCategory,
                          quizId: params?.state?.quizId,
                          time: params?.state?.time,
                        },
                      });
                      localStorage.removeItem("quiz");
                      localStorage.removeItem("time");
                    }
                  }}
                />
              );
            }
          })}
      </Container>
    </>
  );
};

export default QuestionViewXyzOrg;
