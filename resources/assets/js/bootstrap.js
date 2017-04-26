window._ = require('lodash');

window.$ = window.jQuery = require('jquery');


require('bootstrap-sass');

window.Vue = require('vue');

import Vuex from 'vuex';
Vue.use(Vuex);

window.axios = require('axios');
window.moment = require('moment');
moment().format();

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
