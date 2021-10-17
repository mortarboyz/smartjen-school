import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Vuelidate)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#696969',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
    icons: {
        iconfont: 'mdiSvg',
    },
})
