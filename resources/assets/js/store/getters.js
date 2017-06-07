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
        persist: state.persist,
        participants: state.participants,
        tasks: state.tasks,
        tasksOptions: state.tasksOptions,
        notes: state.notes,
        notesOptions: state.notesOptions,
        timer: {
            sessionLength: state.timer.sessionLength
        },
        timerOptions: state.timerOptions,
    })
}
