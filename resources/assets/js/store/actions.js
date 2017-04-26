export const advanceParticipant = ({ state, commit }) => {

    for(let i = 0; i < state.participants.length; i++) {

        if(state.participants[i].active && typeof state.participants[i+1] !== "undefined") {
            commit('setParticipantActive', state.participants[i])
            commit('setParticipantActive', state.participants[i+1])
            break;
        } else if (state.participants[i].active && typeof state.participants[i+1] === "undefined") {
            commit('setParticipantActive', state.participants[i])
            commit('setParticipantActive', state.participants[0])
            break;
        }

    }
}
