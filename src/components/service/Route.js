import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://192.168.0.106:2000',
});

export const instance2 = axios.create({
    baseURL: 'http://192.168.0.106:2000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },
});


export const EndPoints = {
    SignUp: '/auth/signup',
    Login: '/auth/login',
    getAllCategories: 'admin/sectionCategories',
    questionCategoryBysectionCategory: 'admin/QuestionCategory/questionCategoryBysectionCategory/',
}

