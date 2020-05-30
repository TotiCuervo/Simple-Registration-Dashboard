/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import  {store} from './store'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Datepicker from 'vuejs-datepicker';
Vue.use(Datepicker);

import VueTailwind from 'vue-tailwind'
Vue.use(VueTailwind)

import ReservationDashboard from './components/reservations/ReservationDashboard.vue'
import NewReservation from "./components/reservations/NewReservation";

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: ReservationDashboard
        },
        {
            path: '/reservation/new',
            name: 'newReservation',
            component: NewReservation,
            beforeEnter:(to, from, next) => {
                store.commit('reservation/CLEAR_FORM');
                store.commit('reservation/CLEAR_FORM_PAGE_CONTROL');
                next()
            }
        },
        { path: '*', redirect: '/' }
    ]
});

const app = new Vue({
    el: '#app',
    router,
    store
});
