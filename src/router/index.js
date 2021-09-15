import { createWebHistory, createRouter } from "vue-router";
import Post from "../components/Post.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";


const routes = [
  {
    path: "/post",
    component: Post,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;