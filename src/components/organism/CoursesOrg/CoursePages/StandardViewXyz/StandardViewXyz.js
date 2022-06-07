import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import BarChart from "../../../../../assets/Icons/BarChart.svg";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
import StarIcon from "../../../../../assets/Icons/StarIcon.svg";
import Clock from "../../../../../assets/Icons/Clock.svg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  Typography,
  AppBar,
  Paper,
  Box,
  CssBaseline,
  Radio,
  Button,
  FormControlLabel,
  Toolbar,
  Container,
} from "@material-ui/core";
import MarkLatex from '../../../../atom/Marklatex/MarkLatex'
import Correct from "../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../assets/Imgs/wrong.png";
import { useNavigate, useLocation } from "react-router-dom";
import WhiteStar from "../../../../../assets/Imgs/whiteStar.png";
import { instance2, EndPoints } from '../../../../service/Route'
import Timer from "../../../../atom/Timer/timer";
import ProvPassDtk from '../ProvPassDtk/ProvPassDtk'
import TestOverPopup from '../../../../molecule/TestOverPopup/TestOverPopup'
import BackButtonPopup from '../../../../molecule/BackButtonPopup/BackButtonPopup'
import Increment from "../../../../../assets/Icons/Increment.svg";
import Decrement from "../../../../../assets/Icons/Decrement.svg";

const StandardViewXyz = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const params = useLocation()
  const [quiz, setQuiz] = useState()
  const [status, setStatus] = useState(true)
  const [timeOverPopUp, setTimeOverPopUp] = useState(false)
  const [time, setTime] = useState()
  const [SubmitedQuestions, setSubmitedQuestions] = useState([])
  const [backPressPopup, setBackPressPopup] = useState(false)
  const [timeLeft, setTimeLeft] = useState()
  const [shouldNavigate, setShouldNavigate] = useState(false)


  useEffect(() => {
    // console.log(params.state.timeLeft, 'this is state')
    if (params?.state?.questionIndex != undefined) {
      setTime(params?.state?.timeLeft)
      setQuiz(params?.state?.quiz)
      setCurrentIndex(params?.state?.questionIndex)
      } else {
      const URL = EndPoints.getSimuleraQuiz + params.state.id
      instance2.get(URL).then(response => {
        setQuiz(response.data.simuleraQuiz)
        setTime(3300)
      })
    }
  }, [])

  useEffect(() => {
    if (shouldNavigate) {
      console.log(timeLeft, 'this is useeffect')
      navigate('/overblick', {
        state: {
          quiz: quiz,
          SubmitedQuestions,
          simuleraQuiz: quiz?._id,
          simuleraSeason: quiz?.season,
          timeLeft
        }
      })

    }
  }, [timeLeft])


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

  const Options = (question, option, optionIndex) => {
    if (question.answer && question.answer.option == option._id) {
      return <img src={Correct} style={{ marginRight: "0.5rem" }} />;
    } else if (question.answer && option._id === question?.optionId) {
      return <img src={Wrong} style={{ marginRight: "0.5rem" }} />;
    }
    // else {
    //   return <Radio color="primary" checked={false} />;
    // }
    if (optionIndex === question.selectedOptionIndex) {
      return <Radio color="primary" checked={true} style={{ marginRight: "0.5rem" }} />;
    } else {
      return <Radio color="primary" checked={false} style={{ marginRight: "0.5rem" }} />;
    }
  };

  const SelectFunc = (e, optionIndex) => {
    let allQuiz = { ...quiz }
    const qz = allQuiz?.simuleraQuestion
    let question = qz[currentIndex];
    question.selectedOptionIndex = optionIndex;
    question.optionId = e.target.value;
    allQuiz.question = qz
    setQuiz(allQuiz)

    let data = {
      simuleraQuestion: question._id,
      optionId: e.target.value,
      timeleft: 0,
      totaltime: 0,
      spendtime: 0
    }

    let questions = [...SubmitedQuestions]

    const exist = questions.some(obj => obj.simuleraQuestion === question._id)
    if (exist) {
      const ind = questions.findIndex(obj => obj.simuleraQuestion === question._id)
      questions.splice(ind, 1, data)
      setSubmitedQuestions(questions)
    } else {
      questions.push(data);
      setSubmitedQuestions(questions);
    }
  };

  const flagQuestion = () => {
    let allQuiz = { ...quiz }
    const qz = allQuiz?.simuleraQuestion
    let question = qz[currentIndex];
    if (question.isFlaged) {
      question.isFlaged = false;
      setQuiz(allQuiz);
    } else {
      question.isFlaged = true;
      setQuiz(allQuiz);
    }
  }

  const numberOfAttemptedQuestions = quiz?.simuleraQuestion.filter(item => item.optionId).length

  const ifAnswerExist = quiz?.simuleraQuestion.some(question => question.answer)

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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "8vh",
              width: "2.3rem",
              display: "flex",
              alignItems: "center",
              borderRight: "1px solid #E1E1E1",
              cursor: "pointer",
            }}
            onClick={() => {
              quiz && quiz.simuleraQuestion[currentIndex].answer ?
                navigate('/provresultat')
                :
                setBackPressPopup(true)
            }}
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography variant="body1" className={classes.center_align}>
            {quiz?.simuleraQuestion[currentIndex].simuleraSectionCategories.title}
          </Typography>
          <HelpOutlineIcon sx={{ width: 100 }} />
        </Toolbar>
      </AppBar>

      <Container
        disableGutters
        maxWidth="xl"
        style={{ backgroundColor: "#fff", height: "fit-content" }}
      >
        <Container
          disableGutters
          maxWidth="md"
          style={{ backgroundColor: "#fff" }}
        >
          <Box mt={8} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box mt={2} width={100} sx={{ color: "#222" }}>
              <img src={BarChart} alt="" />
              {currentIndex + 1} av {quiz?.simuleraQuestion.length}
            </Box>
            <Box mt={2} sx={{ color: "#222", display: 'flex' }}>
              <img src={Clock} alt="" />
              {quiz && quiz.simuleraQuestion[currentIndex].answer ? 'Slutfört'
                : time && <Timer continueStatus={status}
                  time={time}
                  timeleft={(timer) => {
                    setTimeLeft(timer)
                  }}
                  onCloseTimer={() => setTimeOverPopUp(true)}
                />
                }
              <BackButtonPopup status={backPressPopup} closePopup={() => setBackPressPopup(false)} />
            </Box>
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
              quiz?.simuleraQuestion.map((item, index) => {
                return <Box
                  key={index}
                  style={{
                    backgroundColor: numberOfAttemptedQuestions > index
                      ? "#6fcf97"
                      : "#B4B4B4",
                    marginLeft: "2px",
                    flex: "1",
                  }}
                ></Box>
              })}
            <Box
              mt={2}
              sx={{
                backgroundColor: "#6fcf97",
                height: "8px",
                display: "flex",
                flexDirection: "row",
              }}
            ></Box>
          </Box>
        </Container>
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
            style={{
              marginLeft: "70rem",
              width: "10rem",
              display: "flex",
              justifyContent: "center",
            }}
          >

            {quiz && !quiz.simuleraQuestion[currentIndex].answer && <Button
              style={{
                width: "6rem",
                border: "1px solid #0A1596",
                color: quiz.simuleraQuestion[currentIndex].isFlaged ? '#fff' : "#0A1596",
                backgroundColor: quiz.simuleraQuestion[currentIndex].isFlaged ? '#0A1596' : ''
              }}
              onClick={() => flagQuestion()}
            >
              {" "}
              {quiz.simuleraQuestion[currentIndex].isFlaged ? (
                <img
                  src={WhiteStar}
                  style={{ width: "1rem", marginRight: ".5rem", }}
                  alt=""
                />
              ) : (
                <img
                  style={{ width: "1rem", marginRight: ".5rem", }}
                  src={StarIcon}
                  alt=""
                />
              )
              }
              {" "}
              Spara
            </Button>}

          </Box>
          <TestOverPopup status={timeOverPopUp} closePopUp={() => setTimeOverPopUp(false)} />

          {/* start of question component */}

          {quiz && quiz.simuleraQuestion.map((question, questionIndex) => {
            if (questionIndex === currentIndex) {
              if (question.type === 'multiple') {
                return <ProvPassDtk Options={(question, option, optionIndex) => Options((question, option, optionIndex))}
                  index={questionIndex} question={question} backPressPopup={() => setBackPressPopup(true)}
                  SelectOption={(e, optionIndex) => SelectFunc(e, optionIndex)
                  }
                />
              } else {
                return (
                  <Box>
                    <Box
                      mt={5}
                      paddingX={6}
                      paddingY={2}
                      sx={{
                        backgroundColor: "#fff",
                        width: 600,
                        height: question.images[0] ? 380 : 330,
                        border: "1px solid #e1e1e1",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingLeft: '5rem'
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <MarkLatex content={question.title} />
                      </Typography>
                      {question.images[0] && <Box>
                        <img style={{ height: '15rem' }} src={question.images[0]} />
                      </Box>
                      }
                      {question.information_1 && <Typography
                        variant="h6"
                        component="h6"
                        style={{ fontSize: "0.75rem", fontWeight: "600" }}
                      >
                        <MarkLatex content={'(1)' + ' ' + question.information_1} />
                      </Typography>
                      }
                      {question.information_2 && <Typography
                        variant="h6"
                        component="h6"
                        style={{ fontSize: "0.75rem", fontWeight: "600" }}
                      >
                        <MarkLatex content={'(2)' + ' ' + question.information_2} />
                      </Typography>
                      }
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{ fontSize: "0.75rem", fontWeight: "600" }}
                      >
                        <MarkLatex content={question.questionStatment} />
                      </Typography>
                    </Box>
                    <Box
                      mt={5}
                      sx={{
                        backgroundColor: "#fff",
                        width: 600,
                        height: 240,
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      {question.options.map((option, optionIndex) => {
                        return (
                          <Box sx={{ height: 120, border: "1px solid #e1e1e1", width: 300 }}>
                            <Box sx={{ display: "flex" }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <FormControlLabel
                                  onClick={(e) => {
                                    !question?.answer && SelectFunc(e, optionIndex);
                                  }}
                                  style={{ marginLeft: ".5rem" }}
                                  value={option?._id}
                                  // control={<Radio color="primary" />}
                                  control={Options(question, option, optionIndex)}
                                  label={OptionIndex(optionIndex)}
                                // label='A'
                                />
                              </Box>
                              <Box mt={2} ml={5}>
                                {option.image ? (<img
                                  className={classes.piechart_size}
                                  src={option.image}
                                  alt=""
                                />)
                                  :
                                  <MarkLatex content={option.value} />

                                }
                              </Box>
                            </Box>
                          </Box>
                        )
                      })

                      }
                    </Box>
                    {question.answer && (
                      <Box
                        paddingX={4}
                        mt={3}
                        sx={{
                          backgroundColor: "#fff",
                          width: 600,
                          height: 220,
                          border: "1px solid #e1e1e1",
                          overflow: "auto",
                          "&::-webkit-scrollbar": { display: "none" },
                          //   '&::-webkit-scrollbar': { width : 0 },
                        }}
                      >
                        <Box sx={{ width: 500, display: "flex" }}>
                          <Box>
                            <Typography
                              variant="h5"
                              component="h5"
                              style={{
                                fontSize: ".75rem",
                                fontWeight: "600",
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
                            alignItems: "flex-end",
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
                              // onClick={() => setFeedbackPopup(true)}
                              alt=""
                            />
                          </Box>
                          <Box mr={1}>
                            <img
                              src={Decrement}
                              // onClick={() => setFeedbackPopup(true)}
                              alt=""
                            />
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                )
              }
            }
          })}


          <Box
            padding={1}
            mt={2}
            sx={{
              width: 615,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: 'pointer'
              }}
              onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
            >
              {" "}
              <img src={LeftArrow} alt="" />
              <Typography
                variant="h6"
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  marginLeft: "0.5rem",
                }}
              >
                Föregående
              </Typography>
            </Box>
            {
              ifAnswerExist ? (
                <Box
                  onClick={() => navigate('/rattadoverblick', {
                    state: {
                      quizId: params.state.quiz.quizId._id,
                    }
                  })}
                >
                  <Typography
                    variant="h6"
                    style={{ fontSize: "0.75rem", textTransform: "uppercase", cursor: 'pointer' }}
                  >
                    Rättad Överblick
                  </Typography>
                </Box>
              ) : (<Box
                onClick={() => {
                  setStatus(false)
                    setShouldNavigate(true)
                  // setTimeout(() => {
                  //   console.log(timeLeft, 'this is time left')
                  //   // navigate('/overblick', {
                  //   //   state: {
                  //   //     quiz: quiz,
                  //   //     SubmitedQuestions,
                  //   //     simuleraQuiz: quiz?._id,
                  //   //     simuleraSeason: quiz?.season,
                  //   //     timeLeft
                  //   //   }
                  //   // })
                  // }, 1500);
                }

                }
              >
                <Typography
                  variant="h6"
                  style={{ fontSize: "0.75rem", textTransform: "uppercase", cursor: 'pointer' }}
                >
                  överblick
                </Typography>
              </Box>
              )
            }
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: 'pointer'
              }}
              onClick={() => currentIndex + 1 < quiz.simuleraQuestion.length && setCurrentIndex(currentIndex + 1)}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  marginRight: "0.5rem",
                }}
              >
                Nästa
              </Typography>
              <img src={RightArrow} alt="" />
            </Box>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default StandardViewXyz;
