<template>
    <div class="admin-panel">
        <div class='row'>
            <div class="col-sm-6">
                <div class="panel panel-warning ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                            Mob Settings
                        </h3>
                    </div>

                    <div class="panel-body">

                        <div class="form-group tight-bottom">
                            <label  for="mob-name">Mob Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="mob-name"
                                v-model="name">
                        </div>
                        <div class="note">mob url: /mob-example</div>

                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <h3>
                    <input-checkbox
                        name='long-term'
                        v-model="save">
                        Use long term storage
                    </input-checkbox>
                </h3>
                <p>MobBoss is not responsible for loss of data.  Data is secure only to the extent needed by the MobBoss applicaiton.  Store sensitive information at your own risk.</p>
            </div>
        </div>
        <div class='row'>
            <div class="col-sm-4">

                <div class="panel panel-warning ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                            Timer Settings
                        </h3>
                    </div>

                    <div class="panel-body">
                        <div class="form-group">
                            <div class='form-inline'>
                                <label for="timer-duration">Duration: </label>
                                <input
                                    type="text"
                                    class="form-control input-sm shrink-box"
                                    id="timer-duration"
                                    v-model="timerDuration">
                                    minutes

                            </div>
                        </div>
                        <div class="form-group">
                            <input-checkbox
                                name="flash-browser"
                                v-model="flashBrowser">
                                Flash title when timer is up
                            </input-checkbox>
                        </div>
                        <div class="form-group">
                            <input-checkbox
                                name="play-sound"
                                v-model="playSound">
                                Play sound when timer is up
                            </input-checkbox>
                        </div>
                         <div class="form-group">
                             <div class='form-inline'>
                                <input-checkbox
                                    name="suggest-breaks"
                                    v-model="suggestBreaks">
                                    Suggest breaks after
                                    <input
                                        type="text"
                                        class="form-control input-sm shrink-box"
                                        name="typing-reps"
                                        v-model="typingReps"> timers finish

                                </input-checkbox>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-4">

                <div class="panel panel-warning ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                            Task Settings
                        </h3>
                    </div>

                    <div class="panel-body">
                        <div class="form-group">
                            <input-checkbox
                                name="tasks-severity"
                                v-model="tasksBySeverity">
                                Order by severity
                            </input-checkbox>
                        </div>

                    </div>
                </div>

            </div>
            <div class="col-sm-4">

                <div class="panel panel-warning ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                            Note Settings
                        </h3>
                    </div>

                    <div class="panel-body">
                        <div class="form-group">
                            <input-checkbox
                                name="notes-severity"
                                v-model="notesBySeverity">
                                Order by severity
                            </input-checkbox>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class='row '>
            <div class="col-sm-12">
                <button class="btn btn-default btn-sm pull-right" @click="setAdminDisplayOff">Close</button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                persist: state => state.persist,
                mobName: state => state.mobName,
            }),
            save: {
                get() { return this.$store.state.persist },
                set(value) { this.$store.commit('togglePersist')  }
            },
            name: {
                get() { return this.mobName },
                set(value) { this.setMobName(value) }
            },
            timerDuration: {
                get() { return this.$store.state.timerOptions.sessionLength },
                set(value) { this.$store.commit('timerSetSessionLength', value) }
            },
            flashBrowser: {
                get() { return this.$store.state.timerOptions.flashBrowser },
                set(value) { this.$store.commit('timerToggleFlashBrowser', value) }
            },
            playSound: {
                get() { return this.$store.state.timerOptions.playSound },
                set(value) { this.$store.commit('timerTogglePlaySound', value) }
            },
            suggestBreaks: {
                get() { return this.$store.state.timerOptions.suggestBreaks },
                set(value) { this.$store.commit('timerToggleSuggestBreaks', value) }
            },
            typingReps: {
                get() { return this.$store.state.timerOptions.breakIntervals },
                set(value) { this.$store.commit('timerSetBreakIntervals', value) }
            },
            tasksBySeverity: {
                get() { return this.$store.state.tasksOptions.order },
                set(value) { this.$store.commit('tasksSetOrder', value) }
            },
            notesBySeverity: {
                get() { return this.$store.state.notesOptions.order },
                set(value) { this.$store.commit('notesSetOrder', value) }
            },
        },
        methods: {
            ...mapMutations([
                'setAdminDisplayOff',
                'togglePersist',
                'setMobName',
            ])
        }
    }
</script>
