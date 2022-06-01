import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "../../../../../assets/Icons/BarChart.svg";
import Clock from "../../../../../assets/Icons/Clock.svg";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import DtkImg from "../../../../../assets/Imgs/DtkImg.png";
import StarIcon from "../../../../../assets/Icons/StarIcon.svg";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Card,
  Paper,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Radio,
  Button,
  FormControlLabel,
  Toolbar,
  Container,
  LinearProgress,
} from "@material-ui/core";
import ExerciseBtn from "../../../../atom/ExerciseBtn/ExerciseBtn";
import MarkLatex from "../../../../atom/Marklatex/MarkLatex";

const ProvPassDtk = (props) => {

  const [question, setQuestion] = useState()

  useEffect(() => {
    console.log(props?.question)
    setQuestion(props.question)
  }, [])

  const Options = (question, option, optionIndex) => {
    // if (props.paragraphIndex != undefined && question.answer.option == option._id) {
    //   return <img src={Correct} style={{ marginLeft: ".5rem", marginRight: '.5rem' }} />;
    // } else if (props.paragraphIndex != undefined && option._id == question.selectedOptionID) {
    //   return <img src={Wrong} style={{ marginRight: "0.5rem", marginLeft: ".4rem", }} />;
    // }
    if (optionIndex == question.selectedOptionIndex) {
      return <Radio color="primary" checked={true} />;
    } else {
      return <Radio color="primary" checked={false} />;
    }
  };

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
            DTK
          </Typography>
          <HelpOutlineIcon sx={{ width: 100 }} />
        </Toolbar>
      </AppBar>

      <Container
        maxWidth={false}
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
              border: "1px solid #e1e1e1",
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
              {props.index + 1} uppgifter:
            </Typography>
            <Typography variant="h6" component="h6">
              {question?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              {question?.pargraphDescription}
            </Typography>
            {question && <Box style={{ display: 'flex', justifyContent: 'center' }} >
              <img style={{ height: '15rem' }} src={question?.images[0]} alt="" />
            </Box>
            }
          </Box>
          <Box
            paddingX={4}
            mt={5}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              width: 600,
              height: 90,
              border: "1px solid #e1e1e1",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{ fontSize: ".75rem", fontWeight: "600" }}
            >
              <MarkLatex content={question?.questionStatment} />
            </Typography>
          </Box>
          {
            question && question.options.map((option, optionIndex) => {
              return (
                <Box
                  padding={1}
                  sx={{
                    backgroundColor: "#fff",
                    width: 600,
                    border: "1px solid #e1e1e1",
                  }}
                >
                  <FormControlLabel value={option._id}
                    onClick={(e) => props.SelectOption(e, optionIndex)}
                    control={ Options(question, option, optionIndex)}
                    label={option.value}
                  />
                </Box>
              )
            })
          }

        </Container>
      </Container>
    </div>
  );
};

export default ProvPassDtk;
