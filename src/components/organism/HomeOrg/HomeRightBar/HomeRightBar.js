import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { EndPoints, instance2 } from "../../../service/Route";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LinesChart from "../../../molecule/Charts/LinesChart";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import { calculateWeekWiseNorming } from "../../../atom/percentageCalculator/Utils";
import { getWeekNumbers } from "../../../atom/percentageCalculator/Utils";
import { datesGroupByComponent } from '../../../service/commonService'

const HomeRightBar = (props) => {
  const theme = createTheme();
  const [showProgress, setShowProgress] = useState(false);
  const [weeklyProgress, setWeeklyProgress] = useState([]);
  const [weeks, setWeeks] = useState();

  useEffect(() => {

    if (localStorage.getItem("userId")) {
      const URL = EndPoints.oneDayResult + localStorage.getItem("userId");
      instance2.get(URL).then((response) => {
        const { lastWeekSevenWeekVerbal, lastWeekSevenWeekQuantitative, isAttemptedMoreThenTwenty } =
          response.data;
        const weekNames = getWeekNumbers().reverse();
        const progressOfUserAllCategories = [];
        if (
          isAttemptedMoreThenTwenty &&
          lastWeekSevenWeekQuantitative.length > 1 &&
          lastWeekSevenWeekVerbal.length > 1
        ) {

          setShowProgress(isAttemptedMoreThenTwenty);


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

          weekNames.forEach((weekName) => {
            const verbalNormingOfWeek = verbalWeekWiseProgress.find(
              (verbalNorming) => verbalNorming.name === weekName
            );

            const quantitativeNormingOfWeek = quantitativeWeekWiseProgress.find(
              (quantitativeNorming) => quantitativeNorming.name === weekName
            );
            let overAllProgressOfWeek = 0;

            if (!quantitativeNormingOfWeek && !verbalNormingOfWeek) {
              overAllProgressOfWeek = progressOfUserAllCategories.length > 0 ? progressOfUserAllCategories[progressOfUserAllCategories.length - 1].Prognos : null;
            } else if (quantitativeNormingOfWeek && verbalNormingOfWeek) {
              let { eachCategoryPrognos: verbalProgress } = verbalNormingOfWeek;
              let { eachCategoryPrognos: quantitativeProgress } =
                quantitativeNormingOfWeek;

              if (verbalProgress || quantitativeProgress) {
                overAllProgressOfWeek =
                  (verbalNormingOfWeek.eachCategoryPrognos +
                    quantitativeNormingOfWeek.eachCategoryPrognos) /
                  2;
              } else {
                overAllProgressOfWeek = progressOfUserAllCategories.length > 0 ? progressOfUserAllCategories[progressOfUserAllCategories.length - 1].Prognos : null
              }
            } else if (!verbalNormingOfWeek && quantitativeNormingOfWeek) {
              overAllProgressOfWeek =
                (0 + quantitativeNormingOfWeek.eachCategoryPrognos) / 2;
            } else if (!quantitativeNormingOfWeek && verbalNormingOfWeek) {
              overAllProgressOfWeek =
                (verbalNormingOfWeek.eachCategoryPrognos + 0) / 2;
            }

            const averageProgressOfVerbalQuantitative = overAllProgressOfWeek < 0
              ? overAllProgressOfWeek.toFixed(1)
              : overAllProgressOfWeek;

            progressOfUserAllCategories.push({
              Prognos: averageProgressOfVerbalQuantitative,
              name: weekName,
            });
          });
        } else {
          weekNames.forEach((weekName) => {
            progressOfUserAllCategories.push({ name: weekName, Prognos: null })
          })
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
              weekWiseProgressGraph={weeklyProgress}
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
