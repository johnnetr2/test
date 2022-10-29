import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import moment from "moment";

import { EndPoints, instance2 } from "../../../service/Route";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LinesChart from "../../../molecule/Charts/LinesChart";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import { calculateWeekWiseNorming } from "../../../atom/percentageCalculator/Utils";
import { getWeekNumbers } from "../../../atom/percentageCalculator/Utils";

function datesGroupByComponent(dates, token) {
  return dates.reduce(function (val, obj) {
    let comp = moment(obj["createdAt"], "YYYY/MM/DD").format(token);
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
}

const HomeRightBar = (props) => {
  const theme = createTheme();
  const [showProgress, setShowProgress] = useState(false);
  const [weeklyProgress, setWeeklyProgress] = useState([]);
  const [weeks, setWeeks] = useState();

  useEffect(() => {
    const getPreviosRecord =
      EndPoints.studentPerviousProgress + localStorage.getItem("userId");
    instance2.get(getPreviosRecord).then((response) => {
      response.data.Data.map((item) => {
        if (item.AttemptedQuestion >= 20) {
          setShowProgress(true);
        } else {
          setShowProgress(false);
        }
      });
    });

    if (localStorage.getItem("userId")) {
      const URL = EndPoints.oneDayResult + localStorage.getItem("userId");
      instance2.get(URL).then((response) => {
        const { lastWeekSevenWeekVerbal, lastWeekSevenWeekQuantitative } =
          response.data;
        const progressOfUserAllCategories = [];
        if (
          lastWeekSevenWeekQuantitative.length > 1 &&
          lastWeekSevenWeekVerbal.length > 1
        ) {
          const verbelWeekWiseData = datesGroupByComponent(
            lastWeekSevenWeekVerbal,
            "W"
          );
          const quantitativeWeekWiseData = datesGroupByComponent(
            lastWeekSevenWeekQuantitative,
            "W"
          );
          const verbalWeekWiseProgress = calculateWeekWiseNorming(
            verbelWeekWiseData,
            "verbel",
            setWeeks
          );
          const quantitativeWeekWiseProgress = calculateWeekWiseNorming(
            quantitativeWeekWiseData,
            "quantitative",
            setWeeks
          );

          const weekNames = getWeekNumbers();

          weekNames.forEach((weekName) => {
            const verbalNormingOfWeek = verbalWeekWiseProgress.find(
              (verbalNorming) => verbalNorming.name === weekName
            );

            const quantitativeNormingOfWeek = quantitativeWeekWiseProgress.find(
              (quantitativeNorming) => quantitativeNorming.name === weekName
            );
            let overAllProgressOfWeek = 0;

            if (quantitativeNormingOfWeek && verbalNormingOfWeek) {
              overAllProgressOfWeek =
                (verbalNormingOfWeek.eachCategoryPrognos +
                  quantitativeNormingOfWeek.eachCategoryPrognos) /
                2;
            } else if (!verbalNormingOfWeek && quantitativeNormingOfWeek) {
              overAllProgressOfWeek =
                (0 + quantitativeNormingOfWeek.eachCategoryPrognos) / 2;
            } else if (!quantitativeNormingOfWeek && verbalNormingOfWeek) {
              overAllProgressOfWeek =
                (verbalNormingOfWeek.eachCategoryPrognos + 0) / 2;
            }

            const averageProgressOfVerbalQuantitative =
              overAllProgressOfWeek.toFixed(1);

            progressOfUserAllCategories.push({
              overAllProgress: averageProgressOfVerbalQuantitative,
              name: weekName,
            });
          });
        }
        setWeeklyProgress(progressOfUserAllCategories);
      });
    }
  }, []);

  return (
    <Box sx={{ padding: { xs: 0, sm: "0 3rem" }, width: "100%" }}>
      <Box
        sx={{
          height: "auto",
          marginTop: "6rem",
        }}
      >
        <Box style={{ marginTop: "10.5rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginTop: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            Analys
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: ".5rem",
            }}
          >
            <Box
              sx={{ width: { xs: "100%", sm: "49%" }, backgroundColor: "#fff" }}
            >
              <QuestionProgressBox
                totalPrognos={props?.totalPrognos}
                showPrognos={showProgress}
              />
            </Box>
            <Box
              sx={{ width: { xs: "100%", sm: "49%" }, backgroundColor: "#fff" }}
            >
              <GoalBox
                goalPoint={
                  props?.studentPreference?.point &&
                  props?.studentPreference?.point
                }
              />
            </Box>
          </Box>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Utveckling
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "18rem",
              backgroundColor: "#fff",

              borderRadius: 3,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              border: "1px solid #dddddd",
              boxShadow: "0px 5px 10px #f2f2f2",
              padding: "2rem",
              [theme.breakpoints.down("md")]: {
                padding: "1rem",
                overflow: "scroll",
              },
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
            <LinesChart
              syncId="anyId"
              mondayData={
                weeklyProgress[0] && showProgress
                  ? weeklyProgress[0].overAllProgress
                  : null
              }
              tuesdayData={
                weeklyProgress[1] && showProgress
                  ? weeklyProgress[1].overAllProgress
                  : null
              }
              wednesdayData={
                weeklyProgress[2] && showProgress
                  ? weeklyProgress[2].overAllProgress
                  : null
              }
              thursdayData={
                weeklyProgress[3] && showProgress
                  ? weeklyProgress[3].overAllProgress
                  : null
              }
              fridayData={
                weeklyProgress[4] && showProgress
                  ? weeklyProgress[4].overAllProgress
                  : null
              }
              saturdayData={
                weeklyProgress[5] && showProgress
                  ? weeklyProgress[5].overAllProgress
                  : null
              }
              sundayData={
                weeklyProgress[6] && showProgress
                  ? weeklyProgress[6].overAllProgress
                  : null
              }
              weeklyProgress={weeklyProgress}
              weeks={weeks}
              HomeRightBar="homeRightBar"
            />
          </Box>

          <Box style={{ marginTop: "2rem" }}>
            <Typography
              variant="h6"
              component="h6"
              style={{
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
            >
              Nästa prov
            </Typography>
            <Box sx={{ display: "flex", marginBottom: "1rem" }}>
              <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
                <ImpDatesCard
                  season={
                    props?.studentPreference?.season &&
                    props?.studentPreference?.season
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeRightBar;
