import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:2000",
  // baseURL: 'http://13.53.194.168:2000',
  // baseURL: 'http://13.48.132.192', //Production URL
  // baseURL: "http://13.51.198.134", //Beta URL
});

export const instance2 = axios.create({
  baseURL: "http://localhost:2000",
  // baseURL: 'http://13.53.194.168:2000',
  // baseURL: 'http://13.48.132.192', //Production URL
  // baseURL: "http://13.51.198.134", //Beta URL
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export const instance3 = axios.create({
  baseURL: "http://localhost:2000",
  // baseURL: 'http://13.53.194.168:2000',
  // baseURL: "http://13.51.198.134", //Beta URL
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
  ResultByUser: "/quizResult/resultByUser/",
  testDate: "/api/studentPrefenence/",
  getResult: "/api/quizResult/resultByUserAndQuizid/",
  testHistory: "/api/quizResult/getQuizBySecOruser/",
  storeQuiz: "/api/quiz",
  getAnswerByQuestionId: "admin/questionAnswer/getAnswerByQuestion/",
  lastWeekTasks: "/api/task/resultByUser/",
  submitAnswer: "/api/quizResult",
  oneDayResult: "/api/task/resultOfDayByUser/",
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
  getLastSevenWeeksData: "/api/task/sectionGraph/",
  getParagraphQuestionAnswer: "/api/quizResult/paragraphQuestionResult/",
};
