export const setAdminDisplayOn = (state) =>  state.adminDisplay = true

export const setAdminDisplayOff = (state) =>  state.adminDisplay = false

export const setParticipantsContributor = (state, participant) =>  {
    participant.contributor = !participant.contributor
}