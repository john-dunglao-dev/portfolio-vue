import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/components/layouts/App.vue'
import axiosSetup from '@/plugins/axios'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axiosSetup)

app.mount('#app')
