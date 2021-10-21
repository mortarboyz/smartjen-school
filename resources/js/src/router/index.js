import Vue from 'vue';
import VueRouter from 'vue-router';

const Index = () => import('../views/Index.vue')
const Root = () => import('../views/__Root.vue')
const Base = () => import('../views/_Base.vue')
const Auth = () => import('../views/Auth.vue')
const Register = () => import('../views/admin/Register.vue')
const Users = () => import('../views/admin/Users.vue')

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/admin',
            component: Root,
            children: [
                {
                    path: 'login',
                    component: Auth
                },
                {
                    path: 'register',
                    component: Register,
                },
                {
                    path: '',
                    component: Base,
                    props: {
                        title: "Admin Dashboard"
                    },
                    children: [
                        {
                            path: 'users',
                            component: Users
                        }
                    ]
                }
            ]
        },
        {
            path: '/teacher',
            component: Root,
            children: [
                {
                    path: 'login',
                    component: Auth
                },
                {
                    path: '',
                    component: Base,
                    props: {
                        title: "Teacher Dashboard"
                    }
                }
            ]
        },
        {
            path: '/student',
            component: Root,
            children: [
                {
                    path: 'login',
                    component: Auth
                },
                {
                    path: '',
                    component: Base,
                    props: {
                        title: "Student Dashboard"
                    }
                }
            ]
        }
    ]
})
