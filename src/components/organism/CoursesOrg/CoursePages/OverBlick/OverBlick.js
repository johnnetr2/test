import React, { useEffect, useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
import Tick from "../../../../../assets/Icons/Tick.svg";
import YellowStar from "../../../../../assets/Icons/YellowStar.svg";
import Warning from "../../../../../assets/Icons/Warning.svg";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import BootstrapDialogTitle from "../../../../molecule/TestSubmitPopup/TestSubmitPopup";
import { EndPoints, instance2 } from "../../../../service/Route";
import TestOverPopup from "../../../../molecule/TestOverPopup/TestOverPopup";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import HelpPopup from "../../../../atom/HelpPopup/HelpPopup";
import swal from "sweetalert";
import BackButtonPopup from "../../../../molecule/BackButtonPopup/BackButtonPopup";

const OverBlick = () => {
  const [quiz, setQuiz] = useState();
  const [testSubmitPopUp, setTestSubmitPopUp] = useState(false);
  const [timeOverPopUp, setTimeOverPopUp] = useState(false);
  const params = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [helpPopup, setHelpPopup] = useState(false);
  const [backPressPopup, setBackPressPopup] = useState(false);

  useEffect(() => {
    setQuiz(params.state.quiz);
    params.state.timeLeft === 0 && setTimeOverPopUp(true);
  }, []);

  const submitQuiz = () => {
    setTimeOverPopUp(false);
    setTestSubmitPopUp(false)
    setOpen(true);
    const data = {
      simuleraQuiz: params.state.simuleraQuiz,
      simuleraSeason: params.state.simuleraSeason,
      quiz: params.state.SubmitedQuestions,
    };

    const URL = EndPoints.submitSimuleraTest;
    instance2.post(URL, data).then((response) => {
      // console.log(response.data, ";this is api response");
      if (response.status == 200) {
        const updatePreviosExam = EndPoints.updatePreviousExam;
        const examData = {
          simuleraSeason: params.state.simuleraSeason,
          user: localStorage.getItem("userId"),
          simuleraQuizResult: response?.data?.simuleraQuizResult._id,
        };
        console.log(examData, "exam data");
        instance2.post(updatePreviosExam, examData).then((res) => {
          setOpen(false);
        });
        navigate("/provresultat", {
          state: {
            seasonId: response.data.simuleraQuizResult.simuleraSeason,
            simuleraQuizResultId: response.data.simuleraQuizResult._id,
          },
        });
      } else {
        swal("Fail to submit questions");
      }
    });
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
      // [theme.breakpoints.down(1024)]: {
      //   // display: 'block'
      //   height: '5rem'
      // },
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
    scrollbar: {
      "&::-webkit-scrollbar": {
        width: 3,
        height: 5,
      },
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#505050",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#707070",
      },
    },
  }));

  const classes = useStyles(10);

  const ShowImage = (item) => {

    if (item.isFlaged) {
      return (
        <img
          style={{ width: "1rem", marginRight: "1rem" }}
          src={YellowStar}
          alt=""
        />
        
      );
    } else if (item.optionId) {
      return (
        <img style={{ width: "1rem", marginRight: "1rem" }} src={Tick} alt="" />
      );
    } else {
      return (
        <img
          style={{ width: "1rem", marginRight: "1rem" }}
          src={Warning}
          alt=""
        />
      );
    }
  };

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
              setBackPressPopup(true)
            }}
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography
            variant="body1"
            style={{ fontSize: "1.5rem", fontWeight: 400 }}
            className={classes.center_align}
          >
            Överblick
          </Typography>
          <Box onClick={() => setHelpPopup(!helpPopup)}>
            <HelpOutlineIcon />
          </Box>
        </Toolbar>
      </AppBar>
      {helpPopup && <HelpPopup />}

      <Box>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" size="5rem" />
        </Backdrop>
      </Box>
      <Container
        maxWidth="false"
        disableGutters
        style={{
          backgroundColor: "#fff",
          border: "1px solid #fff",
          height: "96vh",
          width: "100%"
          // minHeight: "100vh",
        }}
      >
        <Container
          disableGutters
          maxWidth="md"
          style={{ backgroundColor: "#fff" }}

        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* <Box mt={2} width={100} sx={{ color: "#222" }}>
              <img src={BarChart} alt="" />
              {currentIndex + 1} av {quiz?.question.length}
            </Box> */}
            {/* <Box mt={2} sx={{ color: "#222", display: "flex" }}>
              <img src={Clock} alt="" />
              {params.state.quiz &&
              params.state.quiz.question[currentIndex].questionAnswer
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
                    />
                  )}
              <BackButtonPopup
                status={backPressPopup}
                closePopup={() => setBackPressPopup(false)}
              />
            </Box> */}
          </Box>
          {/* <Box
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
                        numberOfAttemptedQuestions > index
                          ? "#6fcf97"
                          : "#B4B4B4",
                      marginLeft: "2px",
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
          </Box> */}
        </Container>
        <Container
          maxWidth="md"
          style={{
            marginTop: 65,
            backgroundColor: "#f9f9f9",
            // backgroundColor: "#999",
            border: "1px solid #fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "92.5%",
            width: "80%"
          }}
        >
          <Box
            mt={3}
            sx={{ display: "flex", width: 600, flexDirection: "column" }}
          >
            <Typography variant="h6" component="h6">
              Överblick Provpass {params?.state.provpass.simuleraQuizResult.length + 1}
            </Typography>
            <Typography variant="body2" component="body2">
              Innan du lämnar in se över vilka frågor du har missat, sparat samt
              gjort klart
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginTop: "1rem",
              }}
            >
              <Box
                mt={1}
                sx={{
                  color: "#222",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ marginRight: ".25rem", width: "1rem" }}
                  src={Tick}
                  alt=""
                />
                <Typography variant="body2">Gjord uppgit</Typography>
              </Box>
              <Box
                mt={1}
                ml={1}
                sx={{
                  color: "#222",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ marginRight: ".25rem", width: "1rem" }}
                  src={YellowStar}
                  alt=""
                />
                <Typography variant="body2">Sparad uppgift</Typography>
              </Box>
              <Box
                mt={1}
                ml={1}
                sx={{
                  color: "#222",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ marginRight: ".25rem", width: "1rem" }}
                  src={Warning}
                  alt=""
                />
                <Typography variant="body2">Missad uppgift</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            mt={3}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              padding: "2rem",
              height: 450,
              overflow: "auto",
              display: "flex",
              justifyContent: "center",
              // border: "1px solid #e1e1e1",
            }}
            className={classes.scrollbar}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "29rem",
                  // backgroundColor: "#f0f",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                  gridGap: "1rem",
                }}
              >
                {quiz &&
                  quiz.question.map((item, index) => {
                    return (
                      <Box
                        sx={{
                          border: "1px solid #e1e1e1",
                          width: "14rem",
                          height: "3rem",
                          display: "flex",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          navigate("/simuleraprov", {
                            state: {
                              questionIndex: index,
                              quiz: quiz,
                              timeLeft: params.state.timeLeft,
                              SubmittedQuestions: params?.state?.SubmitedQuestions,
                            },
                          })
                        }
                      >
                        <Box
                          sx={{
                            display: "flex",
                            width: "10rem",
                            alignItems: "center",
                            padding: "1rem",
                          }}
                        >
                          {ShowImage(item)}
                          <Typography
                            variant="body2"
                            sx={{ textTransform: "uppercase" }}
                          >
                            Uppgift {index + 1}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <img
                            style={{ marginRight: "1rem", width: ".75rem" }}
                            src={RightArrow}
                            alt=""
                          />
                        </Box>
                      </Box>
                    );
                  })}
              </Box>
              <TestOverPopup
                status={timeOverPopUp}
                closePopUp={() => setTimeOverPopUp(false)}
                onClick={() => submitQuiz()}
              />
            </Box>
          </Box>
        </Container>
        <BootstrapDialogTitle
          status={testSubmitPopUp}
          closePopUp={() => setTestSubmitPopUp(false)}
          testSubmit={() => submitQuiz()}
        />

        {/* <Box
          sx={{
            backgroundColor: "green",
            height: '5rem',
            display: 'flex',
            marginTop: '2.3rem'
          }}
        >
        </Box> */}

        <Box
          maxWidth="false"
          disableGutters
          padding={2}
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "1px 1px 5px #999",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,

          }}
        >
          <Button
            variant="outlined"
            style={{
              width: 600,
              textTransform: "capitalize",
              color: "#0A1596",
              border: "1px solid #0A1596",
            }}
            onClick={() => setTestSubmitPopUp(true)}
          >
            Lämna in provpass
          </Button>
        </Box>
      </Container>
      <BackButtonPopup 
        status={backPressPopup}
        closePopup={() => setBackPressPopup(false)}
      />
    </div>
  );
};

export default OverBlick;
