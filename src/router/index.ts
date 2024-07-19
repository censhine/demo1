import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store/modules/user'

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { key: 'home' },
  },
  {
    path: '/about',
    name: 'About',
    meta: { key: 'about' },
    children: [
        {
            name: 'about-us',
            path: '/about/us',
            component: () => import('@/views/About/us.vue'),
            meta: {
                key: 'about-us'
            }
        },
        {
            name: 'about-me',
            path: '/about/me',
            component: () => import('@/views/About/me.vue'),
            meta: {
                key: 'about-me'
            }
        },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
  }
  // 其他路由...
];

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes,
})



router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const userMenuKeys = userStore.menuKeys

  if(to.name != 'login') {
    if(to.name == 'home') {
      if(!userMenuKeys) {
        next({to: '/login'})
        return
      }
      next()
      return
    }
    next()
    return
  }

  // const hasAccess = (route: RouteRecordRaw) => {
  //   return userMenuKeys.includes(route.meta?.key as string)
  // };

  // const accessibleRoutes = staticRoutes.filter(hasAccess)

  // if (!accessibleRoutes.length) {
  //   next({ to: '/403', replace: true }); // 确保路由更新后导航到目标路由
  //   return
  // } 

  next()
});

export default router
