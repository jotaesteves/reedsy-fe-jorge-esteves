import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home'
import TopBooks from '../components/TopBooks'
import Book from '../components/Book'

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
    },
    {
      path: '/top-books',
      component: TopBooks,
      name: 'TopBooks',
    },
    {
        path: '/book/:slug',
        component: Book,
        name: 'Book',
        props: true,
    },
];

const router = new VueRouter({
    routes: routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    mode: 'history'
  });

  
  Vue.use(VueRouter);
  
  export default router;