<template>
    <div class="mob-board admin-panel">
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

                        <div class='row bottom-buffer'>
                            <div class="col-sm-12">
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
                        <div class='row'>
                            <div class="col-sm-12">
                                <input-checkbox
                                    name='show_feature_name'
                                    v-model="featureNameOption">
                                    Add a feature name.  Displays on front page.
                                </input-checkbox>

                                <div class="form-group tight-bottom" v-if="featureNameOption">
                                    <label  for="feature-name">Feature Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="feature-name"
                                        v-model="featureName">
                                </div>

                            </div>
                        </div>

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
                <confirm-alert
                    v-if="alerts.mobDeletionWarning"
                    @confirm="confirmMobDeletion"
                    buttonType="yesNo">If you turn off long term storage, anything currently saved will be removed. Do you want to permanently delete your long term storage?</confirm-alert>
                <confirm-alert v-if="alerts.mobNeedsName" @confirm="confirmMobName">You must have a mob name before you can use long term storage.</confirm-alert>
                <p>MobBoss is not responsible for loss of data.  Data is secure only to the extent needed by the MobBoss applicaiton.  Store sensitive information at your own risk.</p>
                <p v-if="save && slug">Report Page: <a :href="'/report/'+ slug"> /report/{{ slug }}</a></p>
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
        data() {
            return {
                alerts: {
                    mobNeedsName: false,
                    mobDeletionWarning: false
                }
            }
        },
        computed: {
            ...mapState({
                mobName: state => state.mobName,
                slug: state => state.slug,
            }),
            save: {
                get() { return this.$store.state.persist },
                set(value) {
                    if (value) {
                        if(this.name == "") {
                            this.alerts.mobNeedsName = true
                        } else {
                            this.$store.commit('persistOn')
                        }

                    } else {
                        this.alerts.mobDeletionWarning = true
                    }

                }
            },
            name: {
                get() { return this.mobName },
                set(value) { this.setMobName(value) }
            },
            featureNameOption: {
                get() { return this.$store.state.featureNameOption },
                set(value) {
                    this.$store.commit('setFeatureNameOption', value)
                    if (!value) {
                        this.$store.commit('setFeatureName', '')
                    }
                }
            },
            featureName: {
                get() { return this.$store.state.featureName },
                set(value) { this.$store.commit('setFeatureName', value) }
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
                'setMobName',
            ]),
            confirmMobName() {

                this.alerts.mobNeedsName = false

                if(this.name == "") {
                    this.$store.commit('persistOff')
                }
            },
            confirmMobDeletion(value) {
                this.alerts.mobDeletionWarning = false

                if(value) {
                    this.$store.dispatch('deleteMob')
                    this.$store.commit('persistOff')
                    this.$store.commit('createdOff')
                } else {
                    this.$store.commit('persistOn')
                }
            }
        }
    }
</script>
