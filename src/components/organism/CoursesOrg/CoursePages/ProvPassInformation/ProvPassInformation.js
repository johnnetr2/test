import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
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
import { useNavigate } from "react-router-dom";

const ProvPassInformation = () => {

  const navigate = useNavigate()
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const data = [
    {
      "_id": "624d39eded9bf72128ae736a",
      "multipartQuestion": null,
      "images": [
        "https://hp-appen.s3.eu-north-1.amazonaws.com/81dcafe5-c62a-4a33-8eb2-e1b0a13fc78c.png"
      ],
      "questionCategory": "6203d116b8a43736188935c8",
      "year": "624566f9b099e234602868da",
      "sectionCategories": "61f2903f35d8e6277cc2d6e6",
      "questionStatement": "is this algebra5 multi(none)",
      "createdAt": "2022-04-06T06:57:49.629Z",
      "updatedAt": "2022-04-06T06:57:49.629Z",
      "__v": 0,
      "options": [
        {
          "_id": "624d3b158fb42b2e34857e48",
          "question": "624d39eded9bf72128ae736a",
          "options": [
            {
              "_id": "624d3b158fb42b2e34857e49",
              "value": "1",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3b158fb42b2e34857e4a",
              "value": "2",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3b158fb42b2e34857e4b",
              "value": "3",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3b158fb42b2e34857e4c",
              "value": "4",
              "image": "",
              "type": "Math"
            }
          ],
          "createdAt": "2022-04-06T07:02:45.410Z",
          "updatedAt": "2022-04-06T07:02:45.410Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "624d39e0ed9bf72128ae7355",
      "multipartQuestion": null,
      "images": [
        "https://hp-appen.s3.eu-north-1.amazonaws.com/5cb18a40-91a3-4378-bef7-3698d4d53fa0.png"
      ],
      "questionCategory": "6203d116b8a43736188935c8",
      "year": "624566f9b099e234602868da",
      "sectionCategories": "61f2903f35d8e6277cc2d6e6",
      "questionStatement": "is this algebra2 multi(none)",
      "createdAt": "2022-04-06T06:57:36.671Z",
      "updatedAt": "2022-04-06T06:57:36.671Z",
      "__v": 0,
      "options": [
        {
          "_id": "624d3af48fb42b2e34857e2a",
          "question": "624d39e0ed9bf72128ae7355",
          "options": [
            {
              "_id": "624d3af48fb42b2e34857e2b",
              "value": "1",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3af48fb42b2e34857e2c",
              "value": "2",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3af48fb42b2e34857e2d",
              "value": "3",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3af48fb42b2e34857e2e",
              "value": "4",
              "image": "",
              "type": "Math"
            }
          ],
          "createdAt": "2022-04-06T07:02:12.629Z",
          "updatedAt": "2022-04-06T07:02:12.629Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "624d39dbed9bf72128ae734e",
      "multipartQuestion": null,
      "images": [
        "https://hp-appen.s3.eu-north-1.amazonaws.com/fac9548a-8872-4fda-8cfd-ace351231731.png"
      ],
      "questionCategory": "6203d116b8a43736188935c8",
      "year": "624566f9b099e234602868da",
      "sectionCategories": "61f2903f35d8e6277cc2d6e6",
      "questionStatement": "is this algebra1 multi(none)",
      "createdAt": "2022-04-06T06:57:31.902Z",
      "updatedAt": "2022-04-06T06:57:31.902Z",
      "__v": 0,
      "options": [
        {
          "_id": "624d3ae98fb42b2e34857e20",
          "question": "624d39dbed9bf72128ae734e",
          "options": [
            {
              "_id": "624d3ae98fb42b2e34857e21",
              "value": "1",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3ae98fb42b2e34857e22",
              "value": "2",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3ae98fb42b2e34857e23",
              "value": "3",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "624d3ae98fb42b2e34857e24",
              "value": "4",
              "image": "",
              "type": "Math"
            }
          ],
          "createdAt": "2022-04-06T07:02:01.245Z",
          "updatedAt": "2022-04-06T07:02:01.245Z",
          "__v": 0
        }
      ]
    }
  ]

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
            {/* <Link to="#"> */}
            <ExerciseBtn title="Starta delprov" onClick={() => 
              navigate('/simuleraprov', {
              state: {
                quiz: data
              }
            })}  />
            {/* </Link> */}
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default ProvPassInformation;
