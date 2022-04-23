import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "../../../../../../assets/Icons/BarChart.svg";
import BlueLeftIcon from "../../../../../../assets/Icons/BlueLeftIcon.svg";
import BlueRightIcon from "../../../../../../assets/Icons/BlueRightIcon.svg";
import DtkImg from "../../../../../../assets/Imgs/DtkImg.png";
import Clock from "../../../../../../assets/Icons/Clock.svg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Box,
  CssBaseline,
  Grid,
  Radio,
  FormControlLabel,
  Container,
} from "@material-ui/core";
import ExerciseBtn from "../../../../../atom/ExerciseBtn/ExerciseBtn";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import Correct from "../../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import { useNavigate } from "react-router-dom";
import ResultQuestionViewDtkOrg from './ResultQuestionViewDTKOrg'
import { EndPoints, instance2 } from "../../../../../service/Route";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";


const QuestionViewDTKOrg = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quiz, setQuiz] = useState()
  const [showResult, setShowResult] = useState(false)



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

  useEffect(() => {
    if (props.paragraphIndex != undefined) {
      setSelectedIndex(props.questionIndex)
      setQuiz(props.question)
    } else {
      setQuiz(props.question)
    }
    // quiz.question.multipartQuestion.questions.length
  }, [])

  const Button = (question) => {
    if (props.paragraphIndex != undefined) {
      return <ResultFooter
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
    } else {
      return <Box sx={{ width: 600, marginLeft: '.5rem' }}>
        <ExerciseBtn title="Nästa"
          onClick={() => submitAnswer(question)}
        />
      </Box>
    }
  }

  const SelectFunc = (e, optionIndex) => {
    let allQuiz = { ...quiz }
    const qz = allQuiz?.question
    let question = qz[selectedIndex];
    question.selectedOptionIndex = optionIndex;
    question.selectedOptionID = e.target.value;
    allQuiz.question = qz
    setQuiz(allQuiz)
  };

  const Options = (question, option, optionIndex) => {
    console.log(question, ';this is question')
    if (props.paragraphIndex != undefined && question.answer.option == option._id) {
      return <img src={Correct} style={{ marginLeft: ".5rem", marginRight: '.5rem' }} />;
    } else if (props.paragraphIndex != undefined && option._id == question.selectedOptionID) {
      return <img src={Wrong} style={{ marginRight: "0.5rem", marginLeft: ".4rem", }} />;
    }
    if (optionIndex == question.selectedIndex) {
      return <Radio color="primary" checked={true} />;
    } else {
      return <Radio color="primary" checked={false} />;
    }
  };


  const submitAnswer = (question) => {
    if (!question.answerSubmited) {
      const allQuiz = { ...quiz };
      const qz = allQuiz.question
      let selectedquestion = qz[selectedIndex];

      const getAnswer = EndPoints.getAnswerByQuestionId + selectedquestion._id;
      instance2.get(getAnswer).then((response) => {
        selectedquestion.answer = response.data;
        selectedquestion.answerSubmited = true;

        const selectedAnswers = qz.filter(item => item.answerSubmited)
        if (selectedAnswers.length === qz.length) {
          setShowResult(true)
          props.stopTimer()
        }

        setQuiz(allQuiz);
      });

      selectedIndex + 1 < quiz.question.length && setSelectedIndex(selectedIndex + 1)

      const data = {
        quiz: props.quizId,
        user: localStorage.getItem("userId"),
        optionId: selectedquestion?.selectedOptionID,
        questionId: selectedquestion?._id,
        sectionCategory: props?.sectionCategory._id,
        timeleft: props.timeLeft ? props.timeLeft : null,
        totaltime: props.totalTime ? props.totalTime * 60 : null,
        spendtime: props.timeLeft ? props.totalTime * 60 - props.timeLeft : null,
        MultipartQuestion: props.question._id
      }
      const URL = EndPoints.submitAnswer
      instance2.post(URL, data).then(response => {
        console.log("Answer submitted")

      })
    } else {
      selectedIndex + 1 < quiz.question.length && setSelectedIndex(selectedIndex + 1)
    }
  };

  return (
    <div>
      <CssBaseline />

      <Container
        maxWidth="lg"
        style={{ backgroundColor: "#fff", height: "fit-content" }}
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
            paddingX={6}
            paddingY={2}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              height: 373,
              border: '1px solid #e1e1e1',
              overflow: 'auto',
              "&::-webkit-scrollbar": {
                width: 10
              }
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                fontSize: ".7rem",
                fontWeight: "500",
              }}
            >
              {quiz?.question?.length + ' uppgifter:'}
            </Typography>
            <Typography variant="h6" component="h6">
              {quiz?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              <MarkLatex content={quiz?.description} />
            </Typography>
            {quiz?.image && <Box>
              <img src={quiz?.image} style={{ width: '100%' }} alt="" />
            </Box>}
          </Box>
          {
            showResult ? (<ResultQuestionViewDtkOrg paragraphIndex={props.paragraphIndex}
              onRightClick={() => props.onRightClick()}
              onLeftClick={() => props.onLeftClick()} onResultHandler={() => props.onResultHandler()}
              questionIndex={props.questionIndex} quiz={quiz} stopTimer={() => props.stopTimer()}
              startTimer={() => props.startTimer()} selectedIndex={props.selectedIndex}
              nextQuestion={() => props.nextQuestion()}
            />) :
              quiz && quiz?.question?.map((question, index) => {
                if (index == selectedIndex) {
                  return <Box>
                    <Box
                      paddingX={4}
                      mt={5}
                      sx={{
                        backgroundColor: "#fff",
                        width: 600,
                        border: "1px solid #e1e1e1",
                        marginLeft: '.5rem'
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
                        <Box style={{ width: 70, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                          {selectedIndex > 0 && <img onClick={() => setSelectedIndex(selectedIndex - 1)} src={BlueLeftIcon} style={{ cursor: 'pointer' }} className={classes.size} alt="" />}
                          <Typography variant="body1" component="body1" style={{ fontSize: '.8rem' }} >
                            {selectedIndex + 1 + '/' + quiz.question.length}
                          </Typography>
                          <img onClick={() => selectedIndex + 1 < quiz.question.length && setSelectedIndex(selectedIndex + 1)} src={BlueRightIcon} style={{ cursor: 'pointer' }} className={classes.size} alt="" />
                        </Box>
                      </Box>
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{ fontSize: ".75rem", fontWeight: "600", marginTop: 20, display: 'flex', flexDirection: 'column' }}
                      >
                        <MarkLatex content={question.questionStatement} />

                        {question.image && <img src={question.image[0]} style={{ height: '10rem', marginBottom: '.4rem' }} />}
                      </Typography>
                    </Box>
                    {question.options[0].options.map((option, optionIndex) => {
                      return <Box
                        padding={1}
                        sx={{
                          backgroundColor: "#fff",
                          width: 600,
                          border: "1px solid #e1e1e1",
                          marginLeft: '.5rem'
                        }}
                      >
                        <FormControlLabel onClick={(e) => {
                          !question.answerSubmited && SelectFunc(e, optionIndex);
                        }} value={option._id}
                          style={{ marginLeft: '.5rem', alignItems: 'center' }}

                          control={
                            props.paragraphIndex != undefined ? Options(question, option, optionIndex)
                              : <Radio color="primary" checked={optionIndex == question.selectedOptionIndex} />
                          }

                          label={<MarkLatex content={option.value.replace("\f", "\\f")} />} />
                      </Box>

                    })}

                    {question.selectedOptionIndex + 1 ? Button(question) : (
                      <Box
                        padding={1}
                        mt={2}
                        style={{
                          backgroundColor: 'grey', color: "#FFFFFF", height: '2.7rem', borderRadius: '.4rem', width: '100%', marginTop: '2%', marginBottom: '2%', marginLeft: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                      >
                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "0.75rem",
                            marginRight: "0.5rem",
                            width: '3rem',
                          }}
                        >
                          Nästa
                        </Typography>
                      </Box>

                    )
                    }

                  </Box>
                }
              })
          }

        </Container>
      </Container>
    </div>
  );
};

export default QuestionViewDTKOrg;
