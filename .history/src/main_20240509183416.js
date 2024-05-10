import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 自定义样式
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
