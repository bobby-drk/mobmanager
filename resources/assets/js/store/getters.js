export const activeParticipant = state => {
    return state.participants.filter(participant => participant.active)
}

// get all contributors
export const activeParticipants = state => {
    return state.participants.filter(participant => participant.active)
}