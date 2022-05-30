import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import BarChart from "../../../../../assets/Icons/BarChart.svg";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
import StarIcon from "../../../../../assets/Icons/StarIcon.svg";
import Clock from "../../../../../assets/Icons/Clock.svg";
import QuestionOption from "../../../../../assets/Icons/QuestionOption.svg";
import PieChart from "../../../../../assets/Imgs/SinglePieChart.png";
import DtkImg from "../../../../../assets/Imgs/DtkQuestion.png";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  Typography,
  AppBar,
  Paper,
  Box,
  CssBaseline,
  Grid,
  Radio,
  Button,
  FormControlLabel,
  Toolbar,
  Container,
  LinearProgress,
} from "@material-ui/core";
import MarkLatex from '../../../../atom/Marklatex/MarkLatex'
import Correct from "../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../assets/Imgs/wrong.png";
import { useNavigate, useLocation } from "react-router-dom";
import WhiteStar from "../../../../../assets/Imgs/whiteStar.png";

const StandardViewXyz = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const params = useLocation()

  const [quiz, setQuiz] = useState()

  useEffect(() => {
    console.log(params?.state, ';this is params')
    if (params?.state?.questionIndex) {
      setQuiz(params?.state?.quiz)
      setCurrentIndex(params?.state?.questionIndex)
    } else {
      setQuiz(params?.state?.quiz)
    }
  }, [])
  

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
    if (optionIndex == question.selectedIndex) {
      return <Radio color="primary" checked={true} style={{ marginRight: "0.5rem" }} />;
    } else {
      return <Radio color="primary" checked={false} style={{ marginRight: "0.5rem" }} />;
    }
  };

  const SelectFunc = (e, optionIndex) => {
    const questions = [...quiz];
    let question = questions[currentIndex];
    question.selectedIndex = optionIndex;
    question.optionId = e.target.value;
    setQuiz(questions);
  };

  const flagQuestion = () => {
    const questions = [...quiz];
    let question = questions[currentIndex];
    if (question.isFlaged) {
      question.isFlaged = false;
      setQuiz(questions);
    } else {
      question.isFlaged = true;
      setQuiz(questions);
    }
  }

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
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography variant="body1" className={classes.center_align}>
            XYZ
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
              10 av 40
            </Box>
            <Box mt={2} sx={{ color: "#222" }}>
              <img src={Clock} alt="" />
              43:00 min
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
              quiz?.map((item, index) => {
                return <Box
                  key={index}
                  style={{
                    backgroundColor: item.answer
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

            {quiz && quiz[currentIndex] && <Button
              style={{
                width: "6rem",
                border: "1px solid #0A1596",
                color: quiz[currentIndex].isFlaged ? '#fff' : "#0A1596",
                backgroundColor: quiz[currentIndex].isFlaged ? '#0A1596' : ''
              }}
              onClick={() => flagQuestion()}
            >
              {" "}
              {quiz[currentIndex].isFlaged ? (
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

          {/* start of question component */}

          {quiz && quiz.map((question, questionIndex) => {
            if (questionIndex === currentIndex) {
              console.log(question)
              return (
                <Box>
                  <Box
                    mt={5}
                    paddingX={6}
                    paddingY={2}
                    sx={{
                      backgroundColor: "#fff",
                      width: 600,
                      height: 280,
                      border: "1px solid #e1e1e1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        marginBottom: 30,
                      }}
                    >
                      <MarkLatex content={question.questionStatement} />
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h6"
                      style={{ fontSize: "0.75rem", fontWeight: "600" }}
                    >
                      Vilket svarsalternativ visar grafen till funktionen g(x)= 2 f (x)+
                      3?
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
                    {question.options[0].options.map((option, optionIndex) => {
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
                    {/* <Box sx={{ height: 120, border: "1px solid #e1e1e1", width: 300 }}>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FormControlLabel
                            style={{ marginLeft: ".5rem" }}
                            value="B"
                            control={<Radio color="primary" />}
                            label="B"
                          />
                        </Box>
                        <Box mt={2} ml={5}>
                          <img
                            className={classes.piechart_size}
                            src={QuestionOption}
                            alt=""
                          />
                        </Box>
                      </Box>
                    </Box>
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
                            style={{ marginLeft: ".5rem" }}
                            value="C"
                            control={<Radio color="primary" />}
                            label="C"
                          />
                        </Box>
                        <Box mt={2} ml={5}>
                          <img
                            className={classes.piechart_size}
                            src={QuestionOption}
                            alt=""
                          />
                        </Box>
                      </Box>
                    </Box>
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
                            style={{ marginLeft: ".5rem" }}
                            value="D"
                            control={<Radio color="primary" />}
                            label="D"
                          />
                        </Box>
                        <Box mt={2} ml={5}>
                          <img
                            className={classes.piechart_size}
                            src={QuestionOption}
                            alt=""
                          />
                        </Box>
                      </Box>
                    </Box> */}
                  </Box>
                </Box>
              )
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
            <Box onClick={() => navigate('/overblick', {
              state: {
                quiz: quiz
              }
            })} >
              <Typography
                variant="h6"
                style={{ fontSize: "0.75rem", textTransform: "uppercase", cursor: 'pointer' }}
              >
                överblick
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: 'pointer'
              }}
              onClick={() => currentIndex + 1 < quiz.length && setCurrentIndex(currentIndex + 1)}
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
