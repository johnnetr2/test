import { MEKNormeringValueFor } from "./normringCalculations/NormringCalculator";
import { NOGNormeringValueFor } from "./normringCalculations/NormringCalculator";
import { ORDNormeringValueFor } from "./normringCalculations/NormringCalculator";
import { XYZNormeringValueFor } from "./normringCalculations/NormringCalculator";

import { DTKNormeringValueFor } from "./normringCalculations/NormringCalculator";
import { ELFNormeringValueFor } from "./normringCalculations/NormringCalculator";
import { KVANormeringValueFor } from "./normringCalculations/NormringCalculator";
import { LASNormeringValueFor } from "./normringCalculations/NormringCalculator";

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
// not used yet
export const calculateWeekWiseNorming = (weekWiseData, testTypes) => {
    const weeklyProgressArr = [];
    let weekWiseProgress = {};
    let totalCorrecteted = 0;
    let totalAttempted = 0;
    let calculationForTerminate = 0;

    // calculate percentage of week wise data and got normring from table
    weekWiseData &&
        Object.keys(weekWiseData).map((weekKeyName, index) => {
            const week = "V." + weekKeyName;

            //reverse loop to add privious weeks data to achive privious hundred questions progress
            for (let iterations = index; iterations >= 0; iterations--) {
                const weekData = Object.values(weekWiseData)[iterations];
                for (
                    let indexQuizResolved = 0;
                    indexQuizResolved < weekData.length;
                    indexQuizResolved++
                ) {
                    const solvedQuizOfWeek = weekData[indexQuizResolved];
                    calculationForTerminate += solvedQuizOfWeek.attemptedQuestion;
                    if (calculationForTerminate <= 60) {
                        totalCorrecteted += solvedQuizOfWeek.correctAnswer;
                        totalAttempted += solvedQuizOfWeek.attemptedQuestion
                    } else {
                        let answers = solvedQuizOfWeek.answer
                        const loopterminater = 60 - totalAttempted
                        let remainingCorrected = 0
                        for (let answersIndex = 0; answersIndex <= loopterminater; answersIndex++) {
                            const answer = answers[answersIndex];
                            remainingCorrected += answer.questionCounter
                        }
                        totalAttempted = 60
                        totalCorrecteted = totalCorrecteted + remainingCorrected;
                        break;
                    }

                }
                if (calculationForTerminate > 60) {
                    break;
                }
            }

            weekWiseProgress.correctAnswers = totalCorrecteted;
            weekWiseProgress.attemptQuestions = totalAttempted;
            totalCorrecteted = 0
            totalAttempted = 0
            calculationForTerminate = 0;
            weeklyProgressArr.push({ ...weekWiseProgress, name: week });
            return { ...weekWiseProgress, name: week }
        });



    return weeklyProgressArr;
};

export const calculateWeekWiseNormingForHomePageGraph = (weekWiseData, testTypes) => {
    const weeklyProgressArr = [];
    const mapData = new Map(weekWiseData)
    let keys = []
    let values = []
    for (let [key, value] of mapData.entries()) {
        keys.push(key)
        values.push(value)
    }
    // console.log("has ash ajsh", keys, values)

    let weekWiseProgress = {};
    let totalCorrecteted = 0;
    let totalAttempted = 0;
    let calculationForTerminate = 0;

    // calculate percentage of week wise data and got normring from table
    mapData &&
        keys.map((weekKeyName, index) => {
            const week = "V." + weekKeyName;

            //reverse loop to add privious weeks data to achive privious hundred questions progress
            for (let iterations = index; iterations >= 0; iterations--) {
                const weekData = values[iterations];
                for (
                    let indexQuizResolved = 0;
                    indexQuizResolved < weekData.length;
                    indexQuizResolved++
                ) {
                    const solvedQuizOfWeek = weekData[indexQuizResolved];
                    calculationForTerminate += solvedQuizOfWeek.attemptedQuestion;
                    if (calculationForTerminate <= 60) {
                        totalCorrecteted += solvedQuizOfWeek.correctAnswer;
                        totalAttempted += solvedQuizOfWeek.attemptedQuestion
                    } else {
                        let answers = solvedQuizOfWeek.answer
                        const loopterminater = 60 - totalAttempted
                        let remainingCorrected = 0
                        for (let answersIndex = 0; answersIndex <= loopterminater; answersIndex++) {
                            const answer = answers[answersIndex];
                            remainingCorrected += answer.questionCounter
                        }
                        totalAttempted = 60
                        totalCorrecteted = totalCorrecteted + remainingCorrected;
                        break;
                    }

                }
                if (calculationForTerminate > 60) {
                    break;
                }
            }

            weekWiseProgress.correctAnswers = totalCorrecteted;
            weekWiseProgress.attemptQuestions = totalAttempted;
            totalCorrecteted = 0
            totalAttempted = 0
            calculationForTerminate = 0;
            weeklyProgressArr.push({ ...weekWiseProgress, name: week });
            return { ...weekWiseProgress, name: week }
        });



    return weeklyProgressArr;
};

export const getWeekNumbers = () => {
    const weeksArray = [];
    const todayDate = new Date();
    const currentWeek = getCurrentWeekNumber(todayDate);

    for (let index = currentWeek; index > (currentWeek > 7 ? currentWeek - 7 : 0); index--) {
        weeksArray.push("V." + index);
    }

    if (weeksArray.length < 7) {
        const currentYear = new Date().getFullYear()
        const previousYear = new Date((currentYear - 1) + "/12/31")
        const lastYearWeekNumber = getCurrentWeekNumber(previousYear);
        const whenTerminateLoop = lastYearWeekNumber - (7 - weeksArray.length)

        for (let index = lastYearWeekNumber; index > whenTerminateLoop; index--) {
            weeksArray.push("V." + index);
        }
    }
    return weeksArray;
};

export const getCurrentWeekNumber = (date) => {
    const currentDate = new Date(date);
    const yearStartDate = new Date(currentDate.getFullYear(), 0, 1);
    const noOfDaysFromCurrentDate = Math.floor(
        (currentDate - yearStartDate) / (24 * 60 * 60 * 1000)
    );

    const currentWeek = Math.ceil(noOfDaysFromCurrentDate / 7);
    return currentWeek;
};

// not used yet
export const calculateWeekWiseNormingForCategorynewlessthen7weekNumber = (
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
        for (let index = b; index < first; index++) {
            weeklyProgressArr.push({
                correctAnswers: 0,
                attemptQuestions: 0,
                eachCategoryPrognos: null,
                weekWiseCorrected: 0,
                name: "V." + index
            });
        }
    }

    let correctAnswers = 0
    let attemptQuestions = 0
    let eachCategoryPrognos = null
    let calculationForTerminate = 0;

    sevenWeekWiseData &&
        Object.keys(sevenWeekWiseData).forEach((weekKey, index) => {
            const weekKeyName = "V." + weekKey;
            let weekWiseCorrected = 0;

            for (let iterations = index; iterations >= 0; iterations--) {
                let weekWiseData = Object.values(sevenWeekWiseData)[iterations];

                if (iterations === index) {
                    for (const solvedQuiz of weekWiseData) {
                        weekWiseCorrected = weekWiseCorrected + solvedQuiz.correctAnswer;
                    }
                }

                weekWiseData = weekWiseData.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                for (
                    let indexQuizResolved = 0;
                    indexQuizResolved < weekWiseData.length;
                    indexQuizResolved++
                ) {
                    const solvedQuizOfWeek = weekWiseData[indexQuizResolved];

                    if (solvedQuizOfWeek.quiz.isTimeRestricted) {
                        calculationForTerminate += solvedQuizOfWeek.attemptedQuestion;
                        if (calculationForTerminate <= 60) {
                            correctAnswers += solvedQuizOfWeek.correctAnswer;
                            attemptQuestions += solvedQuizOfWeek.attemptedQuestion
                        } else {
                            let answers = solvedQuizOfWeek.answer
                            // answers = answers.reverse()
                            const loopterminater = 60 - attemptQuestions
                            let remainingCorrected = 0
                            for (let answersIndex = 0; answersIndex <= loopterminater; answersIndex++) {
                                const answer = answers[answersIndex];
                                remainingCorrected += answer.questionCounter
                            }
                            attemptQuestions = 60
                            correctAnswers = correctAnswers + remainingCorrected;
                            break;
                        }
                    }
                }
                if (calculationForTerminate > 60) {
                    break
                }
            }
            if (attemptQuestions >= 20) {
                if (!isDesplayProgress) {
                    setIsDesplayProgress(true);
                }
                let progress = (correctAnswers / attemptQuestions) * 100;

                eachCategoryPrognos = percentageCalculation(progress < 0 ? 0 : progress.toFixed(2), categoryname);
                weeklyProgressArr.push({
                    correctAnswers,
                    attemptQuestions,
                    eachCategoryPrognos,
                    weekWiseCorrected,
                    name: weekKeyName,
                });
            } else {
                weeklyProgressArr.push({
                    eachCategoryPrognos: null,
                    weekWiseCorrected,
                    correctAnswers: correctAnswers,
                    attemptQuestions: attemptQuestions,
                    name: weekKeyName,
                });
            }
            correctAnswers = 0
            attemptQuestions = 0
            eachCategoryPrognos = null
            calculationForTerminate = 0;
        });

    return weeklyProgressArr;
};

export const calculateWeekWiseNormingForCategory = (
    sevenWeekWiseData,
    isDesplayProgress,
    setIsDesplayProgress,
    categoryname
) => {
    const weeklyProgressArr = [];
    let sortable = [];
    for (var key in sevenWeekWiseData) {
        sortable.push([key, sevenWeekWiseData[key]]);
    }

    sortable.sort(function (a, b) {
        return new Date(a[1][0].createdAt) - new Date(b[1][0].createdAt);
    });

    let obj = new Map();
    sortable.forEach((innerArray) => {
        obj.set(innerArray[0], innerArray[1]);
    });

    let keys = []
    let values = []
    for (let [key, value] of obj.entries()) {
        keys.push(key)
        values.push(value)
    }

    let a;
    if (keys.length < 7) {
        let first = keys[0]; //35
        a = 7 - keys.length; //5
        let b = first - a; //30 //first = 35
        for (let index = b; index < first; index++) {
            weeklyProgressArr.push({
                correctAnswers: 0,
                attemptQuestions: 0,
                eachCategoryPrognos: null,
                weekWiseCorrected: 0,
                name: "V." + index
            });
        }
    }

    let correctAnswers = 0
    let attemptQuestions = 0
    let eachCategoryPrognos = null
    let calculationForTerminate = 0;

    sevenWeekWiseData &&
        keys.forEach((weekKey, index) => {
            const weekKeyName = "V." + weekKey;
            let weekWiseCorrected = 0;

            for (let iterations = index; iterations >= 0; iterations--) {
                let weekWiseData = values[iterations];

                if (iterations === index) {
                    for (const solvedQuiz of weekWiseData) {
                        weekWiseCorrected = weekWiseCorrected + solvedQuiz.correctAnswer;
                    }
                }

                weekWiseData = weekWiseData.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                for (
                    let indexQuizResolved = 0;
                    indexQuizResolved < weekWiseData.length;
                    indexQuizResolved++
                ) {
                    const solvedQuizOfWeek = weekWiseData[indexQuizResolved];

                    if (solvedQuizOfWeek.quiz.isTimeRestricted) {
                        calculationForTerminate += solvedQuizOfWeek.attemptedQuestion;
                        if (calculationForTerminate <= 60) {
                            correctAnswers += solvedQuizOfWeek.correctAnswer;
                            attemptQuestions += solvedQuizOfWeek.attemptedQuestion
                        } else {
                            let answers = solvedQuizOfWeek.answer
                            // answers = answers.reverse()
                            const loopterminater = 60 - attemptQuestions
                            let remainingCorrected = 0
                            for (let answersIndex = 0; answersIndex <= loopterminater; answersIndex++) {
                                const answer = answers[answersIndex];
                                remainingCorrected += answer.questionCounter
                            }
                            attemptQuestions = 60
                            correctAnswers = correctAnswers + remainingCorrected;
                            break;
                        }
                    }
                }
                if (calculationForTerminate > 60) {
                    break
                }
            }
            if (attemptQuestions >= 20) {
                if (!isDesplayProgress) {
                    setIsDesplayProgress(true);
                }
                let progress = (correctAnswers / attemptQuestions) * 100;

                eachCategoryPrognos = percentageCalculation(progress < 0 ? 0 : progress.toFixed(2), categoryname);
                weeklyProgressArr.push({
                    correctAnswers,
                    attemptQuestions,
                    eachCategoryPrognos,
                    weekWiseCorrected,
                    name: weekKeyName,
                });
            } else {
                weeklyProgressArr.push({
                    eachCategoryPrognos: null,
                    weekWiseCorrected,
                    correctAnswers: correctAnswers,
                    attemptQuestions: attemptQuestions,
                    name: weekKeyName,
                });
            }
            correctAnswers = 0
            attemptQuestions = 0
            eachCategoryPrognos = null
            calculationForTerminate = 0;
        });

    return weeklyProgressArr;
};

export const percentageCalculation = (prognos, categoryname) => {
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
