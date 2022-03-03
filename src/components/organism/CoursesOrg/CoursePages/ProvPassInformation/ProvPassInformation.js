import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import DtkImg from "../../../../../assets/Imgs/DtkImg.png";
import Clock from "../../../../../assets/Icons/Clock.svg";
import BarChart from "../../../../../assets/Icons/BarChart.svg";
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
import ExerciseBtn from "../../../../atom/ExerciseBtn/ExerciseBtn";

const ProvPassInformation = () => {
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

  return (
    <div>
      <CssBaseline />
      <AppBar
        color="#fff"
        className={classes.appbar}
        style={{ boxShadow: "none" }}
        position="absolute"
      >
        <Toolbar>
          <Typography
            variant="body1"
            style={{ width: 1200 }}
            className={classes.center_align}
          >
            Högskoleprov 2021 vår mars
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth={false}
        disableGutters
        style={{ backgroundColor: "#fff", height: "fit-content" }}
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
              Kvantitativt provpass - Provpass 1
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
            padding={6}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              height: 373,
              overflow: "auto",
              border: "1px solid #e1e1e1",
            }}
          >
            <Typography variant="h5" component="h5">
              Kvantitativ provpass
            </Typography>
            <Typography variant="h6" component="h6">
              Förberedande information
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "600" }}
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
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "600" }}
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
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "600" }}
            >
              NOG - Kvantitativa resonemang
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
              Delprovet NOG handlar om matematisk problemlösning. Varje uppgift
              består av en fråga som följs av fyra svarsalternativ, varav endast
              ett är rätt.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "600" }}
            >
              DTK - Diagram, tabeller och kartor
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
              Delprovet DTK handlar om matematisk problemlösning. Varje uppgift
              består av en fråga som följs av fyra svarsalternativ, varav endast
              ett är rätt.
            </Typography>
          </Box>
          <Box padding={1} m={2} sx={{ width: 615 }}>
            <Link to="#">
              <ExerciseBtn title="Starta delprov" />
            </Link>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default ProvPassInformation;
