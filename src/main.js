import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const router = createRouter({
  history: createWebHistory(),   // History mode
  //history: createWebHashHistory(),   // Hash mode
  routes
})

const app = createApp(App)

app.use(router)

app.use(Quasar, quasarUserOptions)

app.mount('#app')
