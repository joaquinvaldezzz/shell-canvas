import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: AboutUs,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
