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

export const participantDelete = ({ state, dispatch }, index) => {
    if(state.participants[index].active) {
        dispatch("advanceParticipant")
    }
    state.participants.splice(index, 1)
}