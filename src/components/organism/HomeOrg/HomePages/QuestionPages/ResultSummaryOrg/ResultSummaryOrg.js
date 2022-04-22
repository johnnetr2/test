import React, { useEffect, useState } from "react";
import BarChart from "../../../../../../assets/Icons/BarChart.svg";
import RightArrow from "../../../../../../assets/Icons/RightArrow.svg";
import Clock from "../../../../../../assets/Icons/Clock.svg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Paper,
  Box,
  CssBaseline,
  FormControlLabel,
  Toolbar,
  Container,
  LinearProgress,
  Button,
} from "@material-ui/core";
import { instance2, EndPoints } from "../../../../../service/Route";
import swal from "sweetalert";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation, useNavigate } from "react-router-dom";
import Correct from "../../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import { Calculate } from "@mui/icons-material";

const ResultSummaryOrg = (props) => {
  const params = useLocation();
  const [prevData, setPrevData] = useState();
  const [timePerQues, setTimePerQues] = useState();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [responseCollection, setresponseCollection] = useState();

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

    const URL = EndPoints.getResult + params?.state?.quizId;
    console.log(URL)
    try {
      instance2.get(URL).then((response) => {
        console.log(response.data)
        if (response.data) {
          let totalTime = 5 * 60;
          let remainingTime = 120;
          let timeSpent = totalTime - remainingTime;
          let timePerQuestion;

          setresponseCollection(response.data.questions);
          timePerQuestion = timeSpent / response.data.length;
          if (timeSpent && remainingTime) {
            setTimePerQues(timePerQuestion);
          } else {
            setTimePerQues(false);
          }
        }
      });
    } catch (error) {
      swal("Error", error.message);
    }
  }, []);

  const dispSecondsAsMins = (seconds) => {
    // 25:00
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    return (
      Math.floor(mins?.toString()) +
      ":" +
      (seconds_ == 0 ? "00" : Math.floor(seconds_?.toString()))
    );
  };

  const CalculateScore = () => {
    let correctAnswer = responseCollection?.filter(item => item.optionId == item.questionAnswer[0].option)
    let answers = responseCollection?.filter(item => item.questionAnswer)
    let score = correctAnswer.length / answers.length * 2
    return score;
  }

  const CorrectAnswers = () => {
    let answers = responseCollection?.filter(item => item.questionAnswer)
    if (answers) {
      return answers?.length + " av " + responseCollection?.length
    } else {
      return " av "
    }
  }

  const showAnswersSubmited = () => {
    let answers = responseCollection?.filter(item => item.questionAnswer)
    if (answers) {
      return < Typography variant="h4" >
        { answers.length + '/' + responseCollection.length }
      </Typography >
    } else {
      return <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
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
        <Toolbar>
          {/* <ArrowBackIosIcon color='black' sx={{ width: 100 }} /> */}
          <Typography
            variant="body1"
            style={{ width: 1200 }}
            className={classes.center_align}
          >
            Sammanfattning - {params?.state?.sectionCategory?.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        style={{ backgroundColor: "#fff", height: "fit-content" }}
      >
        <Container
          disableGutters
          padding={0}
          maxWidth="md"
          style={{ backgroundColor: "#fff" }}
        >
          <Box mt={8} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box mt={2} width={100} sx={{ color: "#222" }}>
              <img src={BarChart} alt="" />
              {CorrectAnswers()}
            </Box>
            <Box mt={2} sx={{ color: "#222" }}>
              <img src={Clock} alt="" />
              {prevData?.timeLeft
                ? dispSecondsAsMins(prevData?.timeLeft)
                : "00:00"}
            </Box>
          </Box>
          <Box mt={2}>
            <LinearProgress
              className={classes.color_progress}
              variant="determinate"
              value={progress}
            />
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
            mt={5}
            paddingY={2}
            sx={{ backgroundColor: "#f9f9f9", width: 600, height: 300 }}
          >
            <Typography variant="h5" component="h5">
              Resultat
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                width={290}
                height={100}
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #e1e1e1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                {showAnswersSubmited()}
                <Typography
                  variant="body1"
                  style={{
                    fontSize: "0.75rem",
                    marginLeft: ".7rem",
                    marginTop: ".8rem",
                  }}
                >
                  Antal poäng
                </Typography>
              </Box>
              <Box
                width={290}
                height={100}
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #e1e1e1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                {responseCollection &&
                  responseCollection != null ? (
                  <Typography variant="h4">
                    {CalculateScore()}
                  </Typography>
                ) : (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                )}
                <Typography
                  variant="body1"
                  style={{
                    fontSize: "0.75rem",
                    marginLeft: ".7rem",
                    marginTop: ".8rem",
                  }}
                >
                  Normerad poäng
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                mt={2}
                width={290}
                height={100}
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #e1e1e1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h4">
                  {timePerQues ? dispSecondsAsMins(timePerQues) : "00:00"}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontSize: "0.75rem",
                    marginLeft: ".7rem",
                    marginTop: ".8rem",
                  }}
                >
                  Tid per fråga
                </Typography>
              </Box>
              <Box
                mt={2}
                width={290}
                height={100}
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #e1e1e1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h4">
                  {prevData?.timeLeft
                    ? dispSecondsAsMins(prevData?.timeLeft)
                    : "00:00"}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontSize: "0.75rem",
                    marginLeft: ".7rem",
                    marginTop: ".8rem",
                  }}
                >
                  Tid kvar
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={2} sx={{ width: 600, display: "flex" }}>
            <Typography variant="h5">Dina svar</Typography>
          </Box>
          <Box
            paddingX={4}
            mt={2}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              height: "fit-content",
              border: "1px solid #e1e1e1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {responseCollection && responseCollection?.map((item, index) => {
              console.log(item, ';this is itemmmmmmmmmmmmmmmmmm')
              return (
                <Box
                  key={index}
                  padding={1}
                  mt={2}
                  mb={2}
                  onClick={() => {
                    // const quiz = params.state.quiz;
                    let questionIndex = responseCollection?.findIndex(
                      (element) => element._id === item._id
                    );
                    navigate("/question", {

                     state: {
                       quizId: params?.state?.quizId,
                        user: localStorage.getItem("userId"),
                        sectionCategory: params?.state?.sectionCategory,
                        questionIndex,
                        quiz: responseCollection,
                      }
                    });
                  }}
                  // onClick={() =>
                  //   navigate('/question', {state:{
                  //       sectionCategory:prevData?.sectionCategory
                  //   }})
                  // }
                  style={{
                    height: "3.5rem",
                    border: "1px solid #E3E3E3",
                    width: 550,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "blue",
                    },
                  }}
                >
                  <FormControlLabel
                    control={
                      item.optionId == item.questionAnswer[0].option ? (
                        <img
                          style={{ height: "1.5rem", marginLeft: "1.5rem" }}
                          src={Correct}
                        />
                      ) : (
                        <img
                          src={Wrong}
                          style={{ height: "1.5rem", marginLeft: "1.5rem" }}
                        />
                      )
                    }
                  />
                  <Typography
                    style={{
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      marginRight: "18rem",
                    }}
                    variant="body1"
                    component="body1"
                  >
                    {"Uppgift " +
                      `${index + 1}` +
                      " av " +
                      responseCollection.length}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    style={{ fontSize: ".75rem", fontWeight: "600" }}
                  >
                    Tid: 04:51
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={RightArrow} className={classes.size} alt="" />
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box padding={1} m={2} sx={{ width: 615 }}>
            <Button
              variant="outlined"
              onClick={() =>
                navigate("/category", {
                  state: {
                    item: params?.state?.sectionCategory,
                  },
                })
              }
              style={{ width: 600 }}
            >
              Klar
            </Button>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default ResultSummaryOrg;
