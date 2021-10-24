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
            console.log('init', state.isLogin)
            let userData = localStorage.getItem('access') ? (JSON.parse(localStorage.getItem('access'))) : '';
            if (userData.token && userData.user) {
                state.isLogin = true;
                state.user = userData.user;
            }
        },
        success(state, data) {
            localStorage.setItem('access', JSON.stringify(data));
            state.isLogin = true;
            state.user = data.user;
        },
        failed(state) {
            state.isLogin = false;
            state.user = null;
        },
        logout(state) {
            localStorage.removeItem('access');
            state.isLogin = false;
            state.user = null;
        }
    },
    getters: {
        getLoginState(state, getters) {
            console.log('islogin', state.isLogin)
            return state.isLogin
        },
    }
}
