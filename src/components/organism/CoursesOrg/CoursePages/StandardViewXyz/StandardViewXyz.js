import React, { useEffect, useMemo, useState } from "react";
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
import MarkLatex from "../../../../atom/Marklatex/MarkLatex";
import Correct from "../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../assets/Imgs/wrong.png";
import { useNavigate, useLocation } from "react-router-dom";
import WhiteStar from "../../../../../assets/Imgs/whiteStar.png";
import { instance2, EndPoints } from "../../../../service/Route";
import Timer from "../../../../atom/Timer/timer";
import ProvPassDtk from "../ProvPassDtk/ProvPassDtk";
import BackButtonPopup from "../../../../molecule/BackButtonPopup/BackButtonPopup";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import HelpPopup from "../../../../atom/HelpPopup/HelpPopup";
import FeedbackButtons from "../../../../atom/FeedbackButtons/FeedbackButtons";
import ExamTextView from "../../../../molecule/ExamTextView/ExamTextView";
import AnswerStatement from "../../../../molecule/AnswerStatement/AnswerStatement";
import { appColors } from "../../../../service/commonService";

const StandardViewXyz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const params = useLocation();
  const [quiz, setQuiz] = useState();
  const [status, setStatus] = useState();
  const [time, setTime] = useState();
  const [SubmitedQuestions, setSubmitedQuestions] = useState([]);
  const [backPressPopup, setBackPressPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState();
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [open, setOpen] = useState(true);
  const [helpPopup, setHelpPopup] = useState(false);
  const [onHover, setOnhover] = useState();

  useEffect(() => {
    if (params?.state?.questionIndex != undefined) {
      setTime(params?.state?.timeLeft);
      setQuiz(params?.state?.quiz);
      setCurrentIndex(params?.state?.questionIndex);
      setSubmitedQuestions(params?.state?.SubmittedQuestions || []);
      setStatus(true);
      setOpen(false);
      console.log(params?.state);
    } else {
      const URL = EndPoints.getSimuleraQuiz + params.state.id;

      instance2.get(URL).then((response) => {
        setQuiz(response.data.simuleraQuiz);
        setTime(3300);
        setOpen(false);
        response.data.simuleraQuiz && setStatus(true);
      });
    }
  }, []);

  useEffect(() => {
    if (shouldNavigate) {
      navigate("/overblick", {
        state: {
          quiz: quiz,
          SubmitedQuestions,
          simuleraQuiz: quiz?._id,
          simuleraSeason: quiz?.season,
          timeLeft,
          currentQuestion: currentIndex,
          provpass: params?.state?.provpass,
          session: params?.state?.session,
        },
      });
    }
  }, [timeLeft, shouldNavigate]);

  const isReadingComprehension = useMemo(
    () =>
      quiz?.question[currentIndex].sectionCategories.title === "ELF" ||
      quiz?.question[currentIndex].sectionCategories.title === "LÄS" ||
      quiz?.question[currentIndex].sectionCategories.title === "DTK",
    [currentIndex, quiz?.question]
  );

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
    optionStyle: {
      width: 30,
      padding: 0,
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
      minHeight: "95vh",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      width: "100%",
    },

    spara: {
      "@media (max-width: 810px)": {
        marginLeft: "-10rem",
        width: "10rem",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        marginTop: "3.5rem",
      },

      [theme.breakpoints.up(811)]: {
        width: "10rem",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        marginTop: "2.7rem",
      },
    },

    questionComponent: {
      "@media (max-width: 810px)": {
        marginTop: 0,
        backgroundColor: "#f9f9f9",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      },

      [theme.breakpoints.up(811)]: {
        marginTop: 0,
        backgroundColor: "#f9f9f9",
        height: "fit-content",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
      },
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
      case 4:
        return "E";
      default:
        return "";
    }
  }

  useEffect(() => {
    const handleEnterClick = (e) => {
      if (e.keyCode === 13) {
        currentIndex + 1 < quiz.question.length &&
          setCurrentIndex((oldIndex) => oldIndex + 1);
      }
    };
    document.addEventListener("keydown", handleEnterClick);

    return () => {
      document.removeEventListener("keydown", handleEnterClick);
    };
  }, [quiz, currentIndex]);

  const Options = (question, option, optionIndex) => {
    if (
      question.questionAnswer &&
      question.questionAnswer.option == option._id
    ) {
      return <img src={Correct} style={{ marginRight: "0.5rem" }} />;
    } else if (question.questionAnswer && option._id === question?.optionId) {
      return <img src={Wrong} style={{ marginRight: "0.5rem" }} />;
    }
    // else {
    //   return <Radio color="primary" checked={false} />;
    // }
    if (optionIndex === question.selectedOptionIndex) {
      return (
        <Radio
          color="primary"
          checked={true}
          style={{
            marginRight: "0.5rem",
            color: appColors.blueColor,
          }}
        />
      );
    } else {
      return (
        <Radio
          color="primary"
          checked={false}
          style={{
            marginRight: "0.5rem",
            color: option._id == onHover && appColors.hoverBlue,
          }}
        />
      );
    }
  };

  const SelectFunc = (e, optionIndex) => {
    let allQuiz = { ...quiz };
    const qz = allQuiz?.question;
    let question = qz[currentIndex];
    question.selectedOptionIndex = optionIndex;
    question.optionId = e.target.value;
    allQuiz.question = qz;
    setQuiz(allQuiz);

    let data = {
      question: question._id,
      optionId: e.target.value,
      sectionCategories: question.sectionCategories,
      timeleft: timeLeft,
      totaltime: time,
      spendtime: time - timeLeft,
    };

    let questions = [...SubmitedQuestions];

    const exist = questions.some((obj) => obj.question === question._id);
    if (exist) {
      const ind = questions.findIndex((obj) => obj.question === question._id);
      questions.splice(ind, 1, data);
      setSubmitedQuestions(questions);
    } else {
      questions.push(data);
      setSubmitedQuestions(questions);
      // console.log("question submited");
      setTime(timeLeft);
    }
  };

  const flagQuestion = () => {
    let allQuiz = { ...quiz };
    const qz = allQuiz?.question;
    let question = qz[currentIndex];
    if (question.isFlaged) {
      question.isFlaged = false;
      setQuiz(allQuiz);
    } else {
      question.isFlaged = true;
      setQuiz(allQuiz);
    }
  };

  const numberOfAttemptedQuestions = quiz?.question.filter(
    (item) => item.optionId
  ).length;

  const ifAnswerExist = quiz?.question.some(
    (question) => question.questionAnswer
  );

  return (
    <div>
      <CssBaseline />
      <AppBar
        color="#fff"
        className={classes.appbar}
        style={{ boxShadow: "none" }}
        position="static"
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
              height: "4rem",
              width: "2.3rem",
              display: "flex",
              alignItems: "center",
              borderRight: "1px solid #E1E1E1",
              cursor: "pointer",
            }}
            onClick={() => {
              quiz && quiz.question[currentIndex].questionAnswer
                ? navigate("/provresultat", {
                    state: {
                      seasonId: params.state.seasonId,
                    },
                  })
                : setBackPressPopup(true);
            }}
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography
            variant="body1"
            style={{ fontSize: "1.5rem", fontWeight: 400 }}
            className={classes.center_align}
          >
            {/* {quiz?.question[currentIndex].sectionCategories.title} */}
            {quiz?.question[currentIndex].sectionCategories.title}
          </Typography>
          <Box onClick={() => setHelpPopup(!helpPopup)}>
            <HelpOutlineIcon />
          </Box>
        </Toolbar>
      </AppBar>
      {helpPopup && <HelpPopup />}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%",
        }}
        open={open}
      >
        <CircularProgress color="inherit" size="5rem" />
      </Backdrop>
      <Container
        disableGutters
        maxWidth="false"
        style={{ backgroundColor: "#fff" }}
        className={classes.content}
      >
        <BackButtonPopup
          status={backPressPopup}
          closePopup={() => setBackPressPopup(false)}
          title="Vill du avsluta provet?"
          description="Du måste göra klart provpasset för att få din poäng. Om du trycker
                på avsluta, sparas inte dina svar."
          cancelBtnName="Gör klart provpass"
          agreeBtnName="Avsluta prov"
          redirect={() => navigate("/courses")}
        />
        <Container
          disableGutters
          maxWidth="md"
          style={{ backgroundColor: "#fff" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              mt={2}
              width={120}
              sx={{
                color: "#222",
                display: "flex",
                alignItems: "center",
                marginRight: "0.4rem",
              }}
            >
              <img src={BarChart} alt="" />
              <Typography variant="body1" style={{ marginLeft: "0.4rem" }}>
                {currentIndex + 1} av {quiz?.question.length}
              </Typography>
            </Box>
            <Box mt={2} sx={{ color: "#222", display: "flex" }}>
              <img src={Clock} alt="" />
              {quiz && quiz.question[currentIndex].questionAnswer
                ? "Slutfört"
                : time && (
                    <Timer
                      continueStatus={status}
                      time={time}
                      timeleft={(timer) => {
                        setTimeLeft(timer);
                      }}
                      onCloseTimer={() => {
                        setTimeLeft(0);
                        setShouldNavigate(true);
                      }}
                      callBackForTimer={(value) => setTimeLeft(value)}
                    />
                  )}
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
              quiz?.question.map((item, index) => {
                return (
                  <Box
                    key={index}
                    style={{
                      backgroundColor:
                        currentIndex > index ? "#6fcf97" : "#B4B4B4",
                      flex: "1",
                    }}
                  ></Box>
                );
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
          className={classes.questionComponent}
          // style={{
          //   marginTop: 0,
          //   backgroundColor: "#f9f9f9",
          //   height: "fit-content",
          //   display: "flex",
          //   justifyContent: "flex-end",
          //   flexDirection: "row",
          // }}
        >
          {/* start of question component */}

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {isReadingComprehension && (
              <ExamTextView
                text={
                  quiz?.question[currentIndex]?.multipartQuestion?.description
                }
                title={quiz?.question[currentIndex]?.multipartQuestion?.title}
                questionLength={
                  quiz?.question[currentIndex]?.multipartQuestion?.question
                    .length
                }
              />
            )}
            {quiz &&
              quiz.question.map((question, questionIndex) => {
                if (questionIndex === currentIndex) {
                  if (question.type === "multiple") {
                    return (
                      <Box>
                        <ProvPassDtk
                          Options={(question, option, optionIndex) =>
                            Options((question, option, optionIndex))
                          }
                          index={questionIndex}
                          question={question}
                          backPressPopup={() => setBackPressPopup(true)}
                          SelectOption={(e, optionIndex) =>
                            SelectFunc(e, optionIndex)
                          }
                        />
                      </Box>
                    );
                  } else {
                    return (
                      <Box>
                        <Box
                          mt={5}
                          paddingX={6}
                          /* paddingY={2} */
                          sx={{
                            backgroundColor: "#fff",
                            width: 600,
                            height: isReadingComprehension
                              ? "auto"
                              : question.images[0] ||
                                question.questionStatement?.includes(
                                  "hp-appen.s3.eu-north-1.amazonaws.com"
                                )
                              ? "fit-content"
                              : 330,
                            // border: "1px solid #e1e1e1",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            paddingLeft: "5rem",
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            style={{
                              fontSize: "1rem",
                              fontWeight: "500",
                              padding: isReadingComprehension ? "3rem 0rem" : 0,
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            <MarkLatex content={question.questionStatement} />
                          </Typography>
                          {question.images[0] && (
                            <Box>
                              <img
                                style={{ height: "15rem" }}
                                src={question.images[0]}
                              />
                            </Box>
                          )}
                          {question.information1 && (
                            <Typography
                              variant="h6"
                              component="h6"
                              style={{ fontSize: "0.75rem", fontWeight: "600" }}
                            >
                              <MarkLatex
                                content={"(1)" + " " + question.information1}
                              />
                            </Typography>
                          )}
                          {question.information2 && (
                            <Typography
                              variant="h6"
                              component="h6"
                              style={{ fontSize: "0.75rem", fontWeight: "600" }}
                            >
                              <MarkLatex
                                content={"(2)" + " " + question.information2}
                              />
                            </Typography>
                          )}
                          <Typography
                            variant="h6"
                            component="h6"
                            style={{ fontSize: "0.75rem", fontWeight: "600" }}
                          >
                            <MarkLatex content={question.questionStatment} />
                          </Typography>
                        </Box>
                        <Box
                          mt={isReadingComprehension ? 0 : 5}
                          sx={{
                            backgroundColor: "#fff",
                            width: 600,
                            // height: 240,
                            display: "flex",
                            flexWrap: "wrap",
                            // gridTemplateColumns: "1fr 1fr",
                          }}
                        >
                          {question.options.options.map(
                            (option, optionIndex) => {
                              return (
                                <Box
                                  sx={{
                                    height:
                                      question.options.options.length >= 4
                                        ? 60
                                        : 120,
                                    border: "1px solid #e1e1e1",
                                    width:
                                      question.options.options.length >= 4
                                        ? 600
                                        : 300,
                                    "&:hover": {
                                      cursor: !option.answer && "pointer",
                                      color:
                                        !option.answer && appColors.hoverBlue,
                                    },
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      height: 120,
                                      "&:hover": {
                                        cursor: "pointer",
                                      },
                                    }}
                                    onClick={(e) => {
                                      !question?.questionAnswer &&
                                        SelectFunc(e, optionIndex);
                                    }}
                                    onMouseOver={() => setOnhover(option._id)}
                                    onMouseLeave={() => setOnhover(null)}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                      }}
                                    >
                                      <FormControlLabel
                                        style={{
                                          margin: 0,
                                          size: "0.5rem",
                                        }}
                                        value={option?._id}
                                        // control={<Radio color="primary" />}
                                        control={Options(
                                          question,
                                          option,
                                          optionIndex
                                        )}
                                        className={classes.optionStyle}
                                        label={
                                          <Box
                                            sx={{
                                              width:
                                                question?.options.options
                                                  .length >= 4
                                                  ? "25rem"
                                                  : "20rem",
                                              display: "flex",
                                              marginLeft:
                                                question?.options.options
                                                  .length >= 4
                                                  ? "1rem"
                                                  : "0",
                                              justifyContent:
                                                question?.options.options
                                                  .length >= 4
                                                  ? "flex-start"
                                                  : "center",
                                              alignItems: "center",
                                              height:
                                                question?.options.options
                                                  .length >= 4 && "4rem",
                                            }}
                                          >
                                            {option.image ? (
                                              <img
                                                className={
                                                  classes.piechart_size
                                                }
                                                src={option.image}
                                                alt=""
                                              />
                                            ) : (
                                              <MarkLatex
                                                content={option.value}
                                              />
                                            )}
                                          </Box>
                                        }
                                      />
                                      <Typography
                                        style={{
                                          marginTop: "2rem",
                                          color: "#717274",
                                        }}
                                        variant="body2"
                                      >
                                        {OptionIndex(optionIndex)}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                              );
                            }
                          )}
                        </Box>
                        {question.questionAnswer && (
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
                            {question.questionAnswer && (
                              <AnswerStatement
                                answer={question.questionAnswer.answer}
                                image={question?.questionAnswer.image}
                              />
                            )}

                            <FeedbackButtons />
                          </Box>
                        )}
                      </Box>
                    );
                  }
                }
              })}

            <Box
              padding={1}
              mt={2}
              mb={2}
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
                  cursor: "pointer",
                }}
                onClick={() =>
                  currentIndex > 0 && setCurrentIndex(currentIndex - 1)
                }
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
              {ifAnswerExist ? (
                <Box
                  onClick={() =>
                    navigate("/rattadoverblick", {
                      state: {
                        quizId: params.state.quizId,
                        seasonId: params.state.seasonId,
                      },
                    })
                  }
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Rättad Överblick
                  </Typography>
                </Box>
              ) : (
                <Box
                  onClick={() => {
                    setStatus(false);
                    setShouldNavigate(true);
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {currentIndex + 1 === quiz?.question.length
                      ? ""
                      : "överblick"}
                  </Typography>
                </Box>
              )}

              {!ifAnswerExist && currentIndex + 1 === quiz?.question.length ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setStatus(false);
                    setShouldNavigate(true);
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      marginRight: "0.5rem",
                    }}
                  >
                    se Överblick
                  </Typography>
                  <img src={RightArrow} alt="" />
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    currentIndex + 1 < quiz.question.length &&
                    setCurrentIndex(currentIndex + 1)
                  }
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
              )}
            </Box>
          </Box>

          <Box
            className={classes.spara}
            // style={{
            //   width: "10rem",
            //   height: 'fit-content',
            //   display: "flex",
            //   justifyContent: "center",
            //   marginTop: '2.7rem',
            //   // marginLeft: '-10rem'
            // }}
          >
            {quiz && !quiz.question[currentIndex].questionAnswer && (
              <Button
                style={{
                  width: "6rem",
                  border: `1px solid ${appColors.blueColor}`,
                  color: quiz.question[currentIndex].isFlaged
                    ? "#fff"
                    : appColors.blueColor,
                  backgroundColor: quiz.question[currentIndex].isFlaged
                    ? appColors.blueColor
                    : "",
                }}
                onClick={() => flagQuestion()}
              >
                {" "}
                {quiz.question[currentIndex].isFlaged ? (
                  <img
                    src={WhiteStar}
                    style={{ width: "1rem", marginRight: ".5rem" }}
                    alt=""
                  />
                ) : (
                  <img
                    style={{ width: "1rem", marginRight: ".5rem" }}
                    src={StarIcon}
                    alt=""
                  />
                )}{" "}
                Spara
              </Button>
            )}
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default StandardViewXyz;
