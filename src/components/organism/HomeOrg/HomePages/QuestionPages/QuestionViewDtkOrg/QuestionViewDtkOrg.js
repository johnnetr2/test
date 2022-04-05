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

const QuestionViewDTKOrg = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const question = props.question
  const [quiz, setQuiz] = useState()
  const navigate = useNavigate()



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
    setQuiz(props.question.questions)
  }, [])

  const SelectFunc = (e, optionIndex) => {
    console.log(e.target.value, 'selected option id')
    const questions = [...quiz];
    let question = questions[selectedIndex];
    question.selectedIndex = optionIndex;
    question.selectedOptionID = e.target.value;
    setQuiz(questions);
  };

  const Options = (item, curentOption, optionIndex) => {
    if (item.answer && item.answer.option == curentOption._id) {
      return <img src={Correct} style={{ marginRight: "0.5rem" }} />;
    } else if (item.answer && optionIndex == item.selectedIndex) {
      return <img src={Wrong} style={{ marginRight: "0.5rem" }} />;
    }
    if (optionIndex == item.selectedIndex) {
      return <Radio color="primary" checked={true} />;
    } else {
      return <Radio color="primary" checked={false} />;
    }
  };

  // const submitAnswer = (question) => {
  //   if (question.answerSubmited) {
  //     if (selectedIndex + 1 == quiz.length) {
  //       localStorage.setItem('quizId', params?.state?.quizId)
  //       navigate("/resultsummary", {
  //         state: {
  //           quizId: params?.state?.data?._id,
  //           sectionCategory: params?.state?.sectionCategory,
  //           timeLeft: timeLeft,
  //           totalTime: time,
  //           quiz: quiz,
  //           quizId: params?.state?.quizId
  //         },
  //       });
  //     } else {
  //       setStatus(true);
  //       selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1);
  //     }
  //   } else {
  //     if (question.selectedIndex + 1) {
  //       const questions = [...quiz];
  //       let ques = questions[selectedIndex];
  //       const URL = EndPoints.getAnswerByQuestionId + ques.question._id;
  //       instance2.get(URL).then((response) => {
  //         ques.answer = response.data;
  //         ques.answerSubmited = true;
  //         setQuiz(questions);
  //         setStatus(false);
  //       });
  //       const data = {
  //         quiz: params?.state?.data?._id,
  //         user: localStorage.getItem("userId"),
  //         optionId: question.selectedOptionID,
  //         questionId: question.question._id,
  //         sectionCategory: params?.state?.sectionCategory,
  //       };
  //       const Submit = EndPoints.submitAnswer;
  //       instance2.post(Submit, data).then((response) => {
  //       });
  //     }
  //   }
  // };


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
                textTransform: "uppercase",
                fontSize: ".7rem",
                fontWeight: "500",
              }}
            >
              {question.questions.length + ' uppgifter:'}
            </Typography>
            <Typography variant="h6" component="h6">
              {question.title}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              <MarkLatex content={question.paragraph} />
            </Typography>
            <Box>
              <img src={question.image} style={{ width: '100%' }} alt="" />
            </Box>
          </Box>
          {quiz && quiz.map((question, index) => {
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
                        {selectedIndex + 1 + '/' + quiz.length}
                      </Typography>
                      <img onClick={() => selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1)} src={BlueRightIcon} style={{ cursor: 'pointer' }} className={classes.size} alt="" />
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    component="h6"
                    style={{ fontSize: ".75rem", fontWeight: "600", marginTop: 20, display: 'flex', flexDirection: 'column' }}
                  >
                    <MarkLatex content={question.question.questionStatement} />

                    {question.image && <img src={question.image} style={{ height: '10rem', marginBottom: '.4rem' }} />}
                  </Typography>
                </Box>
                {question.options.map((option, optionIndex) => {
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
                      SelectFunc(e, optionIndex);
                    }} value={option._id}
                      style={{ marginLeft: '.5rem' }}
                      control={Options(question, option, optionIndex)}
                      label={option.value} />
                  </Box>

                })}

                {question.selectedIndex + 1 ? (<Box sx={{ width: 600, marginLeft: '.5rem' }}>
                  <ExerciseBtn title="Nästa"
                    onClick={() => console.log(props.data)
                      // submitAnswer(question) 
                    }
                  />
                </Box>) : (
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
                )
                }

              </Box>
            }
          })}

        </Container>
      </Container>
    </div>
  );
};

export default QuestionViewDTKOrg;
