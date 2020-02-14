/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import App from './views/App';
import router from './router.js';
import store from './store.js';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

window.Vue = require('vue');

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

const app = new Vue({
    el: '#app',
    component: { App },
    router,
    store
});
