import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:2000",
  // baseURL: 'http://13.53.194.168:2000',
});

export const instance2 = axios.create({
  baseURL: "http://localhost:2000",
  // baseURL: 'http://13.53.194.168:2000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export const EndPoints = {
  SignUp: "/auth/signup",
  Login: "/auth/login",
  getAllCategories: "admin/sectionCategories",
  questionCategoryBysectionCategory:
    "/admin/QuestionCategory/questionCategoryBysectionCategory/",
  ResultByUser: "/quizResult/resultByUser/",
  testDate: "/api/studentPrefenence",
  getResult: "/api/quizResult/resultByUserAndQuizid/",
  testHistory: "/api/quizResult/getQuizBySecOruser/",
  storeQuiz: "/api/quiz",
  getAnswerByQuestionId: "admin/questionAnswer/getAnswerByQuestion/",
  lastWeekTasks: "/api/task/resultByUser/",
  submitAnswer: "/api/quizResult",
  oneDayResult: "/api/task/resultOfDayByUser/",
  oneDayExercise: "/api/task/taskByUser/",
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
  testSummaryByHistoryPage: '/api/simuleraQuizResult/resultSummary/',
  getQuizOnRefreshPage: '/api/quizResult/refreshBySecOruser/'
};
