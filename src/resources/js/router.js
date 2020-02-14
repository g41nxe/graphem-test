import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateTeam from './views/CreateTeam.vue';
import Teams from './views/Teams.vue';
import HeroForm from './views/HeroForm.vue';

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        redirect: '/home' 
    },
    {
        name: 'myheroes',
        path: '/myheroes',
        component: Teams
    },
    {
        name: 'createhero',
        path: '/myheroes/createhero',
        component: HeroForm
    },
    {
        name: 'createteam',
        path: '/myheroes/createteam',
        component: CreateTeam
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

export default router;
