import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Clock from "../../../../../assets/Icons/Clock.svg";
import BarChart from "../../../../../assets/Icons/BarChart.svg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";

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

const TestInformation = (props) => {
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
  const navigate = useNavigate();
  const params = useLocation();

  return (
    <>
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
              height: "8vh",
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
            Högskoleprov 2021 vår mars
          </Typography>
          <HelpOutlineIcon sx={{ width: 100 }} />
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
              Högskoleprov 2021 vår mars
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box mt={1} width={100} sx={{ color: "#222" }}>
                <img style={{ marginRight: ".25rem" }} src={BarChart} alt="" />
                160 frågor
              </Box>
              <Box mt={1} ml={1} sx={{ color: "#222" }}>
                <img style={{ marginRight: ".25rem" }} src={Clock} alt="" />
                55min per provass
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
              Instruktioner
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "600" }}
            >
              Fyra provpass
            </Typography>

            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              Högskoleprovet är indelat i fem provpass, men eftersom ett av
              dessa är utprövningspass har vi här exkluderat detta provpass. Du
              kommer alltså att få göra fyra provpass. Varje pass är 55 minuter
              långt. Du kommer att skriva två kvantitativa provpass, två verbala
              provpass.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: ".7rem",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Kvantiativt provpass
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              Varje kvantitativt provpass består av uppgifter från fyra olika
              delprov:
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: ".7rem",
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              XYZ, matematisk problemlösning: 12 uppgifter
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              KVA, kvantitativa jämförelser: 10 uppgifter
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              NOG, kvantitativa resonemang: 6 uppgifter
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              DTK, diagram, tabeller och kartor: 12 uppgifter
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: ".7rem",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Verbalt provpass
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              Varje verbalt provpass består av uppgifter från fyra olika
              delprov:
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: ".7rem",
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              ORD, ordförståelse: 10 uppgifter
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              LÄS, svensk läsförståelse: 10 uppgifter
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              MEK, meningskomplettering: 10 uppgifter
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              ELF, engelsk läsförståelse: 10 uppgifter
            </Typography>
            <Typography
              mt={3}
              variant="subtitle1"
              style={{
                fontSize: ".7rem",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Lämna in provpass efter 55 minuter 
            </Typography>
          </Box>
          <Box padding={1} m={2} sx={{ width: 615 }}>
            <ExerciseBtn
              title="Nasta"
              onClick={() =>
                navigate("/provpassinfo"
                , {
                  state: {
                    id: params.state.id,
                    session: params.state.session,
                    provpass: params.state.quizzes,
                  },
                }
                )
              }
            />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default TestInformation;
