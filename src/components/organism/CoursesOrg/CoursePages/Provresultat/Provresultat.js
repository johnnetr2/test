import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  Table,
  TableHead,
  TableContainer,
  Button,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FacebookIcon from "../../../../../assets/Icons/FacebookIcon.svg";
import TwitterIcon from "../../../../../assets/Icons/TwitterIcon.svg";
import LinkedInIcon from "../../../../../assets/Icons/LinkedInIcon.svg";
import WhatsappIcon from "../../../../../assets/Icons/WhatsappIcon.svg";
import LinkIcon from "../../../../../assets/Icons/LinkIcon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { EndPoints, instance2 } from "../../../../service/Route";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import HelpPopup from "../../../../atom/HelpPopup/HelpPopup";
import ExamResults from "../../../../../assets/Static/ExamResults.json";
import { appColors } from "../../../../service/commonService";

const Provresultat = () => {
  const navigate = useNavigate();
  const params = useLocation();
  const [testSummary, setTestSummary] = useState();
  const [totalQuestionsOfKvantitative, setTotalQuestionsOfKvantitative] =
    useState();
  const [correctAnswersOfKvantitative, setCorrectAnswersOfKvantitative] =
    useState();
  const [totalQuestionsOfVerbal, setTotalQuestionsOfVerbal] = useState();
  const [correctAnswersOfVerbal, setCorrectAnswersOfVerbal] = useState();
  const [open, setOpen] = useState(true);
  const [helpPopup, setHelpPopup] = useState(false);
  const [participantsAverage, setParticipantsAverage] = useState(null);
  const [participantsNormalized, setParticipantsNormalized] = useState(null);
  const [season, setSeason] = useState(null);

  useEffect(() => {
    const URL = EndPoints.testSummaryByHistoryPage + params.state.quizId;
    instance2.get(URL).then((response) => {
      setOpen(false);
      setTestSummary(response.data);
      setVerbalQuantitativeStates(response.data);
    });
  }, []);

  const setVerbalQuantitativeStates = (data) => {
    setCorrectAnswersOfKvantitative(
      data.correctQuestions_of_XYZ +
        data.correctQuestions_of_KVA +
        data.correctQuestions_of_NOG +
        data.correctQuestions_of_DTK
    );
    setTotalQuestionsOfKvantitative(
      data.totalQuestion_of_XYZ +
        data.totalQuestion_of_KVA +
        data.totalQuestion_of_NOG +
        data.totalQuestion_of_DTK
    );

    setCorrectAnswersOfVerbal(
      data.correctQuestions_of_ORD +
        data.correctQuestions_of_LAS +
        data.correctQuestions_of_MEK +
        data.correctQuestions_of_ELF
    );
    setTotalQuestionsOfVerbal(
      data.totalQuestion_of_ORD +
        data.totalQuestion_of_LAS +
        data.totalQuestion_of_MEK +
        data.totalQuestion_of_ELF
    );
  };

  useEffect(() => {
    if (params.state.seasonId) {
      const URL = `${EndPoints.getPreviousExams}/${params.state.seasonId}`;
      instance2.get(URL).then((response) => {
        setSeason(response.data.simuleraSeason);
        const simuleraSeasonYear =
          response.data.simuleraSeason.title.split(" ")[1];
        const rawPointsExam = ExamResults.rawPoints.find((item) => {
          const examName = `${item.season} ${item.year}`;
          return (
            examName === response.data.simuleraSeason.title ||
            examName ===
              `${response.data.simuleraSeason.month} ${simuleraSeasonYear}`
          );
        });
        const normalizedPointsExam = ExamResults.normalizedPoints.find(
          (item) => {
            const examName = `${item.season} ${item.year}`;
            return (
              examName === response.data.simuleraSeason.title ||
              examName ===
                `${response.data.simuleraSeason.month} ${simuleraSeasonYear}`
            );
          }
        );
        setParticipantsAverage(rawPointsExam);
        setParticipantsNormalized(normalizedPointsExam);
      });
    }
  }, []);

  function createSummaryData(
    rowName,
    totalCorrectAnswers,
    totalQuestions,
    averagePoints
  ) {
    return { rowName, totalCorrectAnswers, totalQuestions, averagePoints };
  }

  function createExamPartData(
    examPart,
    correctAnswers,
    totalQuestions,
    averageOtherParticipants,
    normalizedPoints
  ) {
    return {
      examPart,
      correctAnswers,
      totalQuestions,
      averageOtherParticipants,
      normalizedPoints,
    };
  }

  const kvantPartRows = [
    createExamPartData(
      "XYZ",
      testSummary?.correctQuestions_of_XYZ,
      testSummary?.totalQuestion_of_XYZ,
      participantsAverage?.XYZ
    ),
    createExamPartData(
      "KVA",
      testSummary?.correctQuestions_of_KVA,
      testSummary?.totalQuestion_of_KVA,
      participantsAverage?.KVA
    ),
    createExamPartData(
      "NOG",
      testSummary?.correctQuestions_of_NOG,
      testSummary?.totalQuestion_of_NOG,
      participantsAverage?.NOG
    ),
    createExamPartData(
      "DTK",
      testSummary?.correctQuestions_of_DTK,
      testSummary?.totalQuestion_of_DTK,
      participantsAverage?.DTK
    ),
    createExamPartData(
      "SAMMANFATTNING",
      correctAnswersOfKvantitative,
      totalQuestionsOfKvantitative,
      participantsAverage?.KVANT,
      correctAnswersOfKvantitative &&
        totalQuestionsOfKvantitative &&
        ((correctAnswersOfKvantitative / totalQuestionsOfKvantitative) * 2)
          ?.toFixed(1)
          .replace(/\.0+$/, "")
    ),
  ];

  const verbalPartRows = [
    createExamPartData(
      "ORD",
      testSummary?.correctQuestions_of_ORD,
      testSummary?.totalQuestion_of_ORD,
      participantsAverage?.ORD
    ),
    createExamPartData(
      "LAS",
      testSummary?.correctQuestions_of_LAS,
      testSummary?.totalQuestion_of_LAS,
      participantsAverage?.LÄS
    ),
    createExamPartData(
      "MEK",
      testSummary?.correctQuestions_of_MEK,
      testSummary?.totalQuestion_of_MEK,
      participantsAverage?.MEK
    ),
    createExamPartData(
      "ELF",
      testSummary?.correctQuestions_of_ELF,
      testSummary?.totalQuestion_of_ELF,
      participantsAverage?.ELF
    ),
    createExamPartData(
      "SAMMANFATTNING",
      correctAnswersOfVerbal,
      totalQuestionsOfVerbal,
      participantsAverage?.VERB,
      correctAnswersOfVerbal &&
        totalQuestionsOfVerbal &&
        ((correctAnswersOfVerbal / totalQuestionsOfVerbal) * 2)
          ?.toFixed(1)
          .replace(/\.0+$/, "")
    ),
  ];

  const wholeExamRows = [
    createSummaryData(
      "SAMMANFATTNING",
      correctAnswersOfKvantitative + correctAnswersOfVerbal,
      totalQuestionsOfKvantitative + totalQuestionsOfVerbal,
      participantsAverage?.Total
    ),
  ];

  const useStyles = makeStyles((theme) => ({
    main: {
      "@media (max-width: 1025px)": {
        width: "85%",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      [theme.breakpoints.up(1025)]: {
        // width: "70vw",
        padding: "0 8rem",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },

    info: {
      [theme.breakpoints.down(1025)]: {
        display: "flex",
        flexDirection: "column",
      },
      [theme.breakpoints.up(1025)]: {
        display: "flex",
        flexDirection: "column",
        // paddingLeft: "4rem",
      },
    },

    cards: {
      [theme.breakpoints.up(1025)]: {
        // width: "49%",
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #e1e1e1",
        borderRadius: "0.3rem",
        boxShadow: "0px 5px 10px #f2f2f2",
        marginTop: "3rem",
        padding: "2rem",
      },
      [theme.breakpoints.down(1025)]: {
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #e1e1e1",
        borderRadius: "0.3rem",
        boxShadow: "0px 1px 1px #e1e1e1",
        // fontSize: "5rem",
        marginTop: "2rem",
      },
    },

    resultText: {
      [theme.breakpoints.up(1025)]: {
        // paddingLeft: "4rem",
        paddingTop: "5rem",
      },
      [theme.breakpoints.down(1025)]: {
        paddingLeft: "1.3rem",
        paddingTop: "2rem",
      },
    },

    resultCard: {
      [theme.breakpoints.up(900)]: {
        display: "flex",
        marginLeft: "4rem",
        // width: '80%',
        // backgroundColor: 'blue'
      },
      [theme.breakpoints.down(1025)]: {
        boxShadow: "none",
        border: "1px solid #e1e1e1",
        marginLeft: "1.3rem",
        width: "94%",
        backgroundColor: "blue",
      },
    },

    footer: {
      [theme.breakpoints.up(1025)]: {
        display: "flex",
        alignItems: "center",
        marginTop: "2%",
        // justifyContent: "flex-end",
      },
      [theme.breakpoints.down(1025)]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2%",
      },
    },

    exitButton: {
      [theme.breakpoints.up(1025)]: {
        display: "flex",
      },
      [theme.breakpoints.down(1025)]: {
        display: "flex",
        justifyContent: "center",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <AppBar
        position="static"
        style={{
          maxWidth: "false",
          boxShadow: "none",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        <Toolbar
          style={{
            backgroundColor: "#F9F9F9",
            borderBottom: "1px solid #F9F9F9",
          }}
        >
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#222",
              // fontSize: "1.5rem",
              // fontWeight: 400,
            }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 3 }}
          >
            Provresultat
          </Typography>
          <Box onClick={() => setHelpPopup(!helpPopup)}>
            <HelpOutlineIcon style={{ color: "#222" }} />
          </Box>
        </Toolbar>
      </AppBar>
      {helpPopup && <HelpPopup />}
      <Box
        sx={{
          marginTop: "3%",
          // overflowX: "hidden",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className={classes.main}>
          <Box sx={{ backgroundColor: "transparent", width: "100%" }}>
            <Box
              className={classes.info}
              style={{
                display: "flex",
                flexDirection: "column",

                // paddingLeft: width > 1025 ? "3.5rem" : "1rem",
              }}
            >
              <Typography
                style={{ fontWeight: "500", marginTop: "4%" }}
                variant="h4"
                component="h4"
              >
                Provresultat - {season?.title}, {season?.month}
              </Typography>
              <Typography style={{ fontWeight: "300", marginTop: "3%" }}>
                <Typography>
                  <b>Normerad poäng:</b> Ges i skalan 0,0-2,0 beroende på ditt
                  resultat jämfört med andra provdeltagare
                </Typography>
                <Typography>
                  <b>Medelvärde normerad poäng:</b> Snittpoängen bland alla
                  provdeltagarna det året.
                </Typography>
                <Typography>
                  <b>Normerad poäng per del:</b> Poäng för kvantiativ och verbal
                  del för sig.
                </Typography>
                <Typography>
                  <b>Antal poäng:</b> Så kallade råpoäng, d.v.s antal rätta
                  svar.
                </Typography>
                <Typography>
                  <b>Medelv. samtliga provdelt:</b> Medelvärdet råpoäng alla
                  deltagare.
                </Typography>
              </Typography>
            </Box>

            <Box>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
              >
                <CircularProgress color="inherit" size="5rem" />
              </Backdrop>
            </Box>
            <Box
              style={{
                // width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "3%",
                backgroundColor: "transparent",
              }}
            >
              <Box
                sx={{
                  dispaly: "flex",
                  flexDirection: "column",
                  paddingRight: "1rem",
                  flexBasis: "50%",
                }}
              >
                <Box
                  className={classes.cards}
                  // sx={{
                  //   width: "24.5vw",
                  //   height: "15vh",
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   backgroundColor: "#fff",
                  //   border: "1px solid #e1e1e1",
                  //   borderRadius: "0.3rem",
                  //   boxShadow: "0px 1px 1px #e1e1e1",
                  // }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="h3" component="h3">
                      {testSummary?.correctQuestion}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        marginLeft: ".5rem",
                        fontWeight: 500,
                        color: "#505050",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Antal poäng
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className={classes.cards}
                  // sx={{
                  //   width: "24.5vw",
                  //   height: "15vh",
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   backgroundColor: "#fff",
                  //   marginTop: "5%",
                  //   borderRadius: "0.3rem",
                  //   boxShadow: "0px 1px 1px #e1e1e1",
                  // }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="h3" component="h3">
                      {participantsAverage?.Total}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "0.5rem",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          marginLeft: ".3rem",
                          fontWeight: 500,
                          color: "#505050",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Medelvärde samtliga
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          marginLeft: ".3rem",
                          fontWeight: 500,
                          color: "#505050",
                          marginBottom: "0.25rem",
                        }}
                      >
                        provdeltagare
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  dispaly: "flex",
                  flexDirection: "column",
                  paddingLeft: "1rem",
                  flexBasis: "50%",
                }}
              >
                <Box
                  className={classes.cards}
                  // sx={{
                  //   width: "24.5vw",
                  //   height: "15vh",
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   backgroundColor: "#fff",
                  //   border: "1px solid #e1e1e1",
                  //   borderRadius: "0.3rem",
                  //   boxShadow: "0px 1px 1px #e1e1e1",
                  // }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="h3" component="h3">
                      {testSummary
                        ? testSummary?.normering
                            ?.toFixed(1)
                            .replace(/\.0+$/, "")
                        : ""}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        marginLeft: ".5rem",
                        fontWeight: 500,
                        color: "#505050",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Normerad poäng
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className={classes.cards}
                  // sx={{
                  //   width: "24.5vw",
                  //   height: "15vh",
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   backgroundColor: "#fff",
                  //   marginTop: "5%",
                  //   border: "1px solid #e1e1e1",
                  //   borderRadius: "0.5rem",
                  //   boxShadow: "0px 1px 1px #e1e1e1",
                  // }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="h3" component="h3">
                      {participantsNormalized?.average}
                    </Typography>
                    <Box sx={{ marginLeft: "0.5rem" }}>
                      <Typography
                        variant="body1"
                        sx={{
                          marginLeft: ".5rem",
                          fontWeight: 500,
                          color: "#505050",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Medelvärde
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          marginLeft: ".5rem",
                          fontWeight: 500,
                          color: "#505050",
                          marginBottom: "0.25rem",
                        }}
                      >
                        normerad poäng
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                className={classes.resultText}
                // style={{ marginTop: "3%", marginLeft: '4.5rem' }}
              >
                <Typography variant="h5" component="h5">
                  Kvantitativ del resultat
                </Typography>
              </Typography>
            </Box>

            <TableContainer
              sx={{
                display: "flex",
                // marginLeft: width > 1025 ? "0" : "0",
                // width: width > 1025 ? "47.1rem" : "100%",
                boxShadow: "none",
                border: "1px solid #e1e1e1",
              }}
              component={Paper}
            >
              <Table sx={{ boxShadow: "none" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Provdel</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>DITT ANTAL RATTA SVAR</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>ANTAL UPPG.</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>MEDELV. SAMTLIGA PROVDELT.</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>NORMERAD POANG PER DEL</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {kvantPartRows.map((row) => (
                    <TableRow
                      key={row.examPart}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.examPart}
                      </TableCell>
                      <TableCell align="left">{row.correctAnswers}</TableCell>
                      <TableCell align="left">{row.totalQuestions}</TableCell>
                      <TableCell align="left">
                        {row.averageOtherParticipants}
                      </TableCell>
                      <TableCell align="left">{row.normalizedPoints}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box>
              <Typography
                className={classes.resultText}
                //style={{ marginTop: "3%", fontWeight: "bold" }}
              >
                <Typography variant="h5" component="h5">
                  Verbal del resultat
                </Typography>
              </Typography>
            </Box>

            <TableContainer
              sx={{
                display: "flex",
                // marginLeft: width > 1025 ? "4rem" : "1.3rem",
                // width: width > 1025 ? "47.1rem" : "94%",
                boxShadow: "none",
                border: "1px solid #e1e1e1",
              }}
              component={Paper}
            >
              <Table sx={{ boxShadow: "none" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Provdel</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>DITT ANTAL RATTA SVAR</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>ANTAL UPPG.</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>MEDELV. SAMTLIGA PROVDELT.</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>NORMERAD POANG PER DEL</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {verbalPartRows.map((row) => (
                    <TableRow
                      key={row.examPart}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.examPart}
                      </TableCell>
                      <TableCell align="left">{row.correctAnswers}</TableCell>
                      <TableCell align="left">{row.totalQuestions}</TableCell>
                      <TableCell align="left">
                        {row.averageOtherParticipants}
                      </TableCell>
                      <TableCell align="left">{row.normalizedPoints}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <Typography
                className={classes.resultText}
                //style={{ marginTop: "3%", fontWeight: "bold" }}
              >
                <Typography variant="h5" component="h5">
                  Hela provet
                </Typography>
              </Typography>
            </Box>
            <TableContainer
              sx={{
                display: "flex",
                // marginLeft: width > 1025 ? "4rem" : "1.3rem",
                // width: width > 1025 ? "47.1rem" : "94%",
                boxShadow: "none",
                border: "1px solid #e1e1e1",
              }}
              component={Paper}
            >
              <Table sx={{ boxShadow: "none" }} aria-label="simple table">
                <TableHead>
                  {/* <TableRow>
                                    </TableRow> */}
                </TableHead>
                <TableBody>
                  {wholeExamRows.map((row) => (
                    <TableRow
                      key={row.rowName}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: "0",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ width: "5rem" }}
                      >
                        {row.rowName}
                      </TableCell>
                      <TableCell style={{ width: "10rem" }} align="left">
                        {row.totalCorrectAnswers}
                      </TableCell>
                      <TableCell style={{ width: "7rem" }} align="left">
                        {row.totalQuestions}
                      </TableCell>
                      <TableCell align="left">{row.averagePoints}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <Typography
                className={classes.resultText}
                //style={{ marginTop: "3%", fontWeight: "bold" }}
              >
                <Typography variant="h5" component="h5">
                  Resultat per provpass
                </Typography>
              </Typography>
            </Box>
            <TableContainer
              sx={{
                display: "flex",
                // marginLeft: width > 1025 ? "4rem" : "1.3rem",
                // width: width > 1025 ? "47.1rem" : "94%",
                boxShadow: "none",
                border: "1px solid #e1e1e1",
              }}
              component={Paper}
            >
              <Table sx={{ boxShadow: "none" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>PROVPASS</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>DITT ANTAL RATTA SVAR</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>ANTAL UPPG.</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>SE FRAGOR OCH SVAR</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testSummary &&
                    testSummary.quizArray.map((row, index) => (
                      <TableRow
                        // key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {"Provpass"} {index + 1}
                        </TableCell>
                        <TableCell align="left">
                          {row.correctAnswerCounter}
                        </TableCell>
                        <TableCell align="left">{row.totalQuestions}</TableCell>
                        <TableCell
                          onClick={() =>
                            navigate("/rattadoverblick", {
                              state: {
                                quizId: row._id,
                                seasonId: row.simuleraSeason,
                              },
                            })
                          }
                          align="left"
                        >
                          <Button
                            style={{
                              backgroundColor: "#fff",
                              color: appColors.blueColor,
                              border: `1px solid ${appColors.blueColor}`,
                            }}
                          >
                            SE RATTNING
                          </Button>
                        </TableCell>
                        <TableCell align="left">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box className={classes.footer}>
              {/* <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "3px solid orange",
                }}
              > */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  paddingRight: "1.5rem",
                }}
              >
                {/* <Typography
                  variant="body2"
                  style={{ fontSize: ".75rem", marginTop: "0.3rem" }}
                >
                  Dela resultat med dina vanner:
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingRight: "1rem",
                  }}
                >
                  <img
                    style={{ marginLeft: "0.5rem", height: "1.5rem" }}
                    src={FacebookIcon}
                  />
                  <img
                    style={{ marginLeft: "0.5rem", height: "1.5rem" }}
                    src={TwitterIcon}
                  />
                  <img
                    style={{ marginLeft: "0.5rem", height: "1.5rem" }}
                    src={LinkedInIcon}
                  />
                  <img
                    style={{ marginLeft: "0.5rem", height: "1.5rem" }}
                    src={WhatsappIcon}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    // fontSize: "10px",
                    border: "1px solid #e1e1e1",
                    paddingTop: "0.5rem",
                    paddingLeft: "0.5rem",
                    paddingBottom: "0.5rem",
                    display: "flex",
                    cursor: "pointer",
                  }}
                  // onClick={() => openInNewTab('https://stackoverflow.com')}
                >
                  
                  <img src={LinkIcon} />
                  <Typography
                    sx={{
                      fontSize: "0.6rem",
                      marginLeft: "0.3rem",
                      // width: "23rem",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh",
                        "_blank"
                      )
                    }
                  >
                    https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh
                  </Typography>
                 
                </Box> */}
              </Box>

              {/* </Box> */}
            </Box>
            <Box className={classes.exitButton}>
              <Button
                variant="outlined"
                sx={{
                  // width: width > 1025 ? "91%" : "92%",
                  width: "100%",
                  border: `1px solid ${appColors.blueColor}`,
                  margin: "1rem 0",
                  color: appColors.blueColor,
                  display: "flex",
                }}
                onClick={() => navigate("/courses")}
              >
                Klar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Provresultat;
