import { verbalPercentageCalculator } from "./verbal";
import { quantitativePercentageCalculator } from "./kvantitative";
import { MEKNormeringValueFor } from "./PercentageCalculator";
import { NOGNormeringValueFor } from "./PercentageCalculator";
import { ORDNormeringValueFor } from "./PercentageCalculator";
import { XYZNormeringValueFor } from "./PercentageCalculator";

import { DTKNormeringValueFor } from "./PercentageCalculator";
import { ELFNormeringValueFor } from "./PercentageCalculator";
import { KVANormeringValueFor } from "./PercentageCalculator";
import { LASNormeringValueFor } from "./PercentageCalculator";

export const valueFor = (percentage, rageArray) => {
  let rageValue = 0;
  for (let i = 0; i < rageArray.length; i++) {
    const isInRange = inRange(percentage, rageArray[i].min, rageArray[i].max);
    if (isInRange === true) {
      rageValue = rageArray[i].value;
      break;
    }
  }
  return rageValue;
};

function inRange(x, min, max) {
  return min <= x && x <= max;
}

export const calculateWeekWiseNorming = (weekWiseData, testTypes, setWeeks) => {
  const previousWeeks = [];
  const weeklyProgressArr = [];
  let noOfEmptyWeek = 0;

  if (Object.keys(weekWiseData).length < 7) {
    const weekKeys = Object.keys(weekWiseData); //35,36
    const firstWeekKey = weekKeys[0]; //35
    noOfEmptyWeek = 7 - weekKeys.length; //5
    const startIndexOfLoop = firstWeekKey - noOfEmptyWeek; //30 //first = 35

    for (let index = startIndexOfLoop; index < firstWeekKey; index++) {
      previousWeeks.push("V." + index);
      weeklyProgressArr.push({
        correctAnswers: 0,
        attemptQuestions: 0,
        eachCategoryPrognos: null,
        name: "V." + index,
      });
    }
  }

  let weekWiseProgress = {};
  let calculationForTerminate = 0;

  weekWiseData &&
    Object.keys(weekWiseData).map((weekKeyName, index) => {
      const week = "V." + weekKeyName;
      previousWeeks.push(week);
      for (let iterations = index; iterations >= 0; iterations--) {
        const weekData = Object.values(weekWiseData)[iterations];

        for (
          let indexQuizResolved = 0;
          indexQuizResolved < weekData.length;
          indexQuizResolved++
        ) {
          const solvedQuizOfWeek = weekData[indexQuizResolved];

          calculationForTerminate =
            calculationForTerminate + solvedQuizOfWeek.attemptedQuestion;
          if (calculationForTerminate > 100) {
            break;
          }
          weekWiseProgress.correctAnswers = weekWiseProgress?.correctAnswers
            ? weekWiseProgress?.correctAnswers + solvedQuizOfWeek.correctAnswer
            : solvedQuizOfWeek.correctAnswer;
          weekWiseProgress.attemptQuestions = weekWiseProgress?.attemptQuestions
            ? weekWiseProgress?.attemptQuestions +
              solvedQuizOfWeek.attemptedQuestion
            : solvedQuizOfWeek.attemptedQuestion;
        }
        if (calculationForTerminate > 100) {
          break;
        }
      }

      let progress =
        (weekWiseProgress?.correctAnswers /
          weekWiseProgress?.attemptQuestions) *
        100;
      if (testTypes === "verbel") {
        weekWiseProgress.eachCategoryPrognos = verbalPercentageCalculator(
          progress.toFixed(2)
        );
      } else {
        weekWiseProgress.eachCategoryPrognos = quantitativePercentageCalculator(
          progress.toFixed(2)
        );
      }
      calculationForTerminate = 0;
      weeklyProgressArr.push({ ...weekWiseProgress, name: week });
    });
  setWeeks(previousWeeks);

  return weeklyProgressArr;
};

export const getWeekNumbers = () => {
  const weeksArray = [];
  const currentWeek = getCurrentWeekNumber();
  for (let index = currentWeek; index > currentWeek - 7; index--) {
    weeksArray.push("V." + index);
  }
  return weeksArray;
};

export const getCurrentWeekNumber = () => {
  const currentDate = new Date();
  const yearStartDate = new Date(currentDate.getFullYear(), 0, 1);
  const noOfDaysFromCurrentDate = Math.floor(
    (currentDate - yearStartDate) / (24 * 60 * 60 * 1000)
  );

  const currentWeek = Math.ceil(noOfDaysFromCurrentDate / 7);
  return currentWeek;
};

export const calculateWeekWiseNormingForCategory = (
  sevenWeekWiseData,
  isDesplayProgress,
  setIsDesplayProgress,
  categoryname
) => {
  const weeklyProgressArr = [];
  let a;
  if (Object.keys(sevenWeekWiseData).length < 7) {
    let keys = Object.keys(sevenWeekWiseData); //35,36
    let first = keys[0]; //35
    a = 7 - keys.length; //5
    let b = first - a; //30 //first = 35
    const defaultValuseObj = {
      correctAnswers: 0,
      attemptQuestions: 0,
      eachCategoryPrognos: null,
      totalQuestion: 0,
      weekWiseCorrected: 0,
    };
    for (let index = b; index < first; index++) {
      weeklyProgressArr.push({ ...defaultValuseObj, name: "V." + index });
    }
  }

  let weekWiseProgress = {};
  let calculationForTerminate = 0;

  sevenWeekWiseData &&
    Object.keys(sevenWeekWiseData).forEach((weekKey, index) => {
      const weekKeyName = "V." + weekKey;
      let weekWiseCorrected = 0;

      for (let iterations = index; iterations >= 0; iterations--) {
        const weekWiseData = Object.values(sevenWeekWiseData)[iterations];

        if (iterations === index) {
          for (const solvedQuiz of weekWiseData) {
            weekWiseCorrected = weekWiseCorrected + solvedQuiz.correctAnswer;
          }
        }

        for (
          let indexQuizResolved = 0;
          indexQuizResolved < weekWiseData.length;
          indexQuizResolved++
        ) {
          const solvedQuizOfWeek = weekWiseData[indexQuizResolved];

          calculationForTerminate =
            calculationForTerminate + solvedQuizOfWeek.attemptedQuestion;
          if (calculationForTerminate >= 100) {
            break;
          }
          if (solvedQuizOfWeek.quiz.isTimeRestricted) {
            weekWiseProgress.correctAnswers = weekWiseProgress?.correctAnswers
              ? weekWiseProgress?.correctAnswers +
                solvedQuizOfWeek.correctAnswer
              : solvedQuizOfWeek.correctAnswer;
            weekWiseProgress.totalQuestion = weekWiseProgress?.totalQuestion
              ? weekWiseProgress?.totalQuestion + solvedQuizOfWeek.totalQuestion
              : solvedQuizOfWeek.totalQuestion;
            weekWiseProgress.attemptQuestions =
              weekWiseProgress?.attemptQuestions
                ? weekWiseProgress?.attemptQuestions +
                  solvedQuizOfWeek.attemptedQuestion
                : solvedQuizOfWeek.attemptedQuestion;
          }
        }
      }
      if (weekWiseProgress?.attemptQuestions >= 20) {
        if (!isDesplayProgress) {
          setIsDesplayProgress(true);
        }
        let progress =
          (weekWiseProgress?.correctAnswers /
            weekWiseProgress?.attemptQuestions) *
          100;

        weekWiseProgress.eachCategoryPrognos = percentageCalculation(
          progress,
          categoryname
        );
        weeklyProgressArr.push({
          ...weekWiseProgress,
          weekWiseCorrected,
          name: weekKeyName,
        });
      } else {
        weeklyProgressArr.push({
          eachCategoryPrognos: null,
          weekWiseCorrected,
          correctAnswers: weekWiseProgress.correctAnswers,
          totalQuestion: weekWiseProgress.totalQuestion,
          attemptQuestions: weekWiseProgress.attemptQuestions,
          name: weekKeyName,
        });
      }
      weekWiseProgress = {};
      calculationForTerminate = 0;
    });

  return weeklyProgressArr;
};

const percentageCalculation = (prognos, categoryname) => {
  switch (categoryname) {
    case "XYZ":
      return XYZNormeringValueFor(prognos);
    case "KVA":
      return KVANormeringValueFor(prognos);
    case "NOG":
      return NOGNormeringValueFor(prognos);
    case "DTK":
      return DTKNormeringValueFor(prognos);
    case "ELF":
      return ELFNormeringValueFor(prognos);
    case "ORD":
      return ORDNormeringValueFor(prognos);
    case "MEK":
      return MEKNormeringValueFor(prognos);
    case "LÄS":
      return LASNormeringValueFor(prognos);
    default:
      break;
  }
};
