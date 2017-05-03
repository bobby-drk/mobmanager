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

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



export const timerReignOver = ({dispatch}) => {
    let originalTitle = "Mob Boss";
    let altTitle = "The gig is up";


    let seperator = "";
    for(let i = 0; i < 25; i++) {

        sleep(400)
        if (i % 2) {
            document.title = altTitle
        } else {
            seperator += "."
            document.title = seperator
        }
    }

    document.title = originalTitle
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

export const timerReset = ({ commit, dispatch, state }) => {
    clearInterval(state.timer.interval)
    commit('timerSetInterval', {})
    commit("timerBuildDuration")
    commit("timerPaused")
}