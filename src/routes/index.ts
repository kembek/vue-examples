import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Basic from '@/pages/Basic.vue';
import TemplateSyntax from '@/pages/TemplateSyntax.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Basic,
  },
  {
    path: '/template',
    component: TemplateSyntax,
  },
];

export default new VueRouter({
  routes,
});
