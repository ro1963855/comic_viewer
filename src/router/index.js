import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Reader from '@/components/Reader';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/page',
      name: 'Reader',
      component: Reader,
    },
  ],
});
