import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const options = {
    namespaced: true,
    state: {
        persist: false,
        created: false,
        slug: "",
        mobName: "",
        featureNameOption: false,
        featureName: "",
        adminDisplay: false,
        adminLoader: false,
        participants: [],
        tasks: [],
        tasksOptions: {
            order: false
        },
        notes: [],
        notesOptions:{
            order: false
        },
        timer: {
            created: false,
            paused: true,
            duration: {},
            interval:{},
            audio: new Audio('../../sounds/bell-ringing-05.mp3'),
            count:0,
            onBreak: false
        },
        timerOptions: {
            sessionLength: 10,
            playSound: false,
            flashBrowser: false,
            suggestBreaks: true,
            breakIntervals: 5
        }

    },
    actions,
    getters,
    mutations
}

export default new Vuex.Store(options);
export { options };