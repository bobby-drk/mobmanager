import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        adminDisplay: false,
        participants: [
            {
                name: 'Charlie',
                contributor: true,
                active: false
            },
            {
                name: 'Bruce Wayne',
                contributor: true,
                active: true
            },
            {
                name: 'Clark Kent',
                contributor: false,
                active: false
            }
        ],
        sessionLength: 1,
        tasks: [
            {
                title: 'Get a hair cut',
                completed: true,
                severity: 2
            },
            {
                title: 'Get a real job',
                completed: false,
                severity: 4
            }
        ],
        notes: [],
    },
    actions,
    getters,
    mutations
})