import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Main from "./views/Main.vue";
import Liked from "./views/Liked.vue";
import Disliked from "./views/Disliked.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./utils/state";

const app = createApp(App);

const routes = [
  { path: "/", component: Main },
  { path: "/liked", component: Liked },
  { path: "/disliked", component: Disliked },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

app.use(router);
app.use(store);

app.mount("#app");
