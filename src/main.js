import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.interceptors.request.use((config) => {
    config.baseURL = 'http://127.0.0.1:8000',
    config.withCredentials = true

    return config
})

createApp(App).use(router).mount('#app')
