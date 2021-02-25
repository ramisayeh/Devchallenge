import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from '../views/About.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
},
{
  path: '/dashboard',
  name: 'Dashboard',
  component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
      meta: {
        authRequired: true,
      },
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes : routes
});
// const app = new Vue({
//   router
// }).$mount('#app')

export default router;
