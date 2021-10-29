import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import('./views/Login.vue');
const Register = () => import('./views/Register.vue');
const Base = () => import('./views/Base.vue');

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        // {
        //     path: '',
        //     component: Base
        // }
    ]
})
