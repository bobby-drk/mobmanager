
window._ = require('lodash');
require('bulma');
window.Vue = require('vue');

window.axios = require('axios');
window.moment = require('moment');
moment().format();

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
