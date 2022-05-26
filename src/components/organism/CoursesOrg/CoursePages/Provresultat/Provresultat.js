import React from "react";
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
import Stack from "@mui/material/Stack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FacebookIcon from "../../../../../assets/Icons/FacebookIcon.svg";
import TwitterIcon from "../../../../../assets/Icons/TwitterIcon.svg";
import LinkedInIcon from "../../../../../assets/Icons/LinkedInIcon.svg";
import WhatsappIcon from "../../../../../assets/Icons/WhatsappIcon.svg";
import LinkIcon from "../../../../../assets/Icons/LinkIcon.svg";
import { fontWeight, style, typography } from "@mui/system";
// import { typography } from '@mui/system';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("XYZ", 20, 24, 12.1),
  createData("KYA", 15, 20, 10.1),
  createData("NOG", 10, 12, 6.3),
  createData("DRK", 12, 24, 12.7),
  createData("SAMMANFATTNING", 57, 80, 41.2, 1.3),
];
const row = [
  createData("ORD", 20, 24, 12.1),
  createData("LAS", 15, 20, 10.1),
  createData("MEK", 10, 12, 6.3),
  createData("ELF", 12, 24, 12.7),
  createData("SAMMANFATTNING", 57, 80, 41.2, 1.3),
];
const its = [createData("SAMMANFATTNING", 129, 160, 86.3)];
const the = [
  createData(
    "Provpass 1",
    20,
    24,
    <Button
      style={{
        backgroundColor: "#fff",
        color: "#0A1596",
        border: "1px solid #0A1596",
      }}
    >
      SE RATTNING
    </Button>
  ),
  createData(
    "Provpass 3",
    15,
    20,
    <Button
      style={{
        backgroundColor: "#fff",
        color: "#0A1596",
        border: "1px solid #0A1596",
      }}
    >
      SE RATTNING
    </Button>
  ),
  createData(
    "Provpass 4",
    10,
    12,
    <Button
      style={{
        backgroundColor: "#fff",
        color: "#0A1596",
        border: "1px solid #0A1596",
      }}
    >
      SE RATTNING
    </Button>
  ),
  createData(
    "Provpass 5",
    12,
    24,
    <Button
      style={{
        backgroundColor: "#fff",
        color: "#0A1596",
        border: "1px solid #0A1596",
      }}
    >
      SE RATTNING
    </Button>
  ),
];
const Provresultat = () => {
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
                      129
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ marginLeft: ".5rem", fontWeight: 500 }}
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
                    <Typography
                      variant="body1"
                      sx={{ marginLeft: ".3rem", fontWeight: 500 }}
                    >
                      Medelvärde samtliga provdeltagare
                    </Typography>
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
                      1.50
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ marginLeft: ".5rem", fontWeight: 500 }}
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
                    <Typography
                      variant="body1"
                      sx={{ marginLeft: ".5rem", fontWeight: 500 }}
                    >
                      Medelvärde normerad poäng
                    </Typography>
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
                  {the.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                }}
              >
                <a href="https://www.google.com/search?q=share+results+ui+design&tbm=isch&chips=q:sh">
                  {" "}
                  <img src={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Provresultat;
