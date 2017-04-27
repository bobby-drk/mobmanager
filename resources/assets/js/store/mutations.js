export const setAdminDisplayOn = (state) =>  state.adminDisplay = true

export const setAdminDisplayOff = (state) =>  state.adminDisplay = false

export const setParticipantsContributor = (state, participant) => participant.contributor = !participant.contributor

export const setParticipantActive = (state, participant) => {

    state.participants.forEach(function (worker) {
        worker.active = false
    })

    participant.contributor = true
    participant.active = !participant.active
}