import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'

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
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
