import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../components/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:jobId/",
    name: "Details",
    component: Details,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
