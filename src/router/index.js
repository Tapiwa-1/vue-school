import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/admin/DashboardView.vue';
import Login from '../views/auth/LoginView.vue';
import Register from '../views/auth/RegisterView.vue';
import ForgetPassword from '../views/auth/ForgetPasswordView.vue';
import ResetPassword from '../views/auth/ResetPasswordView.vue';
import NotFound from '../views/404/NotFoundView.vue'
import { useAuthStore } from "../stores/auth-store";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component : Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },  
         {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/forget-password',
            name: 'ForgetPassword',
            component: ForgetPassword
        },
        {
            path:'/reset-password/:token',
            name:'ResetPassword',
            component: ResetPassword,
        },
        {
            path:'/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound,
        }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
  if(to.meta.requiresAuth && !authStore.token){
    next({name: 'Login'})
  }else next()
})
export default router;