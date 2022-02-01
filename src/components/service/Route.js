import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://192.168.10.7:3000/student/auth',
});


export const EndPoints = {
    SignUp:'/signup',
    Login:'/login'
}

