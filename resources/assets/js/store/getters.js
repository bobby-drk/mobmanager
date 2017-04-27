export const activeParticipant = state => {
    return state.participants.filter(participant => participant.active)
}

// get all contributors
export const contributors = state => {
    return state.participants.filter(function (participant) {
        return participant.contributor
    })
}