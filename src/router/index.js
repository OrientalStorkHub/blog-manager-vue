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
  const token = localStorage.getItem('token');
  const isPublic = to.name === 'login' || to.name === 'regist' || to.name === 'forget';

  if (isPublic) {
    // 如果是公共页面（登录、注册、忘记密码），则直接继续导航
    next();
  } else {
    // 如果是需要认证的页面
    if (!token) {
      // 如果没有 token，跳转到登录页
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将目标路径作为查询参数传递，以便登录后重定向
      });
    } else {
      // 如果有 token，继续导航
      next();
    }
  }
});

export default router
