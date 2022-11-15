import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Main from './Main.vue'
import Liked from './Liked.vue'
import Disliked from './Disliked.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import axios from 'axios'


const routes = [
  { path: '/', component: Main },
  { path: '/liked', component: Liked },
  { path: '/disliked', component: Disliked }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const getNewCats = async () => {
  const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
  return response.data
}

const store = createStore({
  state() {
    return {
      liked: [],
      disliked: [],
      allCats: [],
      currentCat: {},
      index: 0
    } as any
  },
  mutations: {
    addLiked(state, payload) {
      state.liked.push(payload)
    },
    addDisliked(state, payload) {
      state.disliked.push(payload)
    },
    setCats(state) {
      state.allCats = getNewCats().then((data) => {
        state.allCats = data.map((cat: any) => {
          return {
            id: cat.id,
            url: cat.url,
            width: cat.width,
            height: cat.height,
          }
        })
        state.currentCat = state.allCats[state.index]
      })

    },
    nextCat(state) {
      state.index++
      if (state.index >= state.allCats.length) {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(res => {
          state.allCats = res.data
          state.currentCat = res.data[state.index]
        })
      }
      state.currentCat = state.allCats[state.index]
    },
  }
})

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
