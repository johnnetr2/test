import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  LinearProgress,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { EndPoints, instance2 } from "../../../../../service/Route";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BarChart from "../../../../../../assets/Icons/BarChart.svg";
import UnAttemptedCheckBox from "../../../../../../assets/Icons/UnAttemptedCheckBox.svg";
import CircularProgress from "@mui/material/CircularProgress";
import Clock from "../../../../../../assets/Icons/Clock.svg";
import Correct from "../../../../../../assets/Imgs/correct.png";
import { DTKNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { ELFNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { KVANormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { LASNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { MEKNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { NOGNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { ORDNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import RightArrow from "../../../../../../assets/Icons/RightArrow.svg";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import { XYZNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import swal from "sweetalert";
import { useSelector } from "react-redux";

export const dispSecondsAsMins = (seconds) => {
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

export const percentageCalculation = (params, value) => {
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
const ResultSummaryOrg = () => {
  const params = useLocation();
  const [timePerQues, setTimePerQues] = useState();
  const [progress, setProgress] = useState(0);
  const [responseCollection, setresponseCollection] = useState();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.value);

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
    const URL = EndPoints.getQuizResult + params?.state?.quizId;
    let sumOfTimeSpent = 0;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    instance2
      .get(URL, { headers })
      .then((response) => {
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
        setresponseCollection(response.data);
      })
      .catch((error) => {
        console.log(error, "this is the console of error ");
      });

    return () => {
      // clearInterval(timer);
    };
  }, []);

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
            sx={{
              backgroundColor: "#f9f9f9",
              width: "100%",
              maxWidth: 600,
            }}
          >
            <Typography variant="h5" component="h5">
              Resultat
            </Typography>
            <Box
              sx={{
                display: !params?.state?.time && "flex",
                gap: !params?.state?.time && 20,
                alignItems: !params?.state?.time && "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  rowGap: "1rem",
                }}
              >
                <Box
                  width={{ xs: "100%", sm: 290 }}
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

                {params?.state?.time && (
                  <Box
                    width={{ xs: "100%", sm: 290 }}
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
                          params,
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
                )}
              </Box>

              {
                // responseCollection && responseCollection?.question[0].timeleft != 0
                // params?.state?.time && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    // mt={2}
                    width={{ xs: "100%", sm: 290 }}
                    height={100}
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid #e1e1e1",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      marginTop: params?.state?.time && "1.5rem",
                    }}
                  >
                    <Typography variant="h4">
                      {timePerQues ? (
                        dispSecondsAsMins(timePerQues?.toFixed(0))
                      ) : (
                        <Box sx={{ display: "flex" }}>
                          <CircularProgress />
                        </Box>
                      )}
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
                  {params?.state?.time && (
                    <Box
                      // mt={2}
                      width={{ xs: "100%", sm: 290 }}
                      height={100}
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #e1e1e1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h4">
                        {responseCollection ? (
                          dispSecondsAsMins(
                            responseCollection?.question.at(-1).timeleft
                          )
                        ) : (
                          <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                          </Box>
                        )}
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
                  )}
                </Box>
                // )
              }
            </Box>
          </Box>

          <Box mt={2} sx={{ width: "100%", maxWidth: 600, display: "flex" }}>
            <Typography variant="h5">Dina svar</Typography>
          </Box>
          <Box
            paddingX={4}
            mt={2}
            sx={{
              backgroundColor: "#fff",
              width: "100%",
              maxWidth: 600,
              height: "fit-content",
              border: "1px solid #e1e1e1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {responseCollection &&
              responseCollection?.question?.map((item, index) => {
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
                          time: params?.state?.time,
                        },
                      });
                    }}
                    style={{
                      height: "3.5rem",
                      border: "1px solid #E3E3E3",
                      width: "100%",
                      maxWidth: 550,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "blue",
                      },
                    }}
                  >
                    <Box>
                      <FormControlLabel
                        control={
                          item.optionId === item.answer.option ? (
                            <img
                              style={{ height: "1.5rem", marginLeft: "1.5rem" }}
                              src={Correct}
                            />
                          ) : item.optionId === null ? (
                            <img
                              src={UnAttemptedCheckBox}
                              style={{ height: "1.5rem", marginLeft: "1.5rem" }}
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
                        }}
                        variant="body1"
                        component="body1"
                      >
                        {"Uppgift " +
                          `${index + 1}` +
                          " av " +
                          responseCollection.question.length}
                      </Typography>
                    </Box>
                    <Box display={"flex"}>
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{ fontSize: ".75rem", fontWeight: "600" }}
                      >
                        {item?.spendTime
                          ? "Tid: " + dispSecondsAsMins(item?.spendTime)
                          : "Tid: 00:00"}
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "1.2rem",
                        }}
                      >
                        <img src={RightArrow} className={classes.size} alt="" />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
          <Box padding={1} m={2} sx={{ width: "100%", maxWidth: 615 }}>
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
                width: "100%",
                maxWidth: 600,
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
