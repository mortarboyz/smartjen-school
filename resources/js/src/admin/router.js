import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const Login = () => import('./views/Login.vue');
const Register = () => import('./views/Register.vue');
const Base = () => import('./views/Base.vue');
const Users = () => import('./views/Users.vue');

let routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '', component: Base, children: [
            { path: '', redirect: 'users' },
            { path: 'users', component: Users }
        ]
    },

];

export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});
