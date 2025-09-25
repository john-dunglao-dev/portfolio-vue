import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from '@/router'
import axiosSetup from '@/plugins/axios'
import App from '@/components/layouts/App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axiosSetup)

app.mount('#app')
