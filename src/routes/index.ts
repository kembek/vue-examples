import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Basic from '@/pages/Basic.vue';
import TemplateSyntax from '@/pages/TemplateSyntax.vue';
import ComponentFuture from '@/pages/ComponentFuture.vue';
import Styles from '@/pages/Styles.vue';
import Conditional from '@/pages/Conditional.vue';
import Loop from '@/pages/Loop.vue';
import CustomComponent from '@/pages/CustomComponent.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    name: 'Basic',
    path: '/',
    component: Basic,
  },
  {
    name: 'Template Syntax',
    path: '/template',
    component: TemplateSyntax,
  },
  {
    name: 'Component Future',
    path: '/componentFuture',
    component: ComponentFuture,
  },
  {
    name: 'Styles',
    path: '/styles',
    component: Styles,
  },
  {
    name: 'Conditional',
    path: '/conditional',
    component: Conditional,
  },
  {
    name: 'Loop',
    path: '/loop',
    component: Loop,
  },
  {
    name: 'Custom Component',
    path: '/component',
    component: CustomComponent,
  },
  { redirect: '/', path: '*' },
];

export default new VueRouter({
  routes,
  mode: 'history',
});
