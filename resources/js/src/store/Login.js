export default {
    namespaced: true,
    state: () => ({
        isLogin: false,
        user: null,
    }),
    actions: {

    },
    mutations: {
        init(state) {
            let userData = localStorage.getItem('access') ? (JSON.parse(localStorage.getItem('access'))) : '';
            if (userData.token && userData.user) {
                state.isLogin = true;
                state.user = userData.user;
            }
        },
        success(state, data) {
            localStorage.setItem('access', JSON.stringify(data));
            localStorage.setItem('token', data.token);
            state.isLogin = true;
            state.user = data.user;
        },
        failed(state) {
            state.isLogin = false;
            state.user = null;
        },
        logout(state) {
            localStorage.removeItem('access');
            localStorage.removeItem('token');
            state.isLogin = false;
            state.user = null;
        }
    },
    getters: {
        getLoginState(state, getters) {
            return state.isLogin
        },
    }
}
