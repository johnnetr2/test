import { Box, Typography, makeStyles } from "@material-ui/core";
import {
  EndPoints,
  instance2,
} from "../../../../../../components/service/Route";
import React, { useEffect, useState } from "react";
import LineDemo from "../../../../../molecule/Charts/BarChart";
import { LinearProgress } from "@mui/material";
import LinesChart from "../../../../../molecule/Charts/LinesChart";
import useWindowDimensions from "../../../../../molecule/WindowDimensions/dimension";
import { datesGroupByComponent } from "../../../../../service/commonService";
import { calculateWeekWiseNormingForCategory } from "../../../../../atom/percentageCalculator/Utils";
import { getWeekNumbers } from "../../../../../atom/percentageCalculator/Utils";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#27AE60",
    },
  },
}));

const CategoryPagesRightBar = (props) => {
  const classes = useStyles();
  const [lastWeekTasks, setLastWeekTasks] = useState("");
  const { height, width } = useWindowDimensions();
  const [weeklyCoreectedGraph, setWeeklyCoreectedGraph] = useState([]);
  const [weekWiseProgressGraph, setWeekWiseProgressGraph] = useState([]);
  const [weeklyProgress, setWeeklyProgress] = useState(0);
  const [isDesplayProgress, setIsDesplayProgress] = useState(false);

  useEffect(() => {
    const weeknameArray = getWeekNumbers().reverse();
    const lastWeeksData = EndPoints.getLastSevenWeeksData + props.item._id;
    instance2.get(lastWeeksData).then((response) => {
      const data = datesGroupByComponent(response.data.sevenWeekData, "W");
      const weekWiseCorrectedArray = [];
      const weekWiseProgressArray = [];
      let weekWiseNormingofCategory = calculateWeekWiseNormingForCategory(
        data,
        isDesplayProgress,
        setIsDesplayProgress,
        props?.item.title
      );

      weeknameArray.forEach((weekKeyName, index) => {
        const weekPogress = weekWiseNormingofCategory.find(
          (weekWiseProgress) => weekWiseProgress.name === weekKeyName
        );
        if (weekPogress) {
          weekWiseCorrectedArray.push({
            name: weekKeyName,
            correct: weekPogress.weekWiseCorrected,
          });
          weekWiseProgressArray.push({
            name: weekKeyName,
            Prognos: weekPogress.eachCategoryPrognos,
          });

        } else {
          weekWiseCorrectedArray.push({ name: weekKeyName, correct: "" });
          weekWiseProgressArray.push({
            name: weekKeyName,
            Prognos: weekWiseProgressArray[weekWiseProgressArray.length-1]?.Prognos,
          });
        }
        if (index === weeknameArray.length - 1) {
          const lastWeek = weekPogress?.eachCategoryPrognos ? weekPogress?.eachCategoryPrognos : 0
          setWeeklyProgress(lastWeek);
        }
      });
      setWeekWiseProgressGraph(weekWiseProgressArray);
      setWeeklyCoreectedGraph(weekWiseCorrectedArray);
    });
  }, []);

  useEffect(() => {
    const LastWeekURL = EndPoints.lastWeekTasks + props.item._id;
    instance2.get(LastWeekURL).then((response) => {
      setLastWeekTasks(response.data);
    });
  }, []);

  return (
    <Box
      maxWidth={true}
      style={{
        backgrounColor: "#fafafa",
        padding: { xs: "0 !important", md: "0 3rem" },
      }}
    >
      <Box
        sx={{
          height: "fit-content",
          marginTop: width < 1280 ? "2rem" : "11.7rem",
        }}
      >
        <Box>
          {width > 900 && (
            <Typography variant="h5">Statistik - {props.item.title}</Typography>
          )}
          <Typography variant="body2" style={{ marginTop: "0.5rem" }}>
            Du har klarat
            {` ${lastWeekTasks && lastWeekTasks?.correctedNoTimePressure} `} av
            {` ${lastWeekTasks && lastWeekTasks?.totalQuestions} `}
            uppgifter
          </Typography>
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Box
            sx={{
              width: "100%",
              border: "1px solid #dddddd",
              boxShadow: "0px 5px 10px #f2f2f2",
              borderRadius: 5,
              padding: "2rem 1rem",
              backgroundColor: "#fff",
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
                lastWeekTasks
                  ? (lastWeekTasks.totalCorrectQuestions /
                    lastWeekTasks.totalQuestions) *
                  100
                  : 0
              }
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "3rem",
            marginBottom: "2rem",
            display: "flex",
          }}
        >
          <Box sx={{ marginRight: "3rem" }}>
            <Typography variant="h5">
              {!lastWeekTasks ? "0" : lastWeekTasks.weeklyCorrectQuestions}
            </Typography>
            <Typography variant="body2">
              Klarade uppgifter denna veckan
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "1rem" }}>
            <Typography variant="h5">
              {!lastWeekTasks ? "0" : lastWeekTasks.correctedNoTimePressure}
            </Typography>
            <Typography variant="body2">Klarade uppgifter totalt</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderRadius: 3,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            border: "1px solid #dddddd",
            boxShadow: "0px 5px 10px #f2f2f2",
            padding: "2rem",
            backgroundColor: "#fff",
            // overflow: "scroll",
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
            Uppgifter
          </Typography>
          {weeklyCoreectedGraph.length > 0 && (
            <LineDemo weeklyCoreectedGraph={weeklyCoreectedGraph} />
          )}
        </Box>

        <Box
          sx={{
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h5">
            {isDesplayProgress ? weeklyProgress : 0}
          </Typography>
          <Typography variant="body2">
            Prognostiserad normerad poäng {props?.item.title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginBottom: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              borderRadius: 3,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              border: "1px solid #dddddd",
              boxShadow: "0px 5px 10px #f2f2f2",
              padding: "2rem",
              backgroundColor: "#fff",
              // overflow: "scroll",
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
              Poäng
            </Typography>
            {weekWiseProgressGraph && (
              <LinesChart
                syncId="anyId"
                weekWiseProgressGraph={weekWiseProgressGraph}
                CategoryPagesRightBar="categoryPagesRightBar"
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryPagesRightBar;
