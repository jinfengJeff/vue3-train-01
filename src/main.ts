import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./router/index.ts"
import 'element-plus/dist/index.css'


createApp(App).use(router).mount('#app')