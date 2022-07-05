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
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from '../../../../molecule/WindowDimensions/dimension'


const Provresultat = () => {
  const navigate = useNavigate()
  const params = useLocation()
  const [testSummary, setTestSummary] = useState()
  const [totalQuestionsOfKvantitative, setTotalQuestionsOfKvantitative] = useState()
  const [correctAnswersOfKvantitative, setCorrectAnswersOfKvantitative] = useState()
  const [totalQuestionsOfVerbal, setTotalQuestionsOfVerbal] = useState()
  const [correctAnswersOfVerbal, setCorrectAnswersOfVerbal] = useState()
  const [open, setOpen] = useState(true);
  const { height, width } = useWindowDimensions();


  useEffect(() => {
    console.log(params.state)
    if (params.state.seasonId) {
      const URL = EndPoints.testSummary + params.state.seasonId
      instance2.get(URL).then(response => {
        setOpen(false)
        console.log(response.data, 'this is test summary')
        setTestSummary(response.data)
        setCorrectAnswersOfKvantitative(response.data.correctQuestions_of_XYZ + response.data.correctQuestions_of_KVA + response.data.correctQuestions_of_NOG + response.data.correctQuestions_of_DTK)
        setTotalQuestionsOfKvantitative(response.data.totalQuestion_of_XYZ + response.data.totalQuestion_of_KVA + response.data.totalQuestion_of_NOG + response.data.totalQuestion_of_DTK)

        setCorrectAnswersOfVerbal(response.data.correctQuestions_of_ORD + response.data.correctQuestions_of_LAS + response.data.correctQuestions_of_MEK + response.data.correctQuestions_of_ELF)
        setTotalQuestionsOfVerbal(response.data.totalQuestion_of_ORD + response.data.totalQuestion_of_LAS + response.data.totalQuestion_of_MEK + response.data.totalQuestion_of_ELF)
      })
    } else {

      const URL = EndPoints.testSummaryByHistoryPage + params.state.quizId
      instance2.get(URL).then(response => {
        setOpen(false)
        console.log(response.data, 'this is test summary')
        setTestSummary(response.data)
        setCorrectAnswersOfKvantitative(response.data.correctQuestions_of_XYZ + response.data.correctQuestions_of_KVA + response.data.correctQuestions_of_NOG + response.data.correctQuestions_of_DTK)
        setTotalQuestionsOfKvantitative(response.data.totalQuestion_of_XYZ + response.data.totalQuestion_of_KVA + response.data.totalQuestion_of_NOG + response.data.totalQuestion_of_DTK)

        setCorrectAnswersOfVerbal(response.data.correctQuestions_of_ORD + response.data.correctQuestions_of_LAS + response.data.correctQuestions_of_MEK + response.data.correctQuestions_of_ELF)
        setTotalQuestionsOfVerbal(response.data.totalQuestion_of_ORD + response.data.totalQuestion_of_LAS + response.data.totalQuestion_of_MEK + response.data.totalQuestion_of_ELF)
      })
    }

  }, [])

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("XYZ", testSummary?.correctQuestions_of_XYZ, testSummary?.totalQuestion_of_XYZ, 12.1),
    createData("KYA", testSummary?.correctQuestions_of_KVA, testSummary?.totalQuestion_of_KVA, 10.1),
    createData("NOG", testSummary?.correctQuestions_of_NOG, testSummary?.totalQuestion_of_NOG, 6.3),
    createData("DRK", testSummary?.correctQuestions_of_DTK, testSummary?.totalQuestion_of_DTK, 12.7),
    createData("SAMMANFATTNING", correctAnswersOfKvantitative, totalQuestionsOfKvantitative, 41.2, (correctAnswersOfKvantitative / totalQuestionsOfKvantitative * 2).toFixed(1).replace(/\.0+$/, '')),
  ];

  const row = [
    createData("ORD", testSummary?.correctQuestions_of_ORD, testSummary?.totalQuestion_of_ORD, 12.1),
    createData("LAS", testSummary?.correctQuestions_of_LAS, testSummary?.totalQuestion_of_LAS, 10.1),
    createData("MEK", testSummary?.correctQuestions_of_MEK, testSummary?.totalQuestion_of_MEK, 6.3),
    createData("ELF", testSummary?.correctQuestions_of_ELF, testSummary?.totalQuestion_of_ELF, 12.7),
    createData("SAMMANFATTNING", correctAnswersOfVerbal, totalQuestionsOfVerbal, 41.2, correctAnswersOfVerbal && (correctAnswersOfVerbal / totalQuestionsOfVerbal * 2).toFixed(1).replace(/\.0+$/, '')),
  ];
  const its = [createData("SAMMANFATTNING", correctAnswersOfKvantitative + correctAnswersOfVerbal, totalQuestionsOfKvantitative + totalQuestionsOfVerbal,
    ((correctAnswersOfKvantitative + correctAnswersOfVerbal) / (totalQuestionsOfKvantitative + totalQuestionsOfVerbal) * 100).toFixed(1).replace(/\.0+$/, '')
  )];

  const useStyles = makeStyles((theme) => ({
    main: {
      '@media (max-width: 1025px)': {
        width: "85%",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      [theme.breakpoints.up(1025)]: {
        width: "70vw",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
    },

    info: {
      [theme.breakpoints.down(1025)]: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '1.5rem'
      },
      [theme.breakpoints.up(1025)]: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '4rem'
      },
    },

    cards: {
      [theme.breakpoints.up(1025)]: {
        width: "23vw",
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #e1e1e1",
        borderRadius: "0.3rem",
        boxShadow: "0px 1px 1px #e1e1e1",
        marginTop: '3rem'
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
        fontSize: '5rem',
        marginTop: '2rem'
      }
    },

    resultText: {
      [theme.breakpoints.up(1025)]: {
        paddingLeft: '5.8rem',
        paddingTop: '5rem'
      },
      [theme.breakpoints.down(1025)]: {
        paddingLeft: '1.3rem',
        paddingTop: '2rem'
      }
    },

    resultCard: {
      [theme.breakpoints.up(900)]: {
        display: 'flex',
        marginLeft: '4rem',
        // width: '80%',
        // backgroundColor: 'blue'
      },
      [theme.breakpoints.down(1025)]: {
        boxShadow: "none",
        border: "1px solid #e1e1e1",
        marginLeft: '1.3rem',
        width: '94%',
        backgroundColor: 'blue'
      },
    },

    footer: {
      [theme.breakpoints.up(1025)]: {
        display: "flex",
        alignItems: "center",
        marginTop: "2%",
        marginLeft: '10.5%',
      },
      [theme.breakpoints.down(1025)]: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2%",
      },
    },

    exitButton: {
      [theme.breakpoints.up(1025)]: {
        display: 'flex',
        justifyContent: 'flex-end'
      },
      [theme.breakpoints.down(1025)]: {
        display: 'flex',
        justifyContent: 'center'
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
            }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 3 }}
          >
            Provresultat
          </Typography>
          <HelpOutlineIcon style={{ color: "#222" }} />
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          marginTop: "3%",
          overflowX: "hidden",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className={classes.main}
        >
          <Box sx={{ backgroundColor: "transparent" }}>
            <Box 
            // className={classes.info}
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: width > 1025 ? '5.5rem' : '1rem',
                display: 'flex',
              }}
            >
              <Typography
                style={{ fontWeight: "500", marginTop: "4%" }}
                variant="h4"
                component="h4"
              >
                Provresultat - Hösten 2021, Oktober
              </Typography>
              <Typography style={{ fontWeight: "300", marginTop: "3%" }}>
                <Typography>
                  <b>Normerad poäng:</b> Ges i skalan 0,0-2,0 beroende på ditt resultat jämfört med andra provdeltagare
                </Typography>
                <Typography>
                  <b>Medelvärde normerad poäng:</b> Snittpoängen bland alla provdeltagarna det året.
                </Typography>
                <Typography>
                  <b>Normerad poäng per del:</b> Poäng för kvantiativ och verbal del för sig.
                </Typography>
                <Typography>
                  <b>Antal poäng:</b> Så kallade råpoäng, d.v.s antal rätta svar.
                </Typography>
                <Typography>
                  <b>Medelv. samtliga provdelt:</b> Medelvärdet råpoäng alla deltagare.
                </Typography>
              </Typography>
            </Box>


            <Box>
              <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
              >
                <CircularProgress color="inherit" size="5rem" />
              </Backdrop>
            </Box>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "3%",
                backgroundColor: "transparent",
              }}
            >
              <Box sx={{ dispaly: "flex", flexDirection: "column", width: '20rem' }}>
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
                      sx={{ marginLeft: ".5rem", fontWeight: 500, color: '#505050' }}
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
                      82.4
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '0.5rem' }} >
                      <Typography
                        variant="body1"
                        sx={{ marginLeft: ".3rem", fontWeight: 500, color: '#505050' }}
                      >
                        Medelvärde samtliga
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ marginLeft: ".3rem", fontWeight: 500, color: '#505050' }}
                      >
                        provdeltagare
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ dispaly: "flex", flexDirection: "column", width: '20rem' }}>
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
                      {testSummary ? testSummary?.normering.toFixed(1).replace(/\.0+$/, '') : ''}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ marginLeft: ".5rem", fontWeight: 500, color: '#505050' }}
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
                      0.86
                    </Typography>
                    <Box sx={{ marginLeft: '0.5rem' }} >
                      <Typography
                        variant="body1"
                        sx={{ marginLeft: ".5rem", fontWeight: 500, color: '#505050' }}
                      >
                        Medelvärde
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ marginLeft: ".5rem", fontWeight: 500, color: '#505050' }}
                      >
                        normerad poäng
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography className={classes.resultText}
              // style={{ marginTop: "3%", marginLeft: '4.5rem' }}
              >
                <Typography variant="h5" component="h5">
                  Kvantitativ del resultat
                </Typography>
              </Typography>
            </Box>

            <TableContainer
              sx={{
                display: 'flex',
                marginLeft: width > 1025 ? '5.8rem' : '1.3rem',
                width: width > 1025 ? '50.5rem' : '94%',
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
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box>
              <Typography className={classes.resultText}
              //style={{ marginTop: "3%", fontWeight: "bold" }}
              >
                <Typography variant="h5" component="h5">
                  Verbal del resultat
                </Typography>
              </Typography>
            </Box>

            <TableContainer
              sx={{
                display: 'flex',
                marginLeft: width > 1025 ? '5.8rem' : '1.3rem',
                width: width > 1025 ? '50.5rem' : '94%',
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
                  {row.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <Typography className={classes.resultText}
              //style={{ marginTop: "3%", fontWeight: "bold" }}
              >
                <Typography variant="h5" component="h5">
                  Hela provet
                </Typography>
              </Typography>
            </Box>
            <TableContainer
              sx={{
                display: 'flex',
                marginLeft: width > 1025 ? '5.8rem' : '1.3rem',
                width: width > 1025 ? '50.5rem' : '94%',
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
                  {its.map((row) => (
                    <TableRow
                      key={row.name}
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
                        sx={{ border: "1px solid red", width: '5rem' }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell style={{ width: '10rem' }} align="left">{row.calories}</TableCell>
                      <TableCell style={{ width: '7rem' }} align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <Typography className={classes.resultText}
              //style={{ marginTop: "3%", fontWeight: "bold" }}
              >
                <Typography variant="h5" component="h5">
                  Resultat per provpass
                </Typography>
              </Typography>
            </Box>
            <TableContainer
              sx={{
                display: 'flex',
                marginLeft: width > 1025 ? '5.8rem' : '1.3rem',
                width: width > 1025 ? '50.5rem' : '94%',
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
                  {testSummary && testSummary.quizArray.map((row, index) => (
                    <TableRow
                      // key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {'Provpass'}  {index + 1}
                      </TableCell>
                      <TableCell align="left">{row.correctAnswerCounter}</TableCell>
                      <TableCell align="left">{row.totalQuestions}</TableCell>
                      <TableCell
                        onClick={() =>
                          console.log(row._id)
                          // navigate('/rattadoverblick', {
                          //   state: {
                          //     quizId: row.simuleraQuiz,
                          //     seasonId: row.simuleraSeason
                          //   }
                          // })
                        }
                        align="left"><Button
                          style={{
                            backgroundColor: "#fff",
                            color: "#0A1596",
                            border: "1px solid #0A1596",
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
            <Box
              className={classes.footer}
            >
              <Box style={{ display: 'flex', flexDirection: 'row' }} >
                <Typography variant="body2" style={{ fontSize: ".75rem", marginTop: '0.3rem' }}>
                  Dela resultat med dina vanner:
                </Typography>
                <Box>
                  <img style={{ marginLeft: "0.5rem" }} src={FacebookIcon} />
                  <img style={{ marginLeft: "0.5rem" }} src={TwitterIcon} />
                  <img style={{ marginLeft: "0.5rem" }} src={LinkedInIcon} />
                  <img style={{ marginLeft: "0.5rem" }} src={WhatsappIcon} />
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  fontSize: "0.65rem",
                  marginLeft: "1rem",
                  border: "1px solid #e1e1e1",
                  // padding: "0.5rem",
                  paddingTop: '0.5rem',
                  paddingLeft: '0.5rem',
                  paddingBottom: '0.5rem',
                  display: 'flex',
                  cursor: 'pointer',
                }}
                onClick="window.open('https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh','_blank')"
              >
                {/* <a href="https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh">
                  {" "} */}
                <img src={LinkIcon} />
                <Typography sx={{
                  fontSize: '0.7rem',
                  marginLeft: '0.3rem',
                  width: '27rem'
                }}
                >
                  https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh
                </Typography>
                {/* </a> */}
              </Box>
            </Box>
            <Box
              className={classes.exitButton}
            // style={{
            //   display: 'flex',
            //   justifyContent: 'flex-end'
            // }} 

            >
              <Button
                variant="outlined"
                sx={{
                  width: width > 1025 ? "89.5%" : '92%',
                  border: "1px solid #0A1596",
                  margin: "1rem 0",
                  color: "#0A1596",
                  display: 'flex',
                }}
                onClick={() => navigate('/courses')}
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
