import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Paper,
  Box,
  CssBaseline,
  Radio,
  Toolbar,
  Container,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Correct from "../../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import { EndPoints, instance2 } from "../../../../../service/Route";
import LeftArrow from "../../../../../../assets/Icons/LeftArrow.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AlertDialogSlide from "../../../../../molecule/QuitTaskPopup/QuitTaskPopup";
import DropPenPopup from "../../../../../molecule/DropPenPopup/DropPenPopup";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import UnAttemptedPopup from "../../../../../molecule/UnAttemptedPopup/UnAttemptedPopup";
import UnAttemptedTimer from "../../../../../molecule/UnAttemptedTimer/UnAttemptedTimer";
import QuestionBody from "../../../../../atom/QuestionBody/questionBody";
import Header from "../../../../../atom/Header/header";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import HelpPopup from "../../../../../atom/HelpPopup/HelpPopup";

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

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    const questionToShow = params?.state?.questionIndex;
    if (questionToShow != undefined) {
      setSelectedIndex(questionToShow);
      setQuiz(params?.state?.quiz.question);
      setTotalQuestions(params?.state?.quiz?.question.length);
      setLoading(false);
    } else {
      // const URL = EndPoints.getQuizOnRefreshPage + params?.state.quizId;
      // instance2.get(URL).then((response) => {
      let totalQ = 0;
      params.state.data.quiz &&
        params.state.data.quiz.map((item) => {
          setLoading(false);
          if (item.description) {
            setTotalQuestions((totalQ) => totalQ + item?.question?.length);
            totalQ = totalQ + item?.question?.length;
          } else {
            totalQ = totalQ + 1;
            setTotalQuestions((totalQ) => totalQ + 1);
          }
        });
      setTime(params.state.sectionCategory.time * totalQ *60);
      setStatus(false);
      setQuiz(params.state.data.quiz);
    }
  }, []);

  const Next = (question) => {
    if (question.answer) {
      if (selectedIndex + 1 == quiz.length) {
        localStorage.setItem("quizId", params?.state?.quizId);
        navigate("/resultsummary", {
          state: {
            sectionCategory: params?.state?.sectionCategory,
            quizId: params?.state?.quizId,
          },
        });
      } else {
        setStatus(true);
        selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1);
      }
    } else {
      if (question.selectedIndex + 1) {
        const questions = [...quiz];
        let ques = questions[selectedIndex];
        const URL = EndPoints.getAnswerByQuestionId + ques._id;
        instance2.get(URL).then((response) => {
          ques.answer = response.data;
          ques.answerSubmited = true;
          setNextPress(!nextPress);
          setQuiz(questions);
          setStatus(false);
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
        quiz: params?.state?.data?._id,
        user: localStorage.getItem("userId"),
        optionId: question.optionId,
        questionId: question._id,
        sectionCategory: params?.state?.sectionCategory._id,
        timeleft: timeLeft ? timeLeft : 0,
        totaltime: time ? time : 0,
        spendtime: timeLeft ? time - timeLeft : 0,
        MultipartQuestion: null,
      };
      const Submit = EndPoints.submitAnswer;
      instance2.post(Submit, data).then((response) => {
        setTime(timeLeft);
        setNextPress(undefined);
        console.log("Answer submited");
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

  const CloseTimerFunc = async () => {
    setTimeEnd(true);
    try {
      return await Promise.all(
        quiz.map(async (item) => {
          if (!item.answer) {
            const data = {
              quiz: params?.state?.data?._id,
              user: localStorage.getItem("userId"),
              questionId: item._id,
              sectionCategory: params?.state?.sectionCategory._id,
              timeleft: 0,
              totaltime: time ? time : 0,
              spendtime: timeLeft ? time - timeLeft : 0,
            };
            const URL = EndPoints.submitAnswer;
            await instance2.post(URL, data).then((response) => {});
          }
        })
      );
    } catch (error) {
      console.log("in catch block: ", error);
    }
  };

  const SelectFunc = (item, optionIndex) => {
    const questions = [...quiz];
    let question = questions[selectedIndex];
    question.selectedIndex = optionIndex;
    question.optionId = item._id;
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
        <img src={Wrong} style={{ marginLeft: "0.45rem", width: "1.5rem" }} />
      );
    }
    // else {
    //   return <Radio color="primary" checked={false} />;
    // }
    if (optionIndex == question.selectedIndex) {
      return (
        <Radio
          color="blue"
          checked={true}
          // className={classes.radio}
          style={{ marginRight: "0.5rem", color: "#0A1596" }}
        />
      );
    } else {
      return (
        <Radio
          color="primary"
          checked={false}
          // className={classes.radio}
          style={{
            marginRight: "0.5rem",
            color: curentOption._id == onHover && "#0A1596",
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
              },
            });
          }}
          onLeftClick={() => {
            setSelectedIndex((previousIndex) => previousIndex - 1);
          }}
          onRightClick={() => {
            setSelectedIndex((previousIndex) => previousIndex + 1);
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
    } else if (quiz[0].answer) {
      setOpen(true);
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setOpen(false);
    }
  };

  return (
    <>
      <CssBaseline />
      {helpPopup && <HelpPopup />}
      {/* {helpPopup && <BackDrop />} */}

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
            {params.state.sectionCategory.title}
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
        {(time || (!time && !params?.state?.data.value)) &&
          <Header
            selectedIndex={selectedIndex}
            totalQuestions={totalQuestions}
            params={params?.state?.data}
            status={time && status}
            time={time}
            nextPress={() => setNextPress(!nextPress)}
            onCloseTimer={() => CloseTimerFunc()}
            quiz={quiz}
            timeLeft={(timer) => {
              setTimeLeft(timer);
            }}
          />
        }

        <AlertDialogSlide
          popUpstatus={open}
          handleClose={() => setOpen(false)}
          redirect={() => {
            const filteredQuiz = quiz.filter((item) => {
              if (item.answer) {
                return item;
              }
            });
            navigate("/resultsummary", {
              state: {
                sectionCategory: params?.state?.sectionCategory,
                quizId: params?.state?.quizId,
              },
            });
          }}
        />

        {params?.state?.data?.quiz[0]?.answer ? (
          <DropPenPopup
            popUpstatus={timeEnd}
            redirect={() => {
              navigate("/resultsummary", {
                state: {
                  sectionCategory: params?.state?.sectionCategory,
                  quizId: params?.state?.quizId,
                },
              });
            }}
          />
        ) : (
          <UnAttemptedTimer
            popUpstatus={timeEnd}
            redirect={() =>
              navigate("/category", {
                state: {
                  item: params?.state?.sectionCategory,
                },
              })
            }
          />
        )}

        <UnAttemptedPopup
          currentStatus={isOpen}
          handleOptionClose={() => setIsOpen(false)}
          redirect={() =>
            navigate("/category", {
              state: {
                item: params?.state?.sectionCategory,
              },
            })
          }
        />

        {quiz &&
          quiz.map((item, index) => {
            if (index === selectedIndex) {
              // if (index !== item.answer) {
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
                    setSelectedIndex((previousIndex) => previousIndex - 1);
                  }}
                  onRightClick={() => {
                    setSelectedIndex((previousIndex) => previousIndex + 1);
                  }}
                  stopTime={() => setStatus(false)}
                  SelectOption={(e, index) => SelectFunc(e, index)}
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
                      },
                    });
                  }}
                  startTime={() => setStatus(true)}
                  showOptions={(question, item, optionIndex) =>
                    Options(question, item, optionIndex)
                  }
                  OptionValue={(optionIndex) => OptionIndex(optionIndex)}
                  submitButton={(question) => getSubmitButton(question)}
                  quizId={params?.state?.data?._id}
                  timeLeft={timeLeft}
                  nextQuestion={() => {
                    if (selectedIndex + 1 < quiz.length) {
                      setSelectedIndex(selectedIndex + 1);
                    } else {
                      navigate("/resultsummary", {
                        state: {
                          sectionCategory: params?.state?.sectionCategory,
                          quizId: params?.state?.quizId,
                        },
                      });
                    }
                  }}
                />
              );
              // }
            }
          })}
      </Container>
    </>
  );
};

export default QuestionViewXyzOrg;
