import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useAuth0 } from '@auth0/auth0-vue'
import { unref, watchEffect } from 'vue'

const HomeView = () => import('../views/HomeView.vue')

// helper to wait for auth to initialize before checking if user is logged in
const isAuthenticated = async (): Promise<boolean> => {
  const auth0 = useAuth0()
  const isLoading = auth0.isLoading
  const isAuthenticated = auth0.isAuthenticated
  if (!unref(isLoading)) {
    return unref(isAuthenticated)
  }
  // if we are loading - wait for it to finish
  return new Promise((resolve) => {
    const stopWatch = watchEffect(() => {
      if (!unref(isLoading)) {
        stopWatch()
        resolve(unref(isAuthenticated))
      }
    })
  })
}

// couldve used auth0 authguard - but want our own login page with a button
const authGuard = async () => {
  // used to wait for auth to load
  const allowed = await isAuthenticated()
  if (allowed) {
    return true
  }
  return { path: '/login' }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: authGuard
    },
    {
      path: '/login',
      name: 'login',
      // redirect to home if already logged in
      beforeEnter: async () => {
        const allowed = await isAuthenticated()
        if (allowed) {
          return { path: '/' }
        }
        return true
      },
      component: LoginView
    }
  ]
})

export default router
