import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue';
import home from '../views/Home.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            redirect: '/index',
            children: [
                {path: '/index', name: 'index', component: () => import('../views/page/index.vue'),props: true}, 
                {path: '/userList', name: 'userList', component: () => import('../views/page/user-list.vue'), props: true},
                {path: '/shopList', name: 'shopList', component: () => import('../views/page/shop-list.vue'), props: true},
                {path: '/foodList', name: 'foodList', component: () => import('../views/page/food-list.vue'), props: true},
                {path: '/orderList', name: 'orderList', component: () => import('../views/page/order-list.vue'), props: true},
                {path: '/addGood', name: 'addGood', component: () => import('../views/page/add-good.vue'), props: true},
                {path: '/addShop', name: 'addShop', component: () => import('../views/page/add-shop.vue'), props: true},
                {path: '/userDist', name: 'userDist', component: () => import('../views/page/user-dist.vue'), props: true},
                {path: '/userDetail', name: 'userDetail', component: () => import('../views/page/user-detail.vue'), props: true},
            ]
        }
    ]
});
