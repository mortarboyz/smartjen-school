import { concat, merge } from "lodash";
import UserService from "../services/UserService"

export default {
    namespaced: true,
    state: () => ({
        teachers: [],
        students: [],
        roles: [],
    }),
    actions: {
        getTeacherData({ commit }) {
            UserService.getAllTeacher().then((res) => {
                commit('setTeacher', res.data)
            }).catch(x => {
                commit('setTeacher', []);
            });
        },
        getStudentData({ commit }) {
            UserService.getAllStudent().then((res) => {
                commit('setStudent', res.data)
            }).catch(x => {
                commit('setStudent', []);
            });
        },
        getRolesData({ commit }) {
            UserService.getAllRoles().then((res) => {
                commit('setRoles', res.data)
            }).catch(x => {
                commit('setRoles', []);
            });
        },
        invite({commit, dispatch}, data) {
            UserService.sendInvite(data).then(() => {
                dispatch('getTeacherData');
                dispatch('getStudentData');
            });
        },
        addUser({ commit, dispatch }, data) {
            UserService.addUser(data).then(() => {
                dispatch('getTeacherData');
                dispatch('getStudentData');
            });
        },
        deleteUser({ commit, dispatch }, id) {
            UserService.delete(id).then(() => {
                dispatch('getTeacherData');
                dispatch('getStudentData');
            });
        }
    },
    mutations: {
        setTeacher(state, data) {
            state.teachers = data;
        },
        setStudent(state, data) {
            state.students = data;
        },
        setRoles(state, data) {
            state.roles = data;
        }
    },
    getters: {
        getTeacher(state) {
            return state.teachers;
        },
        getStudent(state) {
            return state.students;
        },
        getRoles(state) {
            return state.roles.map(r => {
                return {
                    text: r.name,
                    value: r.id,
                }
            });
        },
        getOneUser: (state, getters) => (id) => {
            let result = merge(getters.getTeacher, getters.getStudent).find(t => t.id == id);
            return result;
        }
    }
}
