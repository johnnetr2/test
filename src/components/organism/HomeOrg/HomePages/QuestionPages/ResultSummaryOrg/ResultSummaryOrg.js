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
import { XYZNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { ORDNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { KVANormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { NOGNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { ELFNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { MEKNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { LASNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { DTKNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";

const ResultSummaryOrg = (props) => {
  const params = useLocation();
  const [timePerQues, setTimePerQues] = useState();
  const [progress, setProgress] = useState(0);
  const [responseCollection, setresponseCollection] = useState();
  const navigate = useNavigate();

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
    // console.log(params?.state, 'this is the console of time in result summary')
    const URL = EndPoints.getQuizResult + params?.state?.quizId;
    let sumOfTimeSpent = 0;
    instance2.get(URL).then((response) => {
      response.data.question.map((item) => {
        return (sumOfTimeSpent = sumOfTimeSpent + item.spendTime);
      });

      let lengthOfQuestions = response.data.question.length;
      let timePerQuestion;
      timePerQuestion = sumOfTimeSpent / lengthOfQuestions;

      if (sumOfTimeSpent) {
        setTimePerQues(timePerQuestion);
      } else {
        setTimePerQues(false);
      }
      // console.log(response, "this is the console of response of data collection for result summary");
      setresponseCollection(response.data);
    });

    return () => {
      // clearInterval(timer);
    };
  }, []);

  const dispSecondsAsMins = (seconds) => {
    // 25:00
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    /*
    return (
      Math.floor(mins?.toString()) +
      ":" +
      (seconds_ == 0 ? "00" : Math.floor(seconds_?.toString()))
    ); 
    */
    return (
      (mins < 10 ? "0" + mins : mins) +
      ":" +
      (seconds_ < 10 ? "0" + seconds_ : seconds_)
    );
  };

  const percentageCalculation = (value) => {
    if (params?.state?.sectionCategory?.title == "XYZ") {
      return XYZNormeringValueFor(value);
    } else if (params?.state?.sectionCategory?.title == "KVA") {
      return KVANormeringValueFor(value);
    } else if (params?.state?.sectionCategory?.title == "NOG") {
      return NOGNormeringValueFor(value);
    } else if (params?.state?.sectionCategory?.title == "DTK") {
      return DTKNormeringValueFor(value);
    } else if (params?.state?.sectionCategory?.title == "ELF") {
      return ELFNormeringValueFor(value);
    } else if (params?.state?.sectionCategory?.title == "LÄS") {
      return LASNormeringValueFor(value);
    } else if (params?.state?.sectionCategory?.title == "ORD") {
      return ORDNormeringValueFor(value);
    } else if (params?.state?.sectionCategory?.title == "MEK") {
      return MEKNormeringValueFor(value);
    }
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        color="#fff"
        className={classes.appbar}
        style={{
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="static"
      >
        <Toolbar>
          {/* <ArrowBackIosIcon color='black' sx={{ width: 100 }} /> */}
          <Typography
            variant="body1"
            style={{ fontSize: "1.5rem", fontWeight: 400 }}
            className={classes.center_align}
          >
            Sammanfattning - {params?.state?.sectionCategory?.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="false"
        style={{ backgroundColor: "#fff", minHeight: "100vh" }}
      >
        <Container
          disableGutters
          padding={0}
          maxWidth="md"
          style={{ backgroundColor: "#fff" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box mt={2} width={100} sx={{ color: "#222" }}>
              <img src={BarChart} alt="" />{" "}
              {responseCollection?.question.length} av{" "}
              {responseCollection?.question.length}
            </Box>
            {
              // responseCollection && responseCollection?.question[0].timeleft != 0
              params?.state?.time && (
                <Box mt={2} sx={{ color: "#222" }}>
                  <img src={Clock} alt="" style={{ paddingRight: "4px" }} />
                  {responseCollection
                    ? dispSecondsAsMins(
                        responseCollection?.question[
                          responseCollection.question.length - 1
                        ].timeleft?.toFixed(0)
                      )
                    : "00:00"}
                </Box>
              )
            } 
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
            sx={{ backgroundColor: "#f9f9f9", width: 600 }}
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
                {responseCollection?.totalQuestion &&
                responseCollection?.correctAnswer != null ? (
                  <Typography variant="h4">
                    {responseCollection &&
                      responseCollection.correctAnswer +
                        " /" +
                        responseCollection.question.length}
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
                  Dina poäng
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
                {responseCollection ? (
                  <Typography variant="h4">
                    {/* <KantitativePercentageCalculator percentage={(responseCollection.correctAnswer / responseCollection.question.length) * 100} /> */}
                    {percentageCalculation(
                      (responseCollection.correctAnswer /
                        responseCollection.question.length) *
                        100
                    )}
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
                  Din normerade poäng
                </Typography>
              </Box>
            </Box>
            {
              // responseCollection && responseCollection?.question[0].timeleft != 0
              params?.state?.time && (
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
                      {timePerQues
                        ? dispSecondsAsMins(timePerQues?.toFixed(0))
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
                      {responseCollection
                        ? dispSecondsAsMins(
                            responseCollection?.question.at(-1).timeleft
                          )
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
              )
            }
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
            {responseCollection &&
              responseCollection?.question?.map((item, index) => {
                // console.log(params?.state?.time);
                return (
                  <Box
                    key={index}
                    padding={1}
                    mt={2}
                    mb={2}
                    onClick={() => {
                      let questionIndex = responseCollection.question.findIndex(
                        (element) => element._id === item._id
                      );
                      navigate("/question", {
                        state: {
                          questionIndex,
                          quiz: responseCollection,
                          quizId: params?.state?.quizId,
                          sectionCategory: params?.state?.sectionCategory,
                          data: {
                            value: false,
                            sectionCategory: params?.state?.sectionCategory,
                          },
                        },
                      });
                    }}
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
                        item.optionId === item.answer.option ? (
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
                        responseCollection.question.length}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h6"
                      style={{ fontSize: ".75rem", fontWeight: "600" }}
                    >
                      {item?.spendTime
                        ? "Tid: " + dispSecondsAsMins(item?.spendTime)
                        : params?.state?.time
                        ? "Tid: 00:00"
                        : ""}
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
              style={{
                width: 600,
                color: "#000DAB",
                borderColor: "#000DAB",
                borderRadius: "8px",
              }}
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
