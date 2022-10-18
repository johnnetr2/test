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
import { EndPoints, instance2 } from "../../../../../service/Route";
import React, { useEffect, useState } from "react";
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
import UnAttemptedTimer from "../../../../../molecule/UnAttemptedTimer/UnAttemptedTimer";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const QuestionViewXyzOrg = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quiz, setQuiz] = useState();
  const params = useLocation();
  const [status, setStatus] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [time, setTime] = useState(0);
  const [open, setOpen] = useState(false);
  const [timeEnd, setTimeEnd] = useState(false);
  const [nextPress, setNextPress] = useState(undefined);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [helpPopup, setHelpPopup] = useState(false);
  const [onHover, setOnhover] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answerSubmittedState, setAnsSubmittedState] = useState();
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(true);
  let [remainingTime, setRemainingTime] = useState(0);
  var timer;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
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
        setTime((params.state.sectionCategory.time * totalQ * 60).toFixed(0));
        // setTime(30);
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
        setTime((params.state.sectionCategory.time * totalQ * 60).toFixed(0));
        // setTime(30);
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

  useEffect(() => {
    if (
      nextPress &&
      quiz?.length > 0 &&
      (timeLeft || (!params?.state?.data.value && !timeLeft))
    ) {
      // console.log("121213331");
      setRemainingTime((remainingTime) => remainingTime + (time - timeLeft));
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
        spendtime: params.state.time ? time - timeLeft : seconds,
        MultipartQuestion: null,
        isTimeRestricted: params?.state?.time,
      };
      const URL = EndPoints.submitAnswer;
      instance2.post(URL, data).then((response) => {
        setAnsSubmittedState(response.data);
        console.log(response.data, "answer submit");
        setTime(timeLeft);
        setNextPress(undefined);
      });
    } else {
      return;
    }
  }, [nextPress, timeLeft && !quiz[0]?.type == "multiple"]);

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [!params.state.time && startTimer]);

  const Next = (question) => {
    setStartTimer(false);
    if (question.answer) {
      if (selectedIndex + 1 == quiz.length) {
        if (
          answerSubmittedState.answer.length ===
          answerSubmittedState.totalQuestion
        ) {
          // trackEndTest();
          navigate("/resultsummary", {
            state: {
              sectionCategory: params?.state?.sectionCategory,
              quizId: params?.state?.quizId,
              spendtime: answerSubmittedState,
              time: params?.state?.time,
            },
          });
        }
        localStorage.removeItem("time");
        localStorage.removeItem("quiz");
      } else {
        setSeconds(0);
        setStatus(true);
        setStartTimer(true);
        selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1);
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      if (question.selectedIndex + 1) {
        const questions = [...quiz];
        let ques = questions[selectedIndex];
        const URL = EndPoints.getAnswerByQuestionId + ques._id;
        instance2.get(URL).then((response) => {
          ques.answer = response?.data;
          ques.answerSubmited = true;
          !params?.state?.data?.value && setNextPress(!nextPress);
          localStorage.setItem("quiz", JSON.stringify(questions));
          setQuiz(questions);
          setStatus(false);
        });
      }
    }
  };

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
    },
  }));

  const classes = useStyles();
  const navigate = useNavigate();

  const AnswerArrayPayloadForCloseTimerFunc = () => {
    // console.log("AnswerArrayPayloadForCloseTimerFunc", quiz);

    let singleQuestionArray = [];
    // console.log("ajhdkjahdakdhasjhdashkdhaskhd", quiz);
    quiz?.map((item) => {
      if (
        item.hasOwnProperty("multipartQuestion") &&
        item?.multipartQuestion === null
      ) {
        // console.log(item, "test quiz item"); //as we solve the quiz key key will be appended into quiz obj
        if (!item.answer) {
          // console.log(
          //   singleQuestionArray.length,
          //   "length of single question array"
          // );
          if (singleQuestionArray.length < 1) {
            // console.log("remainingTime", remainingTime);
            // console.log("remainingTime time", time);
            singleQuestionArray.push({
              questionId: item._id,
              totaltime: time ? time : 0, //22
              spendtime: time, //14 = 22 - 8
              timeleft: time - (time - remainingTime), //8 = 22 - 14
              // spendtime: (params.state.sectionCategory.time * quiz.length * 60) - remainingTime,
            });
          } else {
            // console.log("else case");
            singleQuestionArray.push({
              questionId: item._id,
              timeleft: 0,
              totaltime: time ? time : 0,
              spendtime: 0,
            });
          }
        }
      } else {
        // console.log("asgajsgj", item?.question?.length);
        item?.question?.map((multipartQuestion) => {
          if (!multipartQuestion.answer) {
            if (singleQuestionArray.length < 1) {
              // console.log("remainingTime", remainingTime);
              // console.log("remainingTime time", time);
              singleQuestionArray.push({
                questionId: multipartQuestion?._id,
                totaltime: time ? time : 0, //22
                spendtime: time - remainingTime, //14 = 30 - 3
                timeleft: 0, //8 = 22 - 14
              });
            } else {
              // console.log("questionId", multipartQuestion?._id);

              singleQuestionArray.push({
                questionId: multipartQuestion?._id,
                timeleft: 0,
                totaltime: time ? time : 0,
                spendtime: 0,
              });
            }
          }
          return multipartQuestion;
          // else {
          //   singleQuestionArray.push({
          //     questionId: value?._id,
          //     timeleft: 0,
          //     totaltime: time ? time : 0,
          //     spendtime: 0,
          //   });
          // }
        });
      }
      return item;
    });
    // console.log("single question array", singleQuestionArray);

    return singleQuestionArray;
  };

  const CloseTimerFunc = async () => {
    // console.log("close timer function");
    setTimeEnd(true);
    try {
      const payload = {
        quiz: params?.state?.quizId,
        user: localStorage.getItem("userId"),
        sectionCategory: params?.state?.sectionCategory?._id,
        answer: AnswerArrayPayloadForCloseTimerFunc(),
      };
      // console.log(payload, "popup function call");
      const URL = EndPoints.submitMultiquestionParagragh;
      instance2
        .post(URL, payload)
        .then((response) => {
          console.log(response, "submitted multipart paragraph");
        })
        .catch((error) => {
          console.log("this is the consnole of error", error);
        });
    } catch (error) {
      console.log("in catch block: ", error);
    }
  };

  const SelectFunc = (item, optionIndex) => {
    const questions = [...quiz];
    let question = questions[selectedIndex];
    question.selectedIndex = optionIndex;
    question.optionId = item._id;
    // console.log(questions, "test option index question view xyz org");
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
    if (question.answer && question.answer.option === curentOption._id) {
      return (
        <img
          src={Correct}
          style={{ marginLeft: ".45rem", width: "1.5rem" }}
          alt=""
        />
      );
    } else if (question.answer && curentOption._id === question?.optionId) {
      return (
        <img
          src={Wrong}
          style={{ marginLeft: "0.45rem", width: "1.5rem", color: "grey" }}
          alt=""
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

    if (optionIndex === question.selectedIndex) {
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
            color:
              !question.answer && curentOption._id === onHover && "#0A1596",
          }}
        />
      );
    }
  };

  const getSubmitButton = (question) => {
    if (params?.state?.questionIndex !== undefined) {
      return (
        <ResultFooter
          questionLength={quiz.length}
          questionIndex={selectedIndex}
          onResultHandler={() => {
            // trackEndTest();
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
            width: "100%",
            maxWidth: 600,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#0A1596",
            borderRadius: ".3rem",
            cursor: "pointer",
            marginBottom: "2.2rem",
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
            {question.answer ? "Nästa" : "Svara"}
          </Typography>
        </Box>
      ) : (
        <Box
          padding={1}
          mt={2}
          mb={2}
          sx={{
            width: "100%",
            maxWidth: 600,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#e1e1e1",
            borderRadius: ".3rem",
            cursor: "pointer",
            marginBottom: "1.2rem",
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
    if (checkPopup !== undefined) {
      navigate('/category',  {state: {
        item: params?.state?.sectionCategory,
      }});

    }else if (quiz?.[0]?.answer || quiz?.[0]?.question?.[0].answer) {
      setOpen(true);
    } else {
      navigate(-1);
    }
  };

  const handleAlertDialogPopup = () => {
    if (
      (quiz && quiz?.[0]?.answer && quiz?.[0]?.multipartQuestion === null) ||
      (quiz &&
        quiz?.[0]?.question?.[0]?.answer &&
        quiz?.[0]?.question?.[0]?.multipartQuestion !== null)
    ) {
      // trackEndTest();
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
        disableGutters
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
              // trackEndTest();
              localStorage.removeItem("quiz");
              localStorage.removeItem("time");

              setTimeout(() => {
                navigate("/resultsummary", {
                  state: {
                    sectionCategory: params?.state?.sectionCategory,
                    quizId: params?.state?.quizId,
                    time: params?.state?.time,
                  },
                });
              }, 2000);
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
                  isTimeRestricted={params?.state?.time}
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
                  // onCloseTimer={() => CloseTimerFunc()}
                  callBackForTimer={(value) => setTimeLeft(value)}
                  totalTime={time}
                  quiz={quiz}
                  onhover={(optionId) => setOnhover(optionId)}
                  onHoverLeave={() => setOnhover(null)}
                  sectionCategory={params?.state?.sectionCategory}
                  onResultHandler={() => {
                    // trackEndTest();
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
                  // changeTime={(time) => setTime(time)}
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
                      // trackEndTest();
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
