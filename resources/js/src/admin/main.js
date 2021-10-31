import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
// import store from './store'
require('./bootstrap');

const app = createApp(App);
app.use(router);
app.mount('#root');
