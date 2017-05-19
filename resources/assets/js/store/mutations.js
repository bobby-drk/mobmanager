export const setAdminDisplayOff = (state) =>  state.adminDisplay = false
export const setAdminDisplayOn = (state) =>  state.adminDisplay = true
export const setAdminLoader = (state, value) =>  state.adminLoader = value

export const createdOn = (state) => state.created = true
export const setSlug = (state, slug) => state.slug = slug

export const noteAdd = (state, newNote) =>  state.notes.unshift(newNote)
export const noteDelete = (state, index) => state.notes.splice(index, 1)
export const notesSync = (state, notes) => state.notes = notes

export const taskAdd = (state, newTask) =>  state.tasks.unshift(newTask)
export const taskCompleted = (state, task) => task.completed = !task.completed
export const taskDelete = (state, index) => state.tasks.splice(index, 1)
export const tasksRemoveCompleted = (state) => state.tasks = state.tasks.filter(task => !task.completed)
export const tasksSync = (state, tasks) => state.tasks = tasks

export const timerSetInterval = (state, interval) => state.timer.interval = interval
export const timerSetDuration = (state, duration) => state.timer.duration = duration
export const timerBuildDuration = (state) => state.timer.duration = moment.duration(state.timer.sessionLength * 60000, 'milliseconds')
export const timerPaused = (state) => state.timer.paused = true
export const timerUnpaused = (state) => state.timer.paused = false
export const timerPlayFinishSound = (state) => state.timer.audio.play()
export const timerStopFinishSound = (state) => {
    state.timer.audio.pause()
    state.timer.audio.currentTime = 0
}

export const participantAdd = (state, newParticipant) =>  {
    state.participants.unshift(newParticipant)
}
export const participantsSync = (state, participants) => state.participants = participants
export const participantsSetContributor = (state, participant) => participant.contributor = !participant.contributor

export const setParticipantActive = (state, participant) => {

    state.participants.forEach(function (worker) {
        worker.active = false
    })

    participant.contributor = true
    participant.active = !participant.active
}

export const load = (state, { data }) => {

    let storage = JSON.parse(data.storage)

    state.mobName = data.name
    state.participants = storage.participants
    state.tasks = storage.tasks
    state.notes = storage.notes
    state.timer.sessionLength = storage.timer.sessionLength

}
