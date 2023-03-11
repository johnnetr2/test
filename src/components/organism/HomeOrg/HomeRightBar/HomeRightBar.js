import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { EndPoints, instance2 } from "../../../service/Route";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LinesChart from "../../../molecule/Charts/LinesChart";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import { calculateWeekWiseNormingForHomePageGraph } from "../../../atom/percentageCalculator/Utils";
import { getWeekNumbers } from "../../../atom/percentageCalculator/Utils";
import { datesGroupByComponent } from '../../../service/commonService'
import { verbalPercentageCalculator } from "../../../atom/percentageCalculator/verbal";
import { quantitativePercentageCalculator } from "../../../atom/percentageCalculator/kvantitative";
import PaymentCard from "../../../molecule/PaymentCard";

const HomeRightBar = (props) => {
  const theme = createTheme();
  const [showProgress, setShowProgress] = useState(false);
  const [weeklyProgress, setWeeklyProgress] = useState([]);
  const isInTrial = JSON.parse(localStorage.getItem("isInTrial"))
  const isPremium = JSON.parse(localStorage.getItem("isPremium"))

  useEffect(() => {

    if (localStorage.getItem("userId")) {

      instance2.get(EndPoints.allCategoriesResultByUserForHomeGraph).then((response) => {
        const { allCategoriesSolvedQuizes, isAttemptedMoreThenTwenty } = response.data;
        const weekNames = getWeekNumbers().reverse();
        const verbalQuantitativesevenWeeksProgress = []

        if (
          isAttemptedMoreThenTwenty &&
          allCategoriesSolvedQuizes.length > 1
        ) {

          //set state , will show progress or not 
          setShowProgress(isAttemptedMoreThenTwenty);
          // week wise groupping all categories data and devide add key for verbal and quantitative
          let weekWiseAllCategoryData = allCategoriesSolvedQuizes.map((categorySolvedQuiz) => {
            const weekWisePerCategoryData = datesGroupByComponent(categorySolvedQuiz.solvedQuizesByUserTimePressure, "W")
            const isQuantitative = categorySolvedQuiz.sectionCategory.section.title === "Kvantitativ del"
            return { weekWisePerCategoryData, isQuantitative }

          })

          let weekWiseAllCategoryDataFormater = weekWiseAllCategoryData
          weekWiseAllCategoryDataFormater = weekWiseAllCategoryDataFormater.map(({ weekWisePerCategoryData, isQuantitative }) => {
            let sortable = [];
            for (var key in weekWisePerCategoryData) {
              sortable.push([key, weekWisePerCategoryData[key]]);
            }

            sortable.sort(function (a, b) {
              return new Date(a[1][0].createdAt) - new Date(b[1][0].createdAt);
            });
            let obj = new Map();
            sortable.forEach((innerArray) => {
              obj.set(innerArray[0], innerArray[1]);
            });
            return { weekWisePerCategoryData: obj, isQuantitative }

          })

          // pick last hundred questions for week for every category
          const hundredQuestionsPerWeekData = []
          for (let index = 0; index < weekWiseAllCategoryDataFormater.length; index++) {
            const { weekWisePerCategoryData, isQuantitative } = weekWiseAllCategoryDataFormater[index];
            const hundredQuestionsPerWeek = calculateWeekWiseNormingForHomePageGraph(weekWisePerCategoryData)
            hundredQuestionsPerWeekData.push({ hundredQuestionsPerWeek, isQuantitative })
          }

          // add same weeks data of verbal and quantitative categorgries
          // get normring for quantitative and calculate average of both categories.
          let perWeekVerbalCorrected = 0
          let perWeekVerbalAttempted = 0
          let perWeekQuantitativeCorrected = 0
          let perWeekQuantitativeAttempted = 0
          for (let weekNameIndex = 0; weekNameIndex < weekNames.length; weekNameIndex++) {
            const weekNumber = weekNames[weekNameIndex];
            // for pickup same weeks data from all categories
            for (let index = 0; index < hundredQuestionsPerWeekData.length; index++) {

              const categoryWeekWiseData = hundredQuestionsPerWeekData[index];
              const categoryWeeksData = categoryWeekWiseData.hundredQuestionsPerWeek.find(weekData => weekData.name === weekNumber)
              if (!categoryWeeksData) {
                // for pick previous week's data if any category is missing on week
                for (let pickPrevious = weekNameIndex - 1; pickPrevious >= 0; pickPrevious--) {
                  const previousWeekName = weekNames[pickPrevious];
                  const categoryWeeksDataPrev = categoryWeekWiseData.hundredQuestionsPerWeek.find(weekData => weekData.name === previousWeekName)

                  if (categoryWeeksDataPrev) {
                    if (categoryWeekWiseData.isQuantitative) {
                      perWeekQuantitativeCorrected += categoryWeeksDataPrev.correctAnswers
                      perWeekQuantitativeAttempted += categoryWeeksDataPrev.attemptQuestions
                    } else {
                      perWeekVerbalCorrected += categoryWeeksDataPrev.correctAnswers
                      perWeekVerbalAttempted += categoryWeeksDataPrev.attemptQuestions
                    }
                    break
                  }
                }
              } else {
                // add check to skip week's progress when not have done enough progress. 

                if (categoryWeeksData.attemptQuestions > 0 && categoryWeeksData.attemptQuestions < 20) {
                  perWeekQuantitativeAttempted = 0
                  perWeekVerbalAttempted = 0
                  break
                }
                if (categoryWeekWiseData.isQuantitative) {
                  perWeekQuantitativeCorrected += categoryWeeksData.correctAnswers
                  perWeekQuantitativeAttempted += categoryWeeksData.attemptQuestions
                } else {
                  perWeekVerbalCorrected += categoryWeeksData.correctAnswers
                  perWeekVerbalAttempted += categoryWeeksData.attemptQuestions
                }

              }

            }
            // calculate percentage for retrive normring from the table
            let quantitativePercentageForNormring = perWeekQuantitativeAttempted < 1 ? null : (perWeekQuantitativeCorrected / perWeekQuantitativeAttempted) * 100;
            let verbalPercentageForNormring = perWeekVerbalAttempted < 1 ? null : (perWeekVerbalCorrected / perWeekVerbalAttempted) * 100;

            // getting normring values from verbal normring tables
            const verbalNormring = verbalPercentageForNormring ? verbalPercentageCalculator(
              verbalPercentageForNormring.toFixed(2)
            ) : verbalPercentageForNormring;

            // getting normring values from quantitative normring tables
            const quantitativeNormring = quantitativePercentageForNormring ? quantitativePercentageCalculator(
              quantitativePercentageForNormring.toFixed(2)
            ) : quantitativePercentageForNormring;

            // Average of quantitative and verbal
            let verbalQuantitativePerWeekNormringAverage = null
            if (verbalNormring || quantitativeNormring) {
              if (!verbalNormring) {
                verbalQuantitativePerWeekNormringAverage = quantitativeNormring / 2
              } else if (!quantitativeNormring) {
                verbalQuantitativePerWeekNormringAverage = verbalNormring / 2
              } else {
                verbalQuantitativePerWeekNormringAverage = (verbalNormring + quantitativeNormring) / 2
              }
            } else if (verbalNormring === 0 && quantitativeNormring === 0) {
              verbalQuantitativePerWeekNormringAverage = 0
            }

            verbalQuantitativesevenWeeksProgress.push({
              Prognos: verbalQuantitativePerWeekNormringAverage ? verbalQuantitativePerWeekNormringAverage.toFixed(2) : verbalQuantitativePerWeekNormringAverage,
              name: weekNumber
            })

            perWeekQuantitativeCorrected = 0
            perWeekQuantitativeAttempted = 0
            perWeekVerbalCorrected = 0
            perWeekVerbalAttempted = 0
          }

        } else {
          // making default array for map for newly users
          weekNames.forEach((weekName) => {
            verbalQuantitativesevenWeeksProgress.push({ name: weekName, Prognos: null })
          })
        }
        // console.log("verbalQuantitativesevenWeeksProgress", verbalQuantitativesevenWeeksProgress)
        setWeeklyProgress(verbalQuantitativesevenWeeksProgress)
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
        {!isPremium && !isInTrial &&
            <PaymentCard
            title={"Få exklusiva fördelar som förbereder dig för Högskoleprovet"}
            isInTrial={isInTrial}
          ></PaymentCard>
        }
        <Box style={{ marginTop: isInTrial ? "10.5rem" : "3rem" }}>
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
        {!isPremium && isInTrial &&
          <PaymentCard
            title={"Lär dig ännu mer!"}
            subTitle={"Uppgradera till premium för endast 450 SEK. "}
            isInTrial={isInTrial}
          ></PaymentCard>
        }
      </Box>
    </Box>
  );
};

export default HomeRightBar;
