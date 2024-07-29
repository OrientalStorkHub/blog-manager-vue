import Vue from 'vue'
import Login from '../views/Login.vue'
import VueRouter from 'vue-router';
import { Loading } from 'element-ui';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: '登录' }
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('../views/Forget.vue'),
    meta: { title: '重置密码' }
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue'),
    meta: { title: '注册' }
  },
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        name: 'index',
        path: '/index',
        component: () => import('../views/index/Index.vue'),
        meta: { title: '首页' },
      },
      {
        name: 'user',
        path: '/user/list',
        component: () => import('../views/user/UserList.vue'),
        meta: { title: '用户列表' },
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'blog';
  next();
});

export default router
