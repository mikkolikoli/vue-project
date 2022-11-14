import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Liked from './Liked.vue'
import Disliked from './Disliked.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', component: App },
  { path: '/liked', component: Liked },
  { path: '/disliked', component: Disliked }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp({})
app.use(router)

app.mount('#app')
