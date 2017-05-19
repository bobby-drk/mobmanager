<template>
    <div class="panel panel-primary notesapp">
        <div class="panel-heading">
            <h3 class="panel-title">
                <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                Notes
                <i class="fa fa-plus pull-right" @click="addNote"></i>
            </h3>
        </div>

        <div class="panel-body note-list">

            <div v-for="(note, index) in notes"
                class="alert"
                :class="[
                    severityClass(note.severity),
                    {'editing': note == editedNote }
                ]"
                @dblclick="editNote(note, index)"
                role="alert"
                ref="myNotes">

                <span class='view'>{{ note.body }}</span>

                <textarea
                    class="edit"
                    v-model="note.body"
                    v-note-focus="note == editedNote"
                    @blur="doneEdit(note, index)"
                    @keyup.enter="doneEdit(note, index)"
                    @keyup.esc="cancelEdit(note)"
                    :style="'height:'+ minHeight +'px'">
                </textarea>

                <div class="button-bar">

                    <div class="btn-group pull-right button-bar" role="group">

                        <input-btn-rank
                            v-model="note.severity">
                        </input-btn-rank>

                        <button
                             type="button"
                             class="btn btn-default btn-xs"
                             @click="editNote(note, index)">
                                <i class="fa fa-pencil"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-xs btn-danger"
                            @click="noteDelete(index)">
                            <i class="fa fa-close"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        data () {
            return {
                editedNote: null,
                editBoxHeight: 100,
                severityClasses: [
                    'alert-success',
                    'alert-info',
                    'alert-warning',
                    'alert-danger'
                ],
            }
        },
        watch: {
            notes: {
                handler: _.debounce(function (e) {
                    this.notesSync(e)
                }, 500),
                deep: true
            }
        },
        computed: {
            ...mapState({
                notes: state => state.notes,
            }),
            minHeight () {
                return this.editBoxHeight < 100 ? 100 : this.editBoxHeight
            }
        },
        methods: {
            ...mapMutations([
                'noteAdd',
                'noteDelete',
                'notesSync'
            ]),
            addNote () {
                this.noteAdd ({
                    body: "",
                    severity: 2
                })

                this.$nextTick(function () {
                    this.editNote(this.notes[0], 0)
                })
            },
            editNote (note, index) {
                if(typeof this.$refs.myNotes[index] !== "undefined") {
                    this.editBoxHeight = (this.$refs.myNotes[index].clientHeight * .8)
                } else {
                    this.editBoxHeight = 75
                }

                this.beforeEditCache = note.body
                this.editedNote = note
            },
            doneEdit (note, index) {
                if (!this.editedNote) {
                    return
                }
                this.editedNote = null
                note.body = note.body.trim()
                if (!note.body) {
                    this.noteDelete(index)
                }
            },
            cancelEdit (note) {
                this.editedNote = null
                note.body = this.beforeEditCache
            },
            severityClass(index) {
                return this.severityClasses[(index -1)]
            },
        },
        directives: {
            'note-focus' (el, value) {
                if (value) {
                    el.focus()
                }
            }
        },

    }
</script>
