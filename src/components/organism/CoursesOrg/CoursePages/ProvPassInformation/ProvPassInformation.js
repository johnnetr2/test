import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
import Clock from "../../../../../assets/Icons/Clock.svg";
import BarChart from "../../../../../assets/Icons/BarChart.svg";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Container,
} from "@material-ui/core";
import ExerciseBtn from "../../../../atom/ExerciseBtn/ExerciseBtn";
import { useNavigate, useLocation } from "react-router-dom";
import { PanoramaSharp } from "@mui/icons-material";
import HelpPopup from "../../../../atom/HelpPopup/HelpPopup";

const ProvPassInformation = () => {
  const navigate = useNavigate();
  const params = useLocation();

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
      height: "95vh",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  }));

  const classes = useStyles(10);
  const [helpPopup, setHelpPopup] = useState(false);


  return (
    <div>
      <CssBaseline />
      {helpPopup && <HelpPopup />}
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
              height: "5rem",
              width: "2.3rem",
              display: "flex",
              alignItems: "center",
              borderRight: "1px solid #E1E1E1",
              cursor: "pointer",
            }}
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography
            variant="body1"
            style={{ fontSize: "1.5rem", fontWeight: 400 }}
            className={classes.center_align}
          >
            Högskoleprov {params.state.session.title}{" "}
            {params.state.session.month}
          </Typography>
          <Box onClick={() => setHelpPopup(!helpPopup)}>
            <HelpOutlineIcon />
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth={false}
        disableGutters
        className={classes.content}
        style={{
          backgroundColor: "#fff",
          border: "1px solid #fff",
        }}
      >
        <Container
          style={{
            marginTop: 65,
            backgroundColor: "#f9f9f9",
            width: "80%",
            height: "75%",
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
              Kvantitativt provpass - Provpass{" "}
              {params?.state.provpass === undefined
                ? 1
                : params?.state.provpass.simuleraQuizResult.length + 1}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box mt={1} width={100} sx={{ color: "#222" }}>
                <img style={{ marginRight: ".25rem" }} src={BarChart} alt="" />
                40 frågor
              </Box>
              <Box mt={1} ml={1} sx={{ color: "#222" }}>
                <img style={{ marginRight: ".25rem" }} src={Clock} alt="" />
                55min
              </Box>
            </Box>
          </Box>
          <Box
            mt={3}
            // padding={6}
            paddingLeft={6}
            paddingRight={6}
            paddingBottom={6}
            sx={{
              backgroundColor: "#fff",
              maxWidth: 600,
              // width: 600,
              height: 800,
              overflow: "auto",
              border: "1px solid #e1e1e1",
              top: 0,
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{
                marginTop: "1rem",
                fontSize: "1.8rem",
                fontWeight: "400",
              }}
            >
              Kvantitativ provpass
            </Typography>
            <br></br>
            <Typography style={{ fontSize: "1.3rem", fontWeight: "400" }}>
              Förberedande information
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                marginTop: "1rem",
                fontSize: ".7rem",
                fontWeight: "500",
              }}
            >
              Här följer anvisningar till de kvantitativa delproven XYZ, KVA,
              NOG och DTK. Provpasset innehåller 40 uppgifter och den totala
              provtiden är 55 minuter.
            </Typography>
            <br></br>
            <Typography
              // mt={3}
              variant="subtitle1"
              style={{ fontSize: ".9rem", fontWeight: "600" }}
            >
              XYZ - Matematisk problemlösning
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              12 uppgifter. Rekommenderad provtid: 12 minuter
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              Delprovet XYZ handlar om matematisk problemlösning. Varje uppgift
              består av en fråga som följs av fyra svarsalternativ, varav endast
              ett är rätt.
            </Typography>
            <br></br>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".9rem", fontWeight: "600" }}
            >
              KVA - Kvantitativa jämförelser
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              10 uppgifter. Rekommenderad provtid: 10 minuter
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              Delprovet KVA innehåller uppgifter med beskrivningar av två
              kvantiteter, I och II. Din uppgift är att jämföra de två
              kvantiteterna. I vissa fall ges inledande information som ska
              användas vid jämförelsen. Till varje uppgift finns fyra
              svarsalternativ, varav endast ett är rätt. I KVA har alla
              uppgifter samma svarsalternativ.
            </Typography>
            <br></br>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".9rem", fontWeight: "600" }}
            >
              NOG - Kvantitativa resonemang
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              6 uppgifter. Rekommenderad provtid: 10 minuter
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              Delprovet NOG består av uppgifter med en fråga följd av två
              påståenden, (1) och (2), som innehåller information. Frågan kan
              ibland föregås av viss inledande information. Din uppgift är att
              avgöra om frågan entydigt kan besvaras med hjälp av informationen
              i påståendena, och i så fall hur mycket av denna information som
              är tillräcklig. Till varje uppgift finns fem svarsalternativ,
              varav endast ett är rätt. I NOG har alla uppgifter samma
              svarsalternativ.
            </Typography>
            <br></br>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".9rem", fontWeight: "600" }}
            >
              DTK - Diagram, tabeller och kartor
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              12 uppgifter. Rekommenderad provtid: 23 minuter
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              Delprovet DTK innehåller diagram, tabeller, kartor och andra
              grafiska framställningar. Uppgifterna ska lösas med hjälp av den
              information som finns på respektive uppslag. Till varje uppgift
              finns det fyra svarsförslag. Välj det som bäst besvarar frågan.
            </Typography>
          </Box>
          <Box padding={1} m={2} sx={{ width: 615 }}>
            {/* <Link to="#"> */}
            <ExerciseBtn
              title="Starta delprov"
              onClick={() =>
                navigate("/simuleraprov", {
                  state: {
                    id: params.state.id,
                    session: params.state.session,
                    provpass: params.state.provpass,
                  },
                })
              }
            />
            {/* </Link> */}
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default ProvPassInformation;
