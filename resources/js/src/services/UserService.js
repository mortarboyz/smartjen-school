import axios from 'axios'
import AuthService from './AuthService';

const API_BASE_URL = 'http://localhost:8000/api';
const API_USER = API_BASE_URL + '/users';
const API_USER_DETAIL = API_USER + '/:id';

let http = axios.create({
    headers: {
        'Authorization': 'Bearer ' + AuthService.getToken()
    }
});

class UserService {
    getAllTeacher() {
        return http.get(API_USER, {
            params: {
                role: 1
            }
        })
        .then((res) => {
            return res.data
        })
    }

    getAllStudent() {
        return http.get(API_USER, {
            params: {
                role: 2
            }
        })
        .then((res) => {
            return res.data
        })
    }

    getOne() {

    }

    post() {

    }

    update() {

    }

    delete(id) {
        return http.delete(API_USER_DETAIL.replace(':id', id))
        .then((res) => {
            return res.status;
        });
    }

    sendChat() {
        // TODO BACKEND
    }
}

export default new UserService();
