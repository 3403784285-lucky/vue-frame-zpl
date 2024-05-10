import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 自定义样式
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'
// 混入 -- 抽取公用的实例（操作成功与失败消息提醒内容等）
import mixin from '@/utils/mixin'
// 全局过滤器
import { filters } from '@/utils/filters.js'
import stores from '@/stores'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPersistedState } from 'pinia-plugin-persistedstate'
const app = createApp(App)
app.config.globalProperties.$stores = stores
app.use(ElementPlus)
// 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const pinia = createPinia()
app.use(pinia)
// 持久化存储
pinia.use(
  createPersistedState({
    auto: true // 启用所有 Store 默认持久化
  })
)
app.use(router)
app.config.globalProperties.$filters = filters
app.mixin(mixin)

app.mount('#app')
