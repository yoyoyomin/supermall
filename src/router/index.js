import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home.vue')
const Class = () => import('views/class/class.vue')
const Cart = () => import('views/cart/cart.vue')
const User = () => import('views/user/user.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/class',
    name: 'Class',
    component: Class
    
  },
  {
    path:'/cart',
    name:'Cart',
    component: Cart

  },
  {
    path:'/user',
    name:'User',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
