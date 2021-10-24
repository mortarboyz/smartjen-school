import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

const Index = () => import('../views/Index.vue')
const Root = () => import('../views/__Root.vue')
const Base = () => import('../views/_Base.vue')
const Auth = () => import('../views/Auth.vue')
const Register = () => import('../views/admin/Register.vue')
const Users = () => import('../views/admin/Users.vue')

//#region Func

/**
 * Guard Route and Redirect if fail.
 * @param {string} module
 */
function guardRoute(to, from, next) {
    let auth = store.getters['auth/login/getLoginState'];
    if (to.fullPath === '/admin/users') {
        if (!auth) {
            next('/admin/login');
        }
    }
    if (to.fullPath === '/admin/login') {
        if (auth) {
            next('/admin/users');
        }
    }
    next();
}
//#endregion

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
                    component: Auth,
                    beforeEnter: guardRoute
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
                            component: Users,
                            beforeEnter: guardRoute
                        },
                        {
                            path: '',
                            redirect: 'users'
                        },
                    ],
                },
                { path: "*", redirect: 'users' }
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
