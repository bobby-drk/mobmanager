import store from './store'

require('./bootstrap');

Vue.component('mob-board', require('./components/MobBoard.vue'));
Vue.component('front-panel', require('./components/FrontPanel.vue'));
Vue.component('admin-panel', require('./components/AdminPanel.vue'));
Vue.component('count-down', require('./components/CountDown.vue'));
Vue.component('participants', require('./components/Participants.vue'));

const app = new Vue({
    store,
    el: '#app'
});
