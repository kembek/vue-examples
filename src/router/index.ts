import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../pages/Home.vue';
import ROUTE from './paths';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: ROUTE.home,
    name: 'Home',
    component: Home,
  },
  {
    path: ROUTE.posts,
    name: 'Posts',
    component: () => import('../pages/Posts.vue'),
  },
  {
    path: ROUTE.contact,
    name: 'Contact',
    component: () => import('../pages/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
