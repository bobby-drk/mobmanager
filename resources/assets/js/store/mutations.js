export const setAdminDisplayOff = (state) =>  state.adminDisplay = false
export const setAdminDisplayOn = (state) =>  state.adminDisplay = true
export const setAdminLoader = (state, value) =>  state.adminLoader = value
export const togglePersist= (state) =>  state.persist = !state.persist
export const setMobName = (state, name) => state.mobName = name

export const createdOn = (state) => state.created = true
export const setSlug = (state, slug) => state.slug = slug

export const noteAdd = (state, newNote) =>  state.notes.unshift(newNote)
export const noteDelete = (state, index) => state.notes.splice(index, 1)
export const notesSync = (state, notes) => state.notes = notes
export const notesSetOrder = (state, value) => state.notesOptions.order = value

export const taskAdd = (state, newTask) =>  state.tasks.unshift(newTask)
export const taskCompleted = (state, task) => task.completed = !task.completed
export const taskDelete = (state, index) => state.tasks.splice(index, 1)
export const tasksRemoveCompleted = (state) => state.tasks = state.tasks.filter(task => !task.completed)
export const tasksSync = (state, tasks) => state.tasks = tasks
export const tasksSetOrder = (state, value) => state.tasksOptions.order = value

export const timerSetInterval = (state, interval) => state.timer.interval = interval
export const timerSetDuration = (state, duration) => state.timer.duration = duration
export const timerSetSessionLength = (state, length) => state.timerOptions.sessionLength = length
export const timerSetBreakIntervals = (state, length) => state.timerOptions.breakIntervals = length
export const timerToggleFlashBrowser    = (state, value) => state.timerOptions.flashBrowser = value
export const timerTogglePlaySound       = (state, value) => state.timerOptions.playSound = value
export const timerToggleSuggestBreaks   = (state, value) => state.timerOptions.suggestBreaks = value
export const timerBuildDuration = (state) => state.timer.duration = moment.duration(state.timerOptions.sessionLength * 60000, 'milliseconds')
export const timerPaused = (state) => state.timer.paused = true
export const timerUnpaused = (state) => state.timer.paused = false
export const timerBreakOn = (state) => state.timer.onBreak = true
export const timerBreakOff = (state) => state.timer.onBreak = false
export const timerResetCounter = (state) => state.timer.count = 0
export const timerIncrement = (state) => state.timer.count++
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
    state.timerOptions.sessionLength = storage.timerOptions.sessionLength

}
