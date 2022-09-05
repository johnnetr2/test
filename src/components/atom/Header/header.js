import React, { useState, useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import LinearProgress from "@mui/material/LinearProgress";
import BarChart from "../../../assets/Icons/BarChart.svg";
import Clock from "../../../assets/Icons/Clock.svg";
import Timer from "../Timer/timer";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ProgressBar from "@ramonak/react-progress-bar";

const useStyles = makeStyles((theme) => ({
  colorUpdate: {
    animationDuration: "8s",
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#6FCF97",
    },
    "& .MuiLinearProgress-bar": {
      animationDuration: "8s",
    },
  },
}));

function Header(props) {
  const classes = useStyles();

  const [quiz, setQuiz] = useState();
  const [barPerccentage, setBarPercentage] = useState(0);
  let totalPAragraphQuestions = 0;

  useEffect(() => {
    let correctAnswers = 0;
    let totalQuestions = 0;
    setQuiz(props?.quiz);
    totalPAragraphQuestions = totalPAragraphQuestions + 1;

    console.log(props.quiz, 'this is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    props.quiz &&
      props?.quiz?.map((item) => {
        if (item.type == "multiple") {
          totalQuestions = totalQuestions + item.question.length;
          item.question.map((question) => {
            if (question.answer) {
              correctAnswers = correctAnswers + 1;
            }
          });
        } else {
          totalQuestions = totalQuestions + 1;
          if (item.answer) {
            correctAnswers = correctAnswers + 1;
          }
        }
      });
    setBarPercentage((correctAnswers / totalQuestions) * 100);
  }, [props?.quiz]);

  return (
    <Container disableGutters maxWidth="md" style={{ backgroundColor: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        mb={1}
      >
        <Box
          mt={2}
          width={100}
          sx={{
            color: "#222",
            display: "flex",
            alignItems: "center",
            marginRight: "0.4rem",
          }}
        >
          <img src={BarChart} alt="" />
          <Typography variant="body1" style={{ marginLeft: "0.4rem" }}>
            {props.selectedIndex} av {props.totalQuestions}
          </Typography>
        </Box>
        {props.params && props.params.value == true && (
          <Box
            mt={2}
            sx={{
              color: "#222",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Clock} alt="" />
            <Timer
              continueStatus={props.status}
              time={props.time}
              timeleft={(timer) => {
                if (!props.status) {
                  props.timeLeft(timer);
                  props.nextPress();
                }
              }}
              callBackForTimer={(value) => props.callBackForTimer(value)}
              onCloseTimer={() => props.onCloseTimer()}
            />
          </Box>
        )}
      </Box>
      {/* <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel value={progress} />
        <button onClick={() => setProgress(progress + 10)}>Click here</button>
      </Box> */}

      {/* <ProgressBar completed={40} bgColor='#6FCF97' borderRadius='0' height='0.6rem' 
        isLabelVisible='false' labelColor="#6FCF97" />; */}

      <ProgressBar
        completed={barPerccentage}
        bgColor="#6FCF97"
        borderRadius="0"
        height="0.6rem"
        isLabelVisible="false"
        labelColor="transparent"
      />

      {/* <Box
        mt={2}
        sx={{
          backgroundColor: "#b4b4b4",
          height: "8px",
          // display: "flex",
          // flexDirection: "row",
        }}
      > */}

      {/* {quiz &&
          quiz?.map((item, index) => {
            if (item.type === "multiple") {
              return item.question.map((question) => (
                <Box
                  key={index}
                  style={{
                    backgroundColor: question.answer ? "#6FCF97" : "#B4B4B4",
                    // animation: "1s linear forward",
                    // marginLeft: "2px",
                    flex: "1",
                  }}
                ></Box>
              ));
            } else {
              return (
                <Box
                  key={index}
                  style={{
                    backgroundColor: item.answer ? "#6FCF97" : "#B4B4B4",
                    // marginLeft: "2px",
                    flex: "1",
                  }}
                ></Box>
              );
              // })
            }
          })} */}
      {/* </Box> */}
    </Container>
  );
}

export default Header;
