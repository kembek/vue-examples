import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import First from '@/pages/First.vue';
import Second from '@/pages/Second.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: First,
  },
  {
    path: '/template',
    component: Second,
  },
];

export default new VueRouter({
  routes,
});
