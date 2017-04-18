
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('mob-board', require('./components/MobBoard.vue'));
Vue.component('front-panel', require('./components/FrontPanel.vue'));
Vue.component('admin-panel', require('./components/AdminPanel.vue'));
Vue.component('count-down', require('./components/CountDown.vue'));

const app = new Vue({
    el: '#app'
});
