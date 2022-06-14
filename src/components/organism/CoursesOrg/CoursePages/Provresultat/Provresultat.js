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
  makeStyles,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FacebookIcon from "../../../../../assets/Icons/FacebookIcon.svg";
import TwitterIcon from "../../../../../assets/Icons/TwitterIcon.svg";
import LinkedInIcon from "../../../../../assets/Icons/LinkedInIcon.svg";
import WhatsappIcon from "../../../../../assets/Icons/WhatsappIcon.svg";
import LinkIcon from "../../../../../assets/Icons/LinkIcon.svg";
import { useNavigate } from "react-router-dom";
import { EndPoints, instance2 } from "../../../../service/Route";



const Provresultat = () => {
  const navigate = useNavigate()
  const [testSummary, setTestSummary] = useState()
  const [totalQuestionsOfKvantitative, setTotalQuestionsOfKvantitative] = useState()
  const [correctAnswersOfKvantitative, setCorrectAnswersOfKvantitative] = useState()
  const [totalQuestionsOfVerbal, setTotalQuestionsOfVerbal] = useState()
  const [correctAnswersOfVerbal, setCorrectAnswersOfVerbal] = useState()


  useEffect(() => {
    const URL = EndPoints.testSummary + '62a321fbaaebf43eb47b1626'
    instance2.get(URL).then(response => {
      console.log(response.data, 'this is test summary')
      setTestSummary(response.data)
      setCorrectAnswersOfKvantitative(response.data.correctQuestions_of_XYZ + response.data.correctQuestions_of_KVA + response.data.correctQuestions_of_NOG + response.data.correctQuestions_of_DTK)
      setTotalQuestionsOfKvantitative(response.data.totalQuestion_of_XYZ + response.data.totalQuestion_of_KVA + response.data.totalQuestion_of_NOG + response.data.totalQuestion_of_DTK)

      setCorrectAnswersOfVerbal(response.data.correctQuestions_of_ORD + response.data.correctQuestions_of_LAS + response.data.correctQuestions_of_MEK + response.data.correctQuestions_of_ELF)
      setTotalQuestionsOfVerbal(response.data.totalQuestion_of_ORD + response.data.totalQuestion_of_LAS + response.data.totalQuestion_of_MEK + response.data.totalQuestion_of_ELF)
    })
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
    createData("SAMMANFATTNING", correctAnswersOfVerbal, totalQuestionsOfVerbal, 41.2, (correctAnswersOfVerbal / totalQuestionsOfVerbal * 2).toFixed(1).replace(/\.0+$/, '')),
  ];
  const its = [createData("SAMMANFATTNING", 129, 160, 86.3)];

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
          sx={{
            width: "73.5vw",
            backgroundColor: "#f9f9f9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50vw", backgroundColor: "transparent" }}>
            <Typography
              style={{ fontWeight: "500", marginTop: "4%" }}
              variant="h4"
              component="h4"
            >
              Provresultat - Hösten 2021, Oktober
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
                <b>Antal poäng:</b> Så kallade råpoäng, d.v.s antal rätta svar.
              </Typography>
              <Typography>
                <b>Medelv. samtliga provdelt:</b> Medelvärdet råpoäng alla
                deltagare.
              </Typography>
            </Typography>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "3%",
                backgroundColor: "transparent",
              }}
            >
              <Box sx={{ dispaly: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    width: "24.5vw",
                    height: "15vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    border: "1px solid #e1e1e1",
                    borderRadius: "0.3rem",
                    boxShadow: "0px 1px 1px #e1e1e1",
                  }}
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
                  sx={{
                    width: "24.5vw",
                    height: "15vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    marginTop: "5%",
                    borderRadius: "0.3rem",
                    boxShadow: "0px 1px 1px #e1e1e1",
                  }}
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
              <Box sx={{ dispaly: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    width: "24.5vw",
                    height: "15vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    border: "1px solid #e1e1e1",
                    borderRadius: "0.3rem",
                    boxShadow: "0px 1px 1px #e1e1e1",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="h3" component="h3">
                      {testSummary?.normering.toFixed(2).replace(/\.0+$/, '')}
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
                  sx={{
                    width: "24.5vw",
                    height: "15vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    marginTop: "5%",
                    border: "1px solid #e1e1e1",
                    borderRadius: "0.5rem",
                    boxShadow: "0px 1px 1px #e1e1e1",
                  }}
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
              <Typography style={{ marginTop: "3%" }}>
                <Typography variant="h5" component="h5">
                  Kvantitativ del resultat
                </Typography>
              </Typography>
            </Box>

            <TableContainer
              sx={{ boxShadow: "none", border: "1px solid #e1e1e1" }}
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
              <Typography style={{ marginTop: "3%", fontWeight: "bold" }}>
                <Typography variant="h5" component="h5">
                  Verbal del resultat
                </Typography>
              </Typography>
            </Box>
            <TableContainer
              sx={{ boxShadow: "none", border: "1px solid #e1e1e1" }}
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
              <Typography style={{ marginTop: "3%", fontWeight: "bold" }}>
                <Typography variant="h5" component="h5">
                  Hela provet
                </Typography>
              </Typography>
            </Box>
            <TableContainer
              sx={{ boxShadow: "none", border: "1px solid #e1e1e1" }}
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
                        sx={{ border: "1px solid red" }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <Typography style={{ marginTop: "3%", fontWeight: "bold" }}>
                <Typography variant="h5" component="h5">
                  Resultat per provpass
                </Typography>
              </Typography>
            </Box>
            <TableContainer
              sx={{ boxShadow: "none", border: "1px solid #e1e1e1" }}
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
                        // onClick={() => navigate('/rattadoverblick', {
                        //   state: {
                        //     quizId: '6290d237c73893292cff319d'
                        //   }
                        // })} 
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
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <Box>
                <Typography variant="body2" style={{ fontSize: ".75rem" }}>
                  Dela resultat med dina vanner:
                </Typography>
              </Box>
              <Box>
                <img style={{ marginLeft: "0.5rem" }} src={FacebookIcon} />
                <img style={{ marginLeft: "0.5rem" }} src={TwitterIcon} />
                <img style={{ marginLeft: "0.5rem" }} src={LinkedInIcon} />
                <img style={{ marginLeft: "0.5rem" }} src={WhatsappIcon} />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  fontSize: "0.65rem",
                  marginLeft: "1rem",
                  border: "1px solid #e1e1e1",
                  padding: "0.5rem",
                  display: 'flex',
                  cursor: 'pointer'
                }}
                onClick="window.open('https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh','_blank')"
              >
                {/* <a href="https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh">
                  {" "} */}
                <img src={LinkIcon} />
                <Typography sx={{
                  fontSize: '0.7rem',
                  marginLeft: '0.3rem'
                }}
                >
                  https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh
                </Typography>
                {/* </a> */}
              </Box>
            </Box>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                border: "1px solid #0A1596",
                margin: "1rem 0",
                color: "#0A1596",
              }}
              onClick={() => navigate('/courses')}
            >
              Klar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Provresultat;
