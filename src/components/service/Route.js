import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://192.168.0.103:3000/student/auth',
});


export const EndPoints = {
    SignUp:'/signup'
}

