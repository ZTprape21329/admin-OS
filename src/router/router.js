import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue';
import home from '../views/Home.vue';
Vue.use(Router)

export const loginRoute = {
  path: '/login',
  name: 'login',
  component: Login
}
export const MainRoute = {
  path:'/home',
  name:'home',
  component: home
}
export default new Router({
  routes: [
    loginRoute,
    MainRoute
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Login
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import( '../views/Login.vue')
    // }
  ]
})
