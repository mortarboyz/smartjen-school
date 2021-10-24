import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api';
const API_ROLE = API_BASE_URL + '/roles'
const API_USER = API_BASE_URL + '/users';
const API_USER_DETAIL = API_USER + '/:id';
const API_INVITE = API_BASE_URL + '/admin/invite';

class UserService {
    getAllRoles() {
        return axios.get(API_ROLE)
            .then(res => res.data);
    }

    getAllTeacher() {
        return axios.get(API_USER, {
            params: {
                role: 1
            },
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((res) => {
                return res.data
            })
    }

    getAllStudent() {
        return axios.get(API_USER, {
            params: {
                role: 2
            },
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((res) => {
                return res.data
            })
    }

    getOne() {

    }

    addUser(data) {
        return axios.post(API_USER, data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(r => r)
    }

    update() {

    }

    delete(id) {
        return axios.delete(API_USER_DETAIL.replace(':id', id), {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((res) => {
                return res.status;
            });
    }

    sendInvite(data) {
        return axios.post(API_INVITE, data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(r => r)
    }

    sendChat() {
        // TODO BACKEND
    }
}

export default new UserService();
