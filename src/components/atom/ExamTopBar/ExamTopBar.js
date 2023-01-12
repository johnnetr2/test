import { Box, Container } from "@material-ui/core";
import React from "react";
import Timer from "../Timer/timer";
import Clock from "../../../assets/Icons/Clock.svg";
import BarChart from "../../../assets/Icons/BarChart.svg";

const ExamTopBar = ({
  currentIndex,
  quiz,
  time,
  status,
  setTimeLeft,
  setShouldNavigate,
  width,
}) => {
  return (
    <Container
      disableGutters
      maxWidth="md"
      style={{ backgroundColor: "#fff", width: width && width }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box mt={2} width={100} sx={{ color: "#222" }}>
          <img src={BarChart} alt="" />
          {currentIndex + 1} av {quiz?.question.length}
        </Box>
        <Box mt={2} sx={{ color: "#222", display: "flex" }}>
          <img src={Clock} alt="" />
          {quiz && quiz.question[currentIndex].questionAnswer
            ? "Slutfört"
            : time && (
                <Timer
                  continueStatus={status}
                  time={time}
                  timeleft={(timer) => {
                    setTimeLeft(timer);
                  }}
                  onCloseTimer={() => {
                    setTimeLeft(0);
                    setShouldNavigate(true);
                  }}
                  callBackForTimer={(value) => setTimeLeft(value)}
                />
              )}
        </Box>
      </Box>
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
          quiz?.question.map((item, index) => {
            return (
              <Box
                key={index}
                style={{
                  backgroundColor: currentIndex > index ? "#6fcf97" : "#B4B4B4",
                  flex: "1",
                }}
              ></Box>
            );
          })}

        <Box
          mt={2}
          sx={{
            backgroundColor: "#6fcf97",
            height: "8px",
            display: "flex",
            flexDirection: "row",
          }}
        ></Box>
      </Box>
    </Container>
  );
};

export default ExamTopBar;
