import React, { useEffect, useState } from "react";
import BarChart from "../../../../../assets/Icons/BarChart.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
import Clock from "../../../../../assets/Icons/Clock.svg";
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
} from "@material-ui/core";
import Correct from "../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../assets/Imgs/wrong.png";
import { useLocation, useNavigate } from "react-router-dom";
import { EndPoints, instance2 } from "../../../../service/Route";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const RattedOverblick = () => {
  const params = useLocation();
  const [result, setResult] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const dispSecondsAsMins = (seconds) => {
    // 25:00
    const mins = Math.floor(seconds / 60);
    const seconds_ = Math.floor(seconds % 60);
    return (
      (mins.toString().length === 1 ? "0" + mins.toString() : mins.toString()) +
      ":" +
      (seconds_ == 0
        ? "00"
        : seconds_.toString().length == 1
        ? "0" + seconds_.toString()
        : seconds_.toString())
    );
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

  useEffect(() => {
    const URL = EndPoints.getSimuleraQuizResult + params.state.quizId;
    instance2.get(URL).then((response) => {
      console.log(response.data.simuleraQuiz.question);
      setOpen(false);
      setResult(response.data);
    });
  }, []);

  const classes = useStyles(10);

  return (
    <div style={{ backgroundColor: "#fff" }}>
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
              height: "4rem",
              width: "2.3rem",
              display: "flex",
              alignItems: "center",
              borderRight: "1px solid #E1E1E1",
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("/provresultat", {
                state: {
                  seasonId: params.state?.examResultData?.seasonId,
                  quizId: params.state?.examResultData?.quizId,
                },
              })
            }
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography variant="body1" className={classes.center_align}>
            Rättad överblick
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

      {!open && (
        <Container
          maxWidth="lg"
          disableGutters
          style={{
            backgroundColor: "#fff",
            paddingBottom: 24,
          }}
        >
          <Container
            maxWidth="md"
            disableGutters
            style={{ backgroundColor: "#fff" }}
          >
            <Box
              mt={8}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box mt={2} sx={{ color: "#222" }}>
                <img src={BarChart} alt="" />
                {"1"} av {result?.simuleraQuiz.question.length}
              </Box>
              <Box mt={2} sx={{ color: "#222", marginRight: "0.3rem" }}>
                <img src={Clock} alt="" style={{ marginRight: "0.2rem" }} />
                Slutfört
              </Box>
            </Box>
            <Box
              mt={2}
              sx={{
                width: "100%",
                height: ".65rem",
                backgroundColor: "#6FCF97",
              }}
            ></Box>
          </Container>

          <Container
            maxWidth="md"
            style={{
              marginTop: 0,
              backgroundColor: "#f9f9f9",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              mt={5}
              paddingY={2}
              paddingX={10}
              sx={{
                backgroundColor: "#f9f9f9",
              }}
            >
              <Typography variant="h5" component="h5">
                Provpass {params?.state?.provpassNumber} {params?.state?.provpassType} del
              </Typography>
              <Typography
                variant="body1"
                component="body1"
                sx={{ fontSize: "0.5rem" }}
              >
                Har kan du titta närmre på din resultat för varje uppgift
              </Typography>
            </Box>

            <Box
              mt={2}
              marginX={10}
              padding={1}
              sx={{
                backgroundColor: "#fff",
                height: "fit-content",
                // width: 'fit-content',
                border: "1px solid #e1e1e1",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  // width: "100%",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                {result &&
                  result.simuleraQuiz.question.map((item, index) => {
                    return (
                      <Box
                        mt={2}
                        mb={2}
                        padding={1}
                        style={{
                          border: "1px solid #E3E3E3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexDirection: "row",
                          width: "45%",
                          height: "3.5rem",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          navigate("/simuleraprov", {
                            state: {
                              quiz: result?.simuleraQuiz,
                              questionIndex: index,
                              seasonId: params.state.seasonId,
                              quizId: params.state.quizId,
                              examResultData: params?.state?.examResultData
                            },
                          })
                        }
                      >
                        <Box style={{ display: "flex", alignItems: "center" }}>
                          {item.questionAnswer.option === item.optionId ? (
                            <img
                              src={Correct}
                              style={{
                                height: "1.5rem",
                                marginRight: "0.75rem",
                              }}
                            />
                          ) : (
                            <img
                              src={Wrong}
                              style={{
                                height: "1.5rem",
                                marginRight: "0.75rem",
                              }}
                            />
                          )}
                          <Typography
                            style={{
                              textTransform: "uppercase",
                              fontSize: "0.75rem",
                              fontWeight: "600",
                              display: "flex",
                              width: "7rem",
                            }}
                            variant="body1"
                            component="body1"
                          >
                            Uppgift {index + 1} av{" "}
                            {result?.simuleraQuiz.question.length}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Typography
                            variant="h6"
                            component="h6"
                            style={{ fontSize: ".75rem", fontWeight: "600" }}
                          >
                            TID: {dispSecondsAsMins(item.spendtime)}
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "0.2rem",
                            }}
                          >
                            <img
                              src={RightArrow}
                              className={classes.size}
                              alt=""
                            />
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Container>
        </Container>
      )}
    </div>
  );
};

export default RattedOverblick;
