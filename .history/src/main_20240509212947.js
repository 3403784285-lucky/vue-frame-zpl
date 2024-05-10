import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 自定义样式
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'
// 混入 -- 抽取公用的实例（操作成功与失败消息提醒内容等）
import mixin from '@/utils/mixin'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mixin(mixin)

app.mount('#app')
