import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://16.170.168.227:2000',
});

export const instance2 = axios.create({
    baseURL: 'http://16.170.168.227:2000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },
});


export const EndPoints = {
    SignUp: '/auth/signup',
    Login: '/auth/login',
    getAllCategories: 'admin/sectionCategories',
    questionCategoryBysectionCategory: 'admin/QuestionCategory/questionCategoryBysectionCategory/',
    testDate:'/api/studentPrefenence',
    getResult:'/api/quizResult/resultByUserAndQuizid/',
    storeQuiz: '/api/quiz',
    getAnswerByQuestionId: 'admin/questionAnswer/getAnswerByQuestion/',
    testHistory:'/api/quizResult/getQuizBySecOruser',
    submitAnswer: '/api/quizResult'
}


