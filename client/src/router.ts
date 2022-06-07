import { createRouter, createWebHistory } from 'vue-router';
import Clients from './pages/Clients.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/clients' },
    { path: '/clients', component: Clients },
    // {path:'/projects', component:Projects}
    { path: '/:pathMatch(.*)*', redirect: '/clients' },
  ],
});

export default router;
