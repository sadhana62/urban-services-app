import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';
import Login from '@/views/UserLogin.vue';
import Register from '@/views/UserRegister.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';
import CustomerDashboard from '@/views/CustomerDashboard.vue';
import ProfessionalDashboard from '@/views/ProfessionalDashboard.vue';

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/admin', name: 'AdminDashboard', component: AdminDashboard },
    { path: '/customer', name: 'CustomerDashboard', component: CustomerDashboard },
    { path: '/professional', name: 'ProfessionalDashboard', component: ProfessionalDashboard }
  ],
});

// Export the router instance
export default router;
