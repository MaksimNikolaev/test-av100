import { createRouter, createWebHashHistory } from 'vue-router'
import AuthForm from './views/AuthForm.vue'
import SettingsProfile from './views/SettingsProfile.vue'


const routes = [
  {
    path: '/',
    name: 'AuthForm',
    component: AuthForm
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsProfile,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
