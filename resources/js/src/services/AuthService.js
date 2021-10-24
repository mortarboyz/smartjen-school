import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api/';
const API_ADMIN_LOGIN = API_BASE_URL + 'admin/login';
const API_ADMIN_REGISTER = API_BASE_URL + 'admin/register';

class AuthService {
    login(data) {
        return axios.post(API_ADMIN_LOGIN, data)
            .then(res => {
                if(res.data.token) localStorage.setItem('user', JSON.stringify(res.data))
                return res.data
            })
    }

    register(data) {
        return axios.post(API_ADMIN_REGISTER, data)
            .then(res => {
                return res.data
            })
    }

    getToken() {
        let user = JSON.parse(localStorage.getItem('access'));
        return user.token || null;
    }
}

export default new AuthService();
