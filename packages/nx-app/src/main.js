import { createApp } from 'vue'
import App from './App.vue'
import NX from 'nx-ui'
import 'nx-ui/lib/nx-ui.css';

createApp(App)
    .use(NX)
    .mount('#app')