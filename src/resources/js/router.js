import Vue from 'vue'
import VueRouter from 'vue-router'

import Example from './views/Example.vue';
import Home from './views/Home.vue';

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        redirect: '/home' 
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'example',
        path: '/example',
        component: Example,
        props: {
            id: 0
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

export default router;
