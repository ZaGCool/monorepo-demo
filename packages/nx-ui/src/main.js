import { createApp } from 'vue'
import App from './App.vue'
import NX from '../lib/nx-ui.umd'
import "../lib/nx-ui.css";

createApp(App)
    .use(NX)
    .mount('#app')