import React, { useEffect, useState } from "react";
import DtkImg from "../../../assets/Imgs/DtkImg.png";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Box,
  CssBaseline,
  Container,
} from "@material-ui/core";

const Question = (props) => {
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

  return (
    <div>
      <CssBaseline />

      <Container
        maxWidth="lg"
        style={{ backgroundColor: "#fff", height: "fit-content" }}
      >
        <Container
          maxWidth="md"
          style={{
            marginTop: 0,
            backgroundColor: "#f9f9f9",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            mt={5}
            paddingX={6}
            paddingY={2}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              height: 373,
              border:'1px solid #e1e1e1'
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                textTransform: "uppercase",
                fontSize: ".7rem",
                fontWeight: "500",
              }}
            >
              {/* {props.questions.length + 'uppgifter:'} */}
              {props.questions.length} {props.questions.length === 1 ? "uppgift" : "uppgifter"}:
            </Typography>
            <Typography variant="h6" component="h6">
              Teater och dans i siffror
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              Verksamhet och ekonomi för samtliga statligt stödda institutioner
              och fria grupper inom teater och dans åren 1997–2005.
            </Typography>
            <Box>
              <img src={DtkImg} style={{width:'100%'}} alt="" />
            </Box>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default Question;
