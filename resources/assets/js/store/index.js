import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        persist: true,
        created: false,
        slug: "",
        mobName: "Mob Example",
        adminDisplay: false,
        adminLoader: false,
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
        tasks: [],
        notes: [],
        timer: {
            sessionLength: .05,
            paused: true,
            duration: {},
            interval:{},
            audio: new Audio('../../sounds/bell-ringing-05.mp3')
        }

    },
    actions,
    getters,
    mutations
})