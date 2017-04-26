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
        tasks: {},
        notes: {},
    },
/*

Add a computed value of the active participant

Then the time can get that element and advance to the next



 */

    actions,
    getters,
    mutations
})