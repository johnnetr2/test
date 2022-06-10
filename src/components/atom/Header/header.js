import React, { useState, useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import BarChart from "../../../assets/Icons/BarChart.svg";
import Clock from "../../../assets/Icons/Clock.svg";
import Timer from "../Timer/timer";

function Header(props) {
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    setQuiz(props?.quiz);
  }, [props?.quiz]);

  return (
    <Container disableGutters maxWidth="md" style={{ backgroundColor: "#fff" }}>
      <Box
        mt={8}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box mt={2} width={100} sx={{ color: "#222" }}>
          <img src={BarChart} alt="" />
          {props.selectedIndex + 1} av {props.totalQuestions}
        </Box>
        {props.params && props.params.value == true && (
          <Box
            mt={2}
            sx={{ color: "#222", display: "flex", flexDirection: "row" }}
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
                    backgroundColor: question.answer ? "#6fcf97" : "#B4B4B4",
                    marginLeft: "2px",
                    flex: "1",
                  }}
                ></Box>
              ));
            } else {
              return (
                <Box
                  key={index}
                  style={{
                    backgroundColor: item.answer ? "#6fcf97" : "#B4B4B4",
                    marginLeft: "2px",
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
