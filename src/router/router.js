import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue';
import home from '../views/Home.vue';
import notFound from '../views/components/not-found.vue';
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
            meta: {
                login_auth: false
            }
        },
        {
            path: '*',
            name: 'notFound',
            component: notFound,
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            redirect: '/index',
            meta:{
                login_auth: true
            },
            children: [
                {path: '/index', name: 'index',meta:{login_auth: true}, component: () => import('../views/page/index.vue'),props: true}, 
                {path: '/userList', name: 'userList',meta:{login_auth: true}, component: () => import('../views/page/user-list.vue'), props: true},
                {path: '/shopList', name: 'shopList',meta:{login_auth: true}, component: () => import('../views/page/shop-list.vue'), props: true},
                {path: '/foodList', name: 'foodList',meta:{login_auth: true}, component: () => import('../views/page/food-list.vue'), props: true},
                {path: '/orderList', name: 'orderList',meta:{login_auth: true}, component: () => import('../views/page/order-list.vue'), props: true},
                {path: '/addGood', name: 'addGood',meta:{login_auth: true}, component: () => import('../views/page/add-good.vue'), props: true},
                {path: '/addShop', name: 'addShop',meta:{login_auth: true}, component: () => import('../views/page/add-shop.vue'), props: true},
                {path: '/userDist', name: 'userDist',meta:{login_auth: true}, component: () => import('../views/page/user-dist.vue'), props: true},
                {path: '/userDetail', name: 'userDetail',meta:{login_auth: true}, component: () => import('../views/page/user-detail.vue'), props: true},
            ]
        }
    ]
});
router.beforeEach((to, from, next) => {
    console.log(to)
    // 判断该路由是否需要登录权限
    if (to.meta.login_auth) {
      if(!sessionStorage.getItem('uname')){
        if(to.uname != 'login') {
          next('/');
        }else{
          next();
        }
        return;
      }
    }
    next();
  });
  export default router;