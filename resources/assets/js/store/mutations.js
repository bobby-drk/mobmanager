export const setAdminDisplayOff = (state) =>  state.adminDisplay = false
export const setAdminDisplayOn = (state) =>  state.adminDisplay = true

export const noteAdd = (state, newNote) =>  state.notes.unshift(newNote)
export const noteDelete = (state, index) => state.notes.splice(index, 1)
export const notesSync = (state, notes) => state.notes = notes

export const taskAdd = (state, newTask) =>  state.tasks.unshift(newTask)
export const taskDelete = (state, index) => state.tasks.splice(index, 1)
export const tasksRemoveCompleted = (state) => state.tasks = state.tasks.filter(task => !task.completed)
export const tasksSync = (state, tasks) => state.tasks = tasks

export const setParticipantActive = (state, participant) => {

    state.participants.forEach(function (worker) {
        worker.active = false
    })

    participant.contributor = true
    participant.active = !participant.active
}
export const setParticipantsContributor = (state, participant) => participant.contributor = !participant.contributor
