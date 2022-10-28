import { verbalPercentageCalculator } from "./verbal";
import { quantitativePercentageCalculator } from "./kvantitative";

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
  if (Object.keys(weekWiseData).length < 1) {
    const currentDate = new Date();
    const yearStartDate = new Date(currentDate.getFullYear(), 0, 1);
    const noOfDaysFromCurrentDate = Math.floor(
      (currentDate - yearStartDate) / (24 * 60 * 60 * 1000)
    );

    const currentWeek = Math.ceil(noOfDaysFromCurrentDate / 7);
    for (let index = currentWeek; index < currentWeek - 7; index++) {
      previousWeeks.push("V." + index);
    }
  }

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
        eachCategoryPrognos: 0,
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
          if (calculationForTerminate >= 100) {
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
      weeklyProgressArr.push({ ...weekWiseProgress, name: week });
    });
  setWeeks(previousWeeks);

  return weeklyProgressArr;
};

export const getWeekNumbers = () => {
  const weeksArray = [];
  const currentDate = new Date();
  const yearStartDate = new Date(currentDate.getFullYear(), 0, 1);
  const noOfDaysFromCurrentDate = Math.floor(
    (currentDate - yearStartDate) / (24 * 60 * 60 * 1000)
  );

  const currentWeek = Math.ceil(noOfDaysFromCurrentDate / 7);
  for (let index = currentWeek; index > currentWeek - 7; index--) {
    weeksArray.push("V." + index);
  }
  return weeksArray;
};
