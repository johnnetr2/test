import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import MarkLatex from "../../../../atom/Marklatex/MarkLatex";
import Correct from "../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../assets/Imgs/wrong.png";
import Increment from "../../../../../assets/Icons/Increment.svg";
import Decrement from "../../../../../assets/Icons/Decrement.svg";

const ProvPassDtk = (props) => {

  const [question, setQuestion] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    setQuestion(props.question)
  }, [])

  const Options = (question, option, optionIndex) => {
    if (question.answer && question.answer.option == option._id) {
      return <img src={Correct} style={{ marginRight: "0.5rem", marginLeft: '0.5rem', height: '1.5rem' }} />;
    } else if (question.answer && option._id === question?.optionId) {
      return <img src={Wrong} style={{ marginRight: "0.5rem", marginLeft: '0.5rem', height: '1.5rem' }} />;
    }
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
            onClick={() => {
              question && question.answer ?
                navigate('/provresultat')
                :
                !question.answer && props.backPressPopup()
            }}

          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography variant="body1" className={classes.center_align}>
            {question?.simuleraSectionCategories.title}
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
                    onClick={(e) => !question?.answer && props.SelectOption(e, optionIndex)}
                    control={Options(question, option, optionIndex)}
                    label={option.value}
                  />
                </Box>
              )
            })
          }

        </Container>
        {question?.answer && (
          <Box
            paddingX={4}
            mt={3}
            sx={{
              backgroundColor: "#fff",
              marginLeft: '1.6rem',
              width: 600,
              height: 220,
              border: "1px solid #e1e1e1",
              overflow: "auto",
              "&::-webkit-scrollbar": { display: "none" },
              //   '&::-webkit-scrollbar': { width : 0 },
            }}
          >
            <Box sx={{ width: 500, display: "flex" }}>
              <Box>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    fontSize: ".75rem",
                    fontWeight: "600",
                    marginTop: 20,
                  }}
                >
                  Förklaring:
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  style={{
                    fontSize: ".75rem",
                    fontWeight: "500",
                    marginTop: 10,
                    width: question?.answer.image ? "auto" : 500,
                  }}
                >
                  {/* {question.answer.answer} */}
                  <MarkLatex content={question.answer.answer} />
                </Typography>
              </Box>
              <Box
                mt={2}
                style={{
                  // marginLeft: "15rem",
                  marginTop: "2rem",
                }}
              >
                {question?.answer && (
                  <img
                    style={{ height: 110 }}
                    src={question?.answer.image}
                    alt=""
                  />
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                height: 60,
              }}
            >
              <Typography
                variant="body1"
                component="body1"
                style={{
                  fontSize: ".75rem",
                  fontWeight: "500",
                  marginTop: 10,
                  // width: "32rem",
                }}
              >
                Berätta för oss om du var nöjd med lösningen
              </Typography>
              <Box ml={1} mr={0.5}>
                <img
                  src={Increment}
                  // onClick={() => setFeedbackPopup(true)}
                  alt=""
                />
              </Box>
              <Box mr={1}>
                <img
                  src={Decrement}
                  // onClick={() => setFeedbackPopup(true)}
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default ProvPassDtk;
