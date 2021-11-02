import { createRouter, createWebHashHistory } from 'vue-router'

const Login = () => import('./views/Login.vue');
const Base = () => import('./views/Base.vue');
const Users = () => import('./views/Users.vue');
const Chat = () => import('./views/Chat.vue');

let routes = [
    { path: '/login', component: Login },
    {
        path: '', component: Base, children: [
            { path: '', redirect: 'users' },
            { path: 'users', component: Users },
        ]
    },
    { path: '/chat/:id', component: Chat }
];

export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});
