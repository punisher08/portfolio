import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/DashboardPage'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/LoginPage.vue'
import Porfolio from '../components/portfolio/IndexPage.vue'
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
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },

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
