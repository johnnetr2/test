import React, { useState, useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import LinearProgress from "@mui/material/LinearProgress";
import BarChart from "../../../assets/Icons/BarChart.svg";
import Clock from "../../../assets/Icons/Clock.svg";
import Timer from "../Timer/timer";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  colorUpdate: {
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#6FCF97",
    },
  },
}));

function Header(props) {
  const classes = useStyles();

  const [quiz, setQuiz] = useState();
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    setQuiz(props?.quiz);
  }, [props?.quiz]);

  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            sx={{
              backgroundColor: "#b4b4b4",
              // color: "#6Fcf97",fsetPro
              height: ".5rem",
              "& .MuiLinearProgress-barColorPrimary": {
                backgroundColor: "#6FCF97",
              },
            }}
            // className={classes.colorUpdate}
            // color="#222"
            variant="determinate"
            {...props}
          />
        </Box>
        {/* <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box> */}
      </Box>
    );
  }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 10 : prevProgress + 10
  //     );
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Container disableGutters maxWidth="md" style={{ backgroundColor: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
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
            {props.selectedIndex + 1} av {props.totalQuestions}
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
              onCloseTimer={() => props.onCloseTimer()}
            />
          </Box>
        )}
      </Box>
      {/* <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel value={progress} />
        <button onClick={() => setProgress(progress + 10)}>Click here</button>
      </Box> */}
      <Box
        mt={2}
        sx={{
          backgroundColor: "#b4b4b4",
          height: "8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {quiz &&
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
          })}
      </Box>
    </Container>
  );
}

export default Header;
