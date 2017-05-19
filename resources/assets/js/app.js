require('./bootstrap');
import store from './store'
import inputs from './components/inputs'

Vue.component('mob-board', require('./components/MobBoard'));
Vue.component('front-panel', require('./components/FrontPanel'));
Vue.component('admin-panel', require('./components/AdminPanel'));
Vue.component('mob-timer', require('./components/Timer'));
Vue.component('mob-notes', require('./components/Notes'));
Vue.component('mob-tasks', require('./components/Tasks'));
Vue.component('participants', require('./components/Participants'));
Vue.component('mob-monitor', require('./components/Monitor'));

const app = new Vue({
    store,
    el: '#app'
});
