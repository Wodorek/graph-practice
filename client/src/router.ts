import { createRouter, createWebHistory } from 'vue-router';
import Project from './pages/Project.vue';
import Home from './pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/projects/:id', component: Project },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
});

export default router;
