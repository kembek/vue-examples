import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Basic from '@/pages/Basic.vue';
import TemplateSyntax from '@/pages/TemplateSyntax.vue';
import ComponentFuture from '@/pages/ComponentFuture.vue';
import Styles from '@/pages/Styles.vue';
import Conditional from '@/pages/Conditional.vue';
import Loop from '@/pages/Loop.vue';

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
  {
    path: '/componentFuture',
    component: ComponentFuture,
  },
  {
    path: '/styles',
    component: Styles,
  },
  {
    path: '/conditional',
    component: Conditional,
  },
  {
    path: '/loop',
    component: Loop,
  },
];

export default new VueRouter({
  routes,
});
