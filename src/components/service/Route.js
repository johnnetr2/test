import axios from "axios";

require("dotenv").config();

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const instance2 = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export const instance3 = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

instance3.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export const EndPoints = {
  SignUp: "/auth/signup",
  Login: "/auth/login",
  getAllCategories: "admin/sectionCategories",
  questionCategoryBysectionCategory:
    "/admin/QuestionCategory/questionCategoryBysectionCategory/",
  testDate: "/api/studentPrefenence/",
  getResult: "/api/quizResult/resultByUserAndQuizid/",
  testHistory: "/api/quizResult/getQuizBySecOruser/",
  storeQuiz: "/api/quiz",
  getAnswerByQuestionId: "admin/questionAnswer/getAnswerByQuestion/",
  lastWeekTasks: "/api/task/resultByUser/",
  submitAnswer: "/api/quizResult",
  oneDayResult: "/api/task/resultOfDayByUser/",
  allCategoriesResultByUserForHomeGraph: "/api/task/solvedQuizbyUserPerCategory/",
  resultBySectionCategory: "/api/task/resultOfDayBySecOrUser/",
  oneDayExercise: "/api/task/taskBySecOrUser/",
  getAllSections: "/admin/sectionCategories",
  deleteAccount: "/admin/student/",
  getStudentScore: "/api/quizResult/getStudentScore",
  getQuizResult: "/api/quiz/",
  changePassword: "/auth/changePassword/",
  feedbackSubmit: "/api/feedBack",
  resetPassword: "/api/resetPasword",
  getPreviousExams: "/api/simuleraSeasion",
  getStudentPreference: "/api/studentPrefenence/byUser/",
  getSimuleraQuiz: "/api/simuleraQuiz/quiz/",
  getQuizzesBySeason: "/api/simuleraQuiz/quizBySeason",
  submitSimuleraTest: "/api/simuleraQuizResult",
  getSimuleraQuizByUser: "/api/simuleraQuizResult/quizByUser/",
  getSimuleraQuizResult: "/api/simuleraQuizResult/",
  questionRating: "/api/questionRating",
  getUserHistory: "/api/simuleraQuizResult/testSummaryByUser/",
  testSummary: "/api/simuleraQuizResult/resultSummarybyPE/",
  updatePreviousExam: "/api/simuleraSeasonResult/seasonResult",
  simuleraQuizHistory: "/api/simuleraQuizResult/HistoryOfUser/",
  studentPerviousProgress: "/api/tableHistory/getProgress/",
  createNewResultForSeason: "/api/simuleraSeasonResult",
  testSummaryByHistoryPage: "/api/simuleraQuizResult/resultSummary/",
  getQuizOnRefreshPage: "/api/quizResult/refreshBySecOruser/",
  submitMultiquestionParagragh: "/api/quizResult/multipleQuizResult",
  getParagraphResult: "/api/quizResult/paragraphQuestionResult/",
  getLastSevenWeeksData: "/api/task/sectionGraph/",
  OverAllNormeringValue: "/api/tableHistory/ProgressOfHundred/",
  getParagraphQuestionAnswer: "/api/quizResult/paragraphQuestionResult/",
  emailVerified: "/auth/verify/",
  createOrder: "/api/payments/createOrder",
  getOrder: "/api/payments/order/",
};
