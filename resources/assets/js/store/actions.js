import * as browser from '../helpers/browser'

export const advanceParticipant = ({ state, commit, getters }) => {
    for(let i = 0; i < getters.contributors.length; i++) {
        console.log("advanceParticipant:i", i)

        if(getters.contributors[i].active && typeof getters.contributors[i+1] !== "undefined") {
            commit('setParticipantActive', getters.contributors[i])
            commit('setParticipantActive', getters.contributors[i+1])
            break;
        } else if (getters.contributors[i].active && typeof getters.contributors[i+1] === "undefined") {
            commit('setParticipantActive', getters.contributors[i])
            commit('setParticipantActive', getters.contributors[0])
            break;
        }
    }
}

export const participantDelete = ({ dispatch, state }, index) => {
    if(state.participants[index].active) {
        dispatch("advanceParticipant")
    }
    state.participants.splice(index, 1)
}

export const timerReignOver = ( {commit, dispatch, state} ) => {

    browser.flashToTitle("The gig is up")
    commit('timerPlayFinishSound')
    dispatch("advanceParticipant")
    dispatch("timerReset")
}

export const timerStart = ({ commit, dispatch, state  }) => {
    let interval = 1000;
    commit("timerUnpaused")

    if (Object.keys(state.timer.interval).length === 0 && state.timer.interval.constructor === Object ) {
        commit('timerSetInterval', setInterval( function () {
            if (!state.timer.paused) {

                if (state.timer.duration._milliseconds > 0) {
                    commit('timerSetDuration', moment.duration(state.timer.duration.asMilliseconds() - interval, 'milliseconds'))
                } else {
                    commit("timerPaused")
                    dispatch("timerReignOver")
                }
            }
        }, interval))
    }
}

export const timerReset = ({ commit, state }) => {
    clearInterval(state.timer.interval)
    commit('timerSetInterval', {})
    commit("timerBuildDuration")
    commit("timerPaused")
    // commit("timerStopFinishSound")
}

export const persist = ({ getters, state }) => {

    console.log("assembled", getters.assembled)



    axios.post('/api/mob', {
        'name': state.mobName,
        'storage': getters.assembled,
    }).then(({ data }) => {
        console.log("response", data)
        window.history.pushState({}, "", data.slug);

    }).catch((_response) => {
        console.log("Error")
    }).then(() => {
        console.log("turn off loader");

    })
}