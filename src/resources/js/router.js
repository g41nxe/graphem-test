import Vue from 'vue'
import VueRouter from 'vue-router'

import Example from './views/Example.vue';
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
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

export default router;
