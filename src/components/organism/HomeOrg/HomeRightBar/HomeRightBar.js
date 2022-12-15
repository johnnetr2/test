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

  useEffect(() => {

    if (localStorage.getItem("userId")) {

      instance2.get(EndPoints.allCategoriesResultByUserForHomeGraph).then((response) => {
        console.log(response, 'response')
        // const { lastWeekSevenWeekVerbal, lastWeekSevenWeekQuantitative, isAttemptedMoreThenTwenty } =
        //   response.data;
        const { allCategoriesSolvedQuizes, isAttemptedMoreThenTwenty } =
          response.data;
        const weekNames = getWeekNumbers().reverse();
        const progressOfUserAllCategories = [];
        if (
          isAttemptedMoreThenTwenty &&
          allCategoriesSolvedQuizes.length > 1
        ) {

          //set state , will show progress or not 
          setShowProgress(isAttemptedMoreThenTwenty);

          const weekWiseAllCategoryData = allCategoriesSolvedQuizes.map((categorySolvedQuiz) => {
            // if (categorySolvedQuiz.sectionCategory.section.title == "Kvantitativ del") {
            const weekWisePerCategoryData = datesGroupByComponent(categorySolvedQuiz.solvedQuizesByUserTimePressure, "W")
            const isQuantitative = categorySolvedQuiz.sectionCategory.section.title === "Kvantitativ del"
            return { weekWisePerCategoryData, isQuantitative }
            // } else {
            //   verbalSolvedQuizes12.push(datesGroupByComponent(categorySolvedQuiz.solvedQuizesByUserTimePressure, "W"))
            // }
          })

          console.log(weekWiseAllCategoryData, 'weekWiseAllCategoryData')
          const verbalData = []
          const quantitativeData = []
          let perWeekVerbalCorrected = 0
          let perWeekVerbalAttempted = 0
          let perWeekQuantitativeCorrected = 0
          let perWeekQuantitativeAttempted = 0
          let weeknamecopy
          const hundredQuestionsPerWeekData = []
          for (let index = 0; index < weekWiseAllCategoryData.length; index++) {
            const { weekWisePerCategoryData, isQuantitative } = weekWiseAllCategoryData[index];
            const hundredQuestionsPerWeek = calculateWeekWiseNorming(weekWisePerCategoryData)

            weekNames.forEach((weekName) => {
              weeknamecopy = weekName
              const oneWeekCategoryData = hundredQuestionsPerWeek.find(questionsPerWeek => questionsPerWeek.name === weekName)
              if (!oneWeekCategoryData) {
                if (isQuantitative) {
                  quantitativeData.push({ weekName: weeknamecopy, perWeekQuantitativeCorrected, perWeekQuantitativeAttempted })
                } else {
                  verbalData.push({ weekName: weeknamecopy, perWeekVerbalAttempted, perWeekVerbalCorrected })
                }
              } else {
                if (isQuantitative) {
                  perWeekQuantitativeCorrected += oneWeekCategoryData.correctAnswers
                  perWeekQuantitativeAttempted += oneWeekCategoryData.attemptQuestions

                } else {
                  perWeekVerbalCorrected += oneWeekCategoryData.correctAnswers
                  perWeekVerbalAttempted += oneWeekCategoryData.attemptQuestions
                }
              }
            })

            if (isQuantitative) {
              quantitativeData.push({ weekName: weeknamecopy, perWeekQuantitativeCorrected, perWeekQuantitativeAttempted })
            } else {
              verbalData.push({ weekName: weeknamecopy, perWeekVerbalAttempted, perWeekVerbalCorrected })
            }

            perWeekVerbalCorrected = 0
            perWeekVerbalAttempted = 0
            // hundredQuestionsPerWeekData.push({ hundredQuestionsPerWeek, isQuantitative })
            // verbalSolvedQuizes1.push(calculateWeekWiseNorming(verbalWeekWise))

          }
          console.log(verbalData, 'verbalData')
          console.log(quantitativeData, 'quantitativeData')

          // const quantitativeSolvedQuizes = allCategoriesSolvedQuizes.filter((categorySolvedQuiz) => {
          //   return categorySolvedQuiz.sectionCategory.section.title == "Kvantitativ del"
          // })
          //   .map((underTimePressure) => {
          //     const quantitativeDatesGroup = datesGroupByComponent(underTimePressure.solvedQuizesByUserTimePressure, "W")
          //     return { quantitativeDatesGroup, sectionCategory: underTimePressure.sectionCategory }
          //   })

          // const verbalSolvedQuizes = allCategoriesSolvedQuizes.filter((categorySolvedQuiz) => {
          //   return categorySolvedQuiz.sectionCategory.section.title == "Verbal del"
          // })
          //   .map((underTimePressure) => {
          //     const verbalDatesGroup = datesGroupByComponent(underTimePressure.solvedQuizesByUserTimePressure, "W")
          //     return { verbalDatesGroup, sectionCategory: underTimePressure.sectionCategory }
          //   })
          // const solvedQuizesByUserTimePressureQuantitative = quantitativeSolvedQuizes.map((underTimePressure) => underTimePressure.solvedQuizesByUserTimePressure)
          // const solvedQuizesByUserTimePressureVerbal = verbalSolvedQuizes.map((underTimePressure) => {
          //   const verbal = datesGroupByComponent(underTimePressure.solvedQuizesByUserTimePressure)
          //   underTimePressure.solvedQuizesByUserTimePressure

          //   return {}
          // })

          // groupping quantitative category data in weeks
          // const quantitativeWeekWiseData = datesGroupByComponent(
          //   solvedQuizesByUserTimePressureQuantitative,
          //   "W"
          // );
          // // groupping verbal category data in weeks
          // const verbalWeekWiseData = datesGroupByComponent(
          //   solvedQuizesByUserTimePressureVerbal,
          //   "W"
          // );

          // percentage calculation of last 100 question and get normring from verbal table
          // const verbalWeekWiseProgress = calculateWeekWiseNorming(
          //   verbalWeekWiseData,
          //   "verbal",
          // );
          // percentage calculation of last 100 question and get normring from quantitative table
          // const quantitativeWeekWiseProgress = calculateWeekWiseNorming(
          //   quantitativeWeekWiseData,
          //   "quantitative"
          // );

          // console.log("quantitativeWeekWiseProgress 111", quantitativeWeekWiseProgress)
          // console.log("verbalWeekWiseProgress 111", verbalWeekWiseProgress)

          //calculate average of verbal and quantitative normring values 
          weekNames.forEach((weekName) => {
            // find verbal progress data for specific week number e.g V48
            console.log(weekName, 'weekName')
            // console.log("hundredQuestionsPerWeekData", hundredQuestionsPerWeekData)
            // const weekNameQuantitative = hundredQuestionsPerWeekData.filter((weekData) => {
            //   return weekData.isQuantitative
            // })
            // console.log(weekNameQuantitative)
            // const weekWiseDataWithWeekName = hundredQuestionsPerWeekData.find((accordingWeek) => {
            //   return accordingWeek.hundredQuestionsPerWeek
            // })
            // .hundredQuestionsPerWeek.find((weekName) => {
            //   return weekName.name === "V.47"
            // })
            // console.log(weekNameQuantitative, 'weekNameQuantitative')
            // const verbalNormringOfLastHundred = verbalSolvedQuizes1.find(
            //   (verbalNorming) => verbalNorming.verbalDatesGroup === weekName
            // );
            // console.log(verbalNormringOfLastHundred, 'verbalNormringOfLastHundred')

            //find quantitave progress data for specific week number e.g V48
            // const quantitativeNormringOfLastHundred = quantitativeSolvedQuizes1.find(
            //   (quantitativeNorming) => quantitativeNorming.name === weekName
            // );

            // calculate average of verbal and quantitative normring values
            // let overAllProgressOfWeek = 0;
            // if (!quantitativeNormringOfLastHundred && !verbalNormringOfLastHundred) {
            //   // for repeat privious progress if i did not done anything in next week
            //   overAllProgressOfWeek = progressOfUserAllCategories.length > 0 ? progressOfUserAllCategories[progressOfUserAllCategories.length - 1].Prognos : null;
            // } else if (quantitativeNormringOfLastHundred && verbalNormringOfLastHundred) {
            //   if (verbalNormringOfLastHundred.eachCategoryPrognos || quantitativeNormringOfLastHundred.eachCategoryPrognos) {
            //     overAllProgressOfWeek =
            //       (verbalNormringOfLastHundred.eachCategoryPrognos + quantitativeNormringOfLastHundred.eachCategoryPrognos) / 2;
            //   } else {
            //     overAllProgressOfWeek = progressOfUserAllCategories.length > 0 ? progressOfUserAllCategories[progressOfUserAllCategories.length - 1].Prognos : null;
            //   }
            // } else if (!verbalNormringOfLastHundred && quantitativeNormringOfLastHundred) {
            //   overAllProgressOfWeek = quantitativeNormringOfLastHundred.eachCategoryPrognos / 2;
            // } else if (!quantitativeNormringOfLastHundred && verbalNormringOfLastHundred) {
            //   overAllProgressOfWeek = verbalNormringOfLastHundred.eachCategoryPrognos / 2;
            // }

            // progressOfUserAllCategories.push({
            //   Prognos: overAllProgressOfWeek < 0 ? overAllProgressOfWeek.toFixed(1) : overAllProgressOfWeek,
            //   name: weekName,
            // });
          });
        } else {
          // making default array for map for newly users
          // weekNames.forEach((weekName) => {
          //   progressOfUserAllCategories.push({ name: weekName, Prognos: null })
          // })
        }
        // console.log("progressOfUserAllCategories 222", progressOfUserAllCategories)
        // setWeeklyProgress(progressOfUserAllCategories);
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
