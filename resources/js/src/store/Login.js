import axios from 'axios';
import authService from '../services/AuthService';

const initialState = {
    isLogin: false,
    token: null,
    user: null,
}

export default {
    state: initialState,
    actions: {
        login(user) {
            return authService.login(user).then(res => {
                console.log('loginAction', res);
            })
        },
        register(user) {
            return authService.register(user).then(res => {
                console.log('registerAction', res);
            });
        }
    },
    mutations: {
        loginSuccess() {

        },
        loginFailed() {

        },
        registerSuccess() {
            this.state = initialState;
        },
        registerFailed() {
            this.state = initialState;
        }
    },
    getters: {

    }
}
