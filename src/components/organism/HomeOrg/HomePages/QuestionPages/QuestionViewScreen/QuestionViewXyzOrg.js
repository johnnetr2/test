import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import BarChart from "../../../../../../assets/Icons/BarChart.svg";
import Clock from "../../../../../../assets/Icons/Clock.svg";
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
import Timer from "../../../../../atom/Timer/timer";
import LeftArrow from "../../../../../../assets/Icons/LeftArrow.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AlertDialogSlide from "../../../../../molecule/QuitTaskPopup/QuitTaskPopup";
import DropPenPopup from "../../../../../molecule/DropPenPopup/DropPenPopup";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import UnAttemptedPopup from "../../../../../molecule/UnAttemptedPopup/UnAttemptedPopup";
import UnAttemptedTimer from "../../../../../molecule/UnAttemptedTimer/UnAttemptedTimer";
import QuestionBody from "../../../../../atom/QuestionBody/questionBody";

const QuestionViewXyzOrg = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quiz, setQuiz] = useState();
  const params = useLocation();
  const [status, setStatus] = useState(true);
  const [timeLeft, setTimeLeft] = useState();
  const time = 5;
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timeEnd, setTimeEnd] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


  const Next = (question) => {
    if (question.answerSubmited) {
      if (selectedIndex + 1 == quiz.length) {
        localStorage.setItem('quizId', params?.state?.quizId)
        navigate("/resultsummary", {
          state: {
            // quizId: params?.state?.data?._id,
            sectionCategory: params?.state?.sectionCategory,
            timeLeft: timeLeft,
            totalTime: time,
            quiz: quiz,
            quizId: params?.state?.quizId
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
        const URL = EndPoints.getAnswerByQuestionId + ques.question._id;
        instance2.get(URL).then((response) => {
          ques.answer = response.data;
          ques.answerSubmited = true;
          setQuiz(questions);
          setStatus(false);
        });
        const data = {
          quiz: params?.state?.data?._id,
          user: localStorage.getItem("userId"),
          optionId: question.selectedOptionID,
          questionId: question.question._id,
          sectionCategory: params?.state?.sectionCategory._id,
          timeleft: timeLeft ? timeLeft : null,
          totaltime: time ? time * 60 : null,
          spendtime: timeLeft ? time * 60 - timeLeft : null,
          MultipartQuestion: null
        };
        const Submit = EndPoints.submitAnswer;
        instance2.post(Submit, data).then((response) => {
          console.log('Answer submited')
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
  }));

  const classes = useStyles();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const questionToShow = params?.state?.paragraphIndex;
    if (questionToShow != undefined) {
      setSelectedIndex(questionToShow);
      setQuiz(params?.state?.quiz);
    } else if (params?.state?.questionIndex != undefined) {
      setSelectedIndex(params?.state?.questionIndex);
      setQuiz(params?.state?.quiz);
    } else {
      setQuiz(params?.state?.data?.quiz);
    }
  }, []);

  const CloseTimerFunc = async () => {
    setTimeEnd(true)

    try {
      return await Promise.all(
        quiz.map(async (item) => {
          if (!item.answerSubmited) {
            const data = {
              quiz: params?.state?.data?._id,
              user: localStorage.getItem("userId"),
              questionId: item.question._id,
              sectionCategory: params?.state?.sectionCategory._id,
              timeleft: timeLeft ? timeLeft : null,
              totaltime: time ? time * 60 : null,
              spendtime: timeLeft ? time * 60 - timeLeft : null,
            }
            const URL = EndPoints.submitAnswer
            await instance2.post(URL, data).then(response => {
              console.log(response)
            })
          }
        })
      )
    } catch (error) {
      console.log('in catch block')
    }
  }


  const SelectFunc = (e, optionIndex) => {
    const questions = [...quiz];
    let question = questions[selectedIndex];
    question.selectedIndex = optionIndex;
    question.selectedOptionID = e.target.value;
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
      default:
        return "";
    }
  }

  const Options = (question, curentOption, optionIndex) => {
    if (question.answer && question.answer.option == curentOption._id) {
      return <img src={Correct} style={{ marginRight: "0.5rem" }} />;
    } else if (question.answer && optionIndex == question.selectedIndex) {
      return <img src={Wrong} style={{ marginRight: "0.5rem" }} />;
    }
    if (optionIndex == question.selectedIndex) {
      return <Radio color="primary" checked={true} />;
    } else {
      return <Radio color="primary" checked={false} />;
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
                // quizId: params?.state?.prevState?.quizId,
                sectionCategory: params?.state?.sectionCategory,
                timeLeft: params?.state?.prevState?.timeLeft,
                totalTime: params?.state?.prevState?.totalTime,
                quiz: quiz,
                quizId: params?.state?.quizId
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
      return question.selectedIndex + 1 ? (
        <Box
          onClick={() => Next(question)}
          padding={1}
          mt={2}
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
              textTransform: "uppercase",
              marginRight: "0.5rem",
              color: "#FFFFFF",
            }}
          >
            Nästa
          </Typography>
        </Box>
      ) : (
        <Box
          padding={1}
          mt={2}
          sx={{
            width: 600,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "grey",
            borderRadius: ".3rem",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              marginRight: "0.5rem",
              color: "#FFFFFF",
            }}
          >
            Nästa
          </Typography>
        </Box>
      );
    }
  };


  const PopupHandler = () => {
    const checkPopup = params?.state?.quiz;
    if (checkPopup[0].answerSubmited == true) {
      setOpen(true);
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setOpen(false);
    }
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        color="#fff"
        className={classes.appbar}
        style={{ boxShadow: "none" }}
        position="absolute"
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            // onClick={() =>
            //   params?.state?.questionIndex != undefined
            //     ? setIsOpen(true)
            //     : setOpen(true)
            // }
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

          <Typography variant="body1" className={classes.center_align}>
            {params.state.sectionCategory.title}
          </Typography>

          <Box>
            <HelpOutlineIcon sx={{ cursor: "pointer" }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        style={{ backgroundColor: "#fff", height: "fit-content" }}
      >
        <Container
          disableGutters
          maxWidth="Xl"
          style={{ backgroundColor: "#fff" }}
        >
          <Box mt={8} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box mt={2} width={100} sx={{ color: "#222" }}>
              <img src={BarChart} alt="" />
              {selectedIndex + 1} av {quiz?.length}
            </Box>
            {params.state.data && params.state.data.value == true && (
              <Box
                mt={2}
                sx={{ color: "#222", display: "flex", flexDirection: "row" }}
              >
                <img src={Clock} alt="" />
                <Timer
                  continueStatus={status}
                  time={time}
                  timeleft={(timer) => setTimeLeft(timer)}
                  onCloseTimer={() => CloseTimerFunc()}
                />
              </Box>
            )}
          </Box>

          <Box
            mt={2}
            sx={{
              backgroundColor: "#b4b4b4",
              height: "8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {quiz &&
              quiz?.map((item, index) => {
                <Box
                  key={index}
                  style={{
                    backgroundColor: item.answerSubmited
                      ? "#6fcf97"
                      : "#B4B4B4",
                    marginLeft: "2px",
                    flex: "1",
                  }}
                ></Box>

              })}
          </Box>
        </Container>

        <AlertDialogSlide
          popUpstatus={open}
          handleClose={() => setOpen(false)}
          redirect={() => {
            const filteredQuiz = quiz.filter((item) => {
              if (item.answerSubmited) {
                return item;
              }
            });
            navigate("/resultsummary", {
              state: {
                // quizId: params?.state?.data?._id,
                sectionCategory: params?.state?.sectionCategory,
                timeLeft: params?.state?.prevState?.timeLeft,
                totalTime: params?.state?.prevState?.totalTime,
                quiz: quiz,
                quizId: params?.state?.quizId
              },
            });
          }}
        />

        {params?.state?.data?.quiz[0]?.answerSubmited == true ? (
          <DropPenPopup
            popUpstatus={timeEnd}
            redirect={() => {
              navigate("/resultsummary", {
                state: {
                  sectionCategory: params?.state?.sectionCategory,
                  timeLeft: params?.state?.prevState?.timeLeft,
                  totalTime: params?.state?.prevState?.totalTime,
                  quiz: quiz,
                  quizId: params?.state?.quizId
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

        {quiz && quiz.map((item, index) => {
          if (index === selectedIndex) {
            return <QuestionBody question={quiz[selectedIndex]}
              selectedOption={params.state.selectedOption}
              paragraphIndex={params?.state?.paragraphIndex} questionIndex={params?.state?.questionIndex}
              selectedIndex={selectedIndex} onLeftClick={() => { setSelectedIndex((previousIndex) => previousIndex - 1) }}
              onRightClick={() => { setSelectedIndex((previousIndex) => previousIndex + 1) }}
              stopTime={() => setStatus(false)} SelectOption={(e, index) => SelectFunc(e, index)}
              totalTime={time} quiz={quiz} sectionCategory={params?.state?.sectionCategory}
              onResultHandler={() => {
                navigate("/resultsummary", {
                  state: {
                    sectionCategory: params?.state?.sectionCategory,
                    timeLeft: params?.state?.prevState?.timeLeft,
                    totalTime: params?.state?.prevState?.totalTime,
                    quiz: quiz,
                    quizId: params?.state?.quizId
                  },
                });
              }}
              startTime={() => setStatus(false)} showOptions={(question, item, optionIndex) => Options(question, item, optionIndex)}
              OptionValue={(optionIndex) => OptionIndex(optionIndex)} submitButton={(question) => getSubmitButton(question)}
              quizId={params?.state?.data?._id} timeLeft={timeLeft}
              nextQuestion={() => {
                if (selectedIndex + 1 < quiz.length) {
                  setSelectedIndex(selectedIndex + 1)
                } else {
                  navigate("/resultsummary", {
                    state: {
                      sectionCategory: params?.state?.sectionCategory,
                      timeLeft: params?.state?.timeLeft,
                      totalTime: params?.state?.totalTime,
                      quiz: quiz,
                      quizId: params?.state?.quizId
                    },
                  })
                }
              }}
            />
          }
        })

        }
      </Container>
    </div>
  );
};

export default QuestionViewXyzOrg;
