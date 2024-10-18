// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import UpInComponens from './UpInComponens.vue';
import GoingToSleepIn from './GoingToSleepIn.vue';



const routes = [

    { path: '/', component: Home },         // Главная страница
    { path: '/UpInCom', component: UpInComponens },
    { path: '/Goin', component: GoingToSleepIn }

];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
