export const activeParticipant = state => {
    return state.participants.filter(participant => participant.active)
}

// get all contributors
export const contributors = state => {
    return state.participants.filter(function (participant) {
        return participant.contributor
    })
}

export const assembled = state => {

    return JSON.stringify({
        participants: state.participants,
        tasks: state.tasks,
        notes: state.notes,
        timer: {
            sessionLength: state.timer.sessionLength
        }
    })
}
