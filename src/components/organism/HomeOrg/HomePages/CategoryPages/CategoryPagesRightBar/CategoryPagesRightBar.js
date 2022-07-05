import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import { LinearProgress } from "@mui/material";
import BarChart from "../../../../../molecule/Charts/BarChart";
import LinesChart from "../../../../../molecule/Charts/LinesChart";
import {
  EndPoints,
  instance2,
} from "../../../../../../components/service/Route";
import useWindowDimensions from "../../../../../molecule/WindowDimensions/dimension";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#27AE60",
    },
  },
}));

const CategoryPagesRightBar = (props) => {
  const classes = useStyles();
  const [progressData, setProgressData] = useState("");
  const [lastWeekTasks, setLastWeekTasks] = useState("");
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const URL = EndPoints.testHistory + props.item._id;
    console.log(URL);
    instance2.get(URL).then((response) => {
      setProgressData(response.data, "token response");
    });
    const LastWeekURL = EndPoints.lastWeekTasks + props.item._id;
    instance2.get(LastWeekURL).then((response) => {
      setLastWeekTasks(response.data);
    });
  }, []);

  return (
    <Container
      maxWidth={false}
      style={{
        backgrounColor: "#fafafa",
        width: "27rem",
      }}
    >
      <Box
        sx={{
          height: "fit-content",
          marginTop: width < 901 ? "2rem" : "11.5rem",
        }}
      >
        <Box style={{ marginLeft: "1rem" }}>
          {width > 900 && <Typography variant="h5">Statistik</Typography>}
          <Typography variant="body2" sx={{ marginTop: "1rem" }}>
            Du har klarat {lastWeekTasks.totalCorrectQuestions} av{" "}
            {lastWeekTasks.totalQuestions} uppgifter
          </Typography>
        </Box>
        <Box
          sx={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}
        >
          <Box
            sx={{
              width: "100%",
              mr: 1,
              border: "1px solid #dddddd",
              boxShadow: "1px 1px 8px #dfdfdf",
              borderRadius: 5,
              padding: "2rem",
            }}
          >
            <LinearProgress
              className={classes.root}
              sx={{
                height: 13,
                borderRadius: "5rem",
                backgroundColor: "#e1e1e1",
              }}
              variant="determinate"
              value={
                (lastWeekTasks.totalCorrectQuestions /
                  lastWeekTasks.totalQuestions) *
                100
              }
            />
            <Typography
              style={{
                marginTop: "-1rem",
                position: "absolute",
                fontSize: "13px",
                alignSelf: "center",
                marginLeft: width * 0.11,
              }}
            >
              {lastWeekTasks.totalCorrectQuestions} av{" "}
              {lastWeekTasks.totalQuestions}
            </Typography>
          </Box>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%", marginLeft: "1rem" }}>
              <Typography variant="h5">
                {!lastWeekTasks ? "0" : lastWeekTasks.weeklyCorrectQuestions}
              </Typography>
              <Typography variant="body2">
                Gjorda uppgifter förra veckan
              </Typography>
            </Box>
            <Box sx={{ width: "50%", marginLeft: "1rem", marginRight: "1rem" }}>
              <Typography variant="h5">
                {lastWeekTasks.totalCorrectQuestions}
              </Typography>
              <Typography variant="body2">Gjorda uppgifter totalt</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "3rem",
            }}
          >
            <Box
              sx={{
                height: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #dddddd",
                boxShadow: "1px 1px 8px #dfdfdf",
                borderRadius: 5,
                padding: "2rem",
              }}
            >
              <BarChart />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h5">
            {(
              (lastWeekTasks.totalCorrectQuestions /
                lastWeekTasks.totalQuestions) *
              2
            )
              .toFixed(1)
              .replace(/\.0+$/, "")}
          </Typography>
          <Typography variant="body2">
            Prognostiserad normerad poäng {props?.item.title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "18rem",
                borderRadius: 3,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                border: "1px solid #dddddd",
                boxShadow: "0px 5px 10px #f2f2f2",
                padding: "2rem",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 540,
                  marginBottom: ".5rem",
                }}
              >
                POANG
              </Typography>

              <LinesChart
                syncId="anyId"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryPagesRightBar;
