import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem('token')

  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth)

  if (requiresAuth && !isLogin) {
    next('/login')
  } else {
    next()
  }
})

export default router
