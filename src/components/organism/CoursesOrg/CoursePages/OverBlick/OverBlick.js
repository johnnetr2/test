import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
import Tick from "../../../../../assets/Icons/Tick.svg";
import YellowStar from "../../../../../assets/Icons/YellowStar.svg";
import Warning from "../../../../../assets/Icons/Warning.svg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Paper,
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

const OverBlick = () => {
  const [quiz, setQuiz] = useState();
  const [testSubmitPopUp, setTestSubmitPopUp] = useState(false);
  const [timeOverPopUp, setTimeOverPopUp] = useState(false);
  const params = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setQuiz(params.state.quiz);
    params.state.timeLeft === 0 && setTimeOverPopUp(true);
  }, []);

  const submitQuiz = () => {
    setTimeOverPopUp(false);
    setOpen(true);
    const data = {
      simuleraQuiz: params.state.simuleraQuiz,
      simuleraSeason: params.state.simuleraSeason,
      quiz: params.state.SubmitedQuestions,
    };

    const URL = EndPoints.submitSimuleraTest;
    instance2.post(URL, data).then((response) => {
      if (response.status == 200) {
        const updatePreviosExam = EndPoints.updatePreviousExam;
        const examData = {
          simuleraSeason: params.state.simuleraSeason,
          user: response?.data?.simuleraQuizResult?.user,
          simuleraQuizResult: response?.data?.simuleraQuizResult._id,
        };
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
        console.log("Fail to submit questions");
      }
    });
  };

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
  }));

  const classes = useStyles(10);

  const ShowImage = (item) => {
    if (item.optionId) {
      return (
        <img style={{ width: "1rem", marginRight: "1rem" }} src={Tick} alt="" />
      );
    } else if (item.isFlaged) {
      return (
        <img
          style={{ width: "1rem", marginRight: "1rem" }}
          src={YellowStar}
          alt=""
        />
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
        // position="absolute"
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
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography variant="body1" className={classes.center_align}>
            Överblick
          </Typography>
          <HelpOutlineIcon sx={{ width: 100 }} />
        </Toolbar>
      </AppBar>
      <Box>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" size="5rem" />
        </Backdrop>
      </Box>
      <Container
        maxWidth="xl"
        disableGutters
        style={{
          backgroundColor: "#fff",
          // marginBottom: "2rem",
        }}
      >
        <Container
          maxWidth="md"
          style={{
            marginTop: 65,
            backgroundColor: "#f9f9f9",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            mt={3}
            sx={{ display: "flex", width: 600, flexDirection: "column" }}
          >
            <Typography variant="h6" component="h6">
              Överblick Provpass 5
            </Typography>
            <Typography variant="body2" component="body2">
              Innan du lämnar in se över vilka frågor du har missat, sparat samt
              gjort klart
            </Typography>
            <Box sx={{ display: "flex", marginTop: "1rem" }}>
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
            padding={6}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              height: 450,
              overflow: "auto",
              display: "flex",
              justifyContent: "center",
              border: "1px solid #e1e1e1",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "30rem",
                  marginBottom: "1rem",
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
          maxWidth="xl"
          disableGutters
          padding={2}
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "1px 1px 5px #999",
            // marginTop: '2.9rem'
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
    </div>
  );
};

export default OverBlick;
