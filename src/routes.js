import {createRouter,createWebHistory} from 'vue-router';

import Home from './pages/home.vue';
import About from './pages/about.vue';


const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/about',
        name:'about',
        component:About
    }
];

const router=createRouter(
    {
        history:createWebHistory(process.env.BASE_URL),
        routes:routes
    }
);

export default router;