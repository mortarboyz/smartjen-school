import UserService from "../services/UserService"

export default {
    namespaced: true,
    state: () => ({
        teachers: [],
        students: [],
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
        deleteUser({ commit, dispatch }, id) {
            UserService.delete(id).then((res) => {
                dispatch('getTeacherData');
                dispatch('getStudentData');
            })
        }
    },
    mutations: {
        setTeacher(state, data) {
            state.teachers = data;
        },
        setStudent(state, data) {
            state.students = data;
        }
    },
    getters: {
        getTeacher(state) {
            return state.teachers;
        },
        getStudent(state) {
            return state.students;
        }
    }
}
