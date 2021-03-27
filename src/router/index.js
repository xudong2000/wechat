import Vue from 'vue'
import VueRouter from 'vue-router'
import { getUser } from '../utils/storage'

const Login = () => import('../views/login/Login.vue')
const Home = () => import('../views/home/Home.vue')
const Friends = () => import('../views/friends/Friends.vue')
const More = () => import('../views/more/More.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Chat = () => import('../views/chat/Chat.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/friends',
    component: Friends,
  },
  {
    path: '/more',
    component: More,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/chat:userid',
    component: Chat,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = getUser()
  if (token === null) return next('/login')
  next()
})

export default router
