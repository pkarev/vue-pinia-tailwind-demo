import { createRouter, createWebHistory } from "vue-router";

import TodoList from "../views/TodoList.vue";
import BacklogList from "../views/BacklogList.vue";

export const paths = {
  main: "/",
  backlog: "/backlog",
}

const routes = [
  { path: paths.main, component: TodoList },
  { path: paths.backlog, component: BacklogList },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
