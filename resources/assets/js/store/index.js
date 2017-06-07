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
        mobName: "",
        adminDisplay: false,
        adminLoader: false,
        participants: [],
        tasks: [
            {
                title: "severity 1, time 1",
                severity: 1,
                completed: false,
                creation_date: "20170105195347",
                key: "049fb102-d201-450d-aa2c-8045dff20501"

            },
            {
                title: "severity 3, time 2",
                severity: 3,
                completed: false,
                creation_date: "20170205195347",
                key: "049fb102-d201-450d-aa2c-8045dff20503"
            },
            {
                title: "severity 2, time 3",
                severity: 2,
                completed: false,
                creation_date: "20170305195347",
                key: "049fb102-d201-450d-aa2c-8045dff20504"
            }

        ],
        tasksOptions: {
            order: true
        },
        notes: [],
        notesOptions:{
            order: false
        },
        timer: {
            paused: true,
            duration: {},
            interval:{},
            audio: new Audio('../../sounds/bell-ringing-05.mp3'),
            count:0,
            onBreak: true
        },
        timerOptions: {
            sessionLength: .05,
            playSound: false,
            flashBrowser: false,
            suggestBreaks: true,
            breakIntervals: 5
        }

    },
    actions,
    getters,
    mutations
})