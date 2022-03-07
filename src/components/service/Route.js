import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://192.168.10.5:2000',
});

export const instance2 = axios.create({
    baseURL: 'http://192.168.10.5:2000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },
});


export const EndPoints = {
    SignUp: '/auth/signup',
    Login: '/auth/login',
    getAllCategories: 'admin/sectionCategories',
    questionCategoryBysectionCategory: 'admin/QuestionCategory/questionCategoryBysectionCategory/',
    ResultByUser:'quizResult/resultByUser/',
    testDate:'/api/studentPrefenence',
    getResult:'/api/quizResult/resultByUserAndQuizid'
}

