export default {
    namespaced: true,
    state: () => ({
        isLogin: false,
        token: null,
        user: null,
    }),
    actions: {
        send({ commit }, data) {
            // TODO Add Service to send payload to api endpoint
            console.log('login', data)
        },
    },
    mutations: {
        success() {
            console.log('loginSuccess');
        },
        failed() {
            console.log('loginFailed');
        },
    },
    getters: {

    }
}
