import axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import CounterButton from './components/CounterButton.vue';
import BlogPost from './components/BlogPost.vue';
import CustomInput from './components/CustomInput.vue';
import AlertBox from './components/AlertBox.vue';
import router from './routes';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.component('button-counter', CounterButton);
Vue.component('blog-post', BlogPost);
Vue.component('custom-input', CustomInput);
Vue.component('alert-box', AlertBox);
Vue.component('cus-hello', {
  render(h) {
    return h('div', 'Hello components');
  },
});
Vue.component('cus-world', {
  render(h) {
    return h('div', 'world components');
  },
});
Vue.component('cus-vue', {
  render(h) {
    return h('div', 'vue components');
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
