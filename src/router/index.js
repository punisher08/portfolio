import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/DashboardPage'
import Porfolio from '../components/portfolio/IndexPage.vue'
import About from '../components/portfolio/AboutPage.vue'
import Contact from '../components/portfolio/ContactPage.vue'
const auth = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard, meta: { requiresAuth: false } 
  }

]
const guests = [
  {
    path: '/',
    name: 'Portfolio',
    component: Porfolio
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }

];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_API_URL),
  routes: [...guests, ...auth],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); 
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' }); 
  } else {
    next();
  }
});
export default router
