<template>
    <div class="panel panel-default notesapp">
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
                :class="[note.severity, {'editing': note == editedNote }]"
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
                    :style="'height:' + editBoxHeight +'px'">
                </textarea>

                <div class="button-bar">
                    <div class="btn-group pull-left button-bar" role="group" aria-label="...">
                        <button
                             type="button"
                             @click="note.severity = 'alert-success'"
                             class="btn btn-xs btn-success">
                             <i class="fa fa-exclamation" aria-hidden="true"></i>
                        </button>
                        <button
                             type="button"
                             @click="note.severity = 'alert-info'"
                             class="btn btn-xs btn-info">
                             <i class="fa fa-exclamation" aria-hidden="true"></i>
                             <i class="fa fa-exclamation" aria-hidden="true"></i>
                        </button>
                        <button
                             type="button"
                             @click="note.severity = 'alert-warning'"
                             class="btn btn-xs btn-warning">
                                <i class="fa fa-exclamation" aria-hidden="true"></i>
                                <i class="fa fa-exclamation" aria-hidden="true"></i>
                                <i class="fa fa-exclamation" aria-hidden="true"></i>
                        </button>
                        <button
                             type="button"
                             @click="note.severity = 'alert-danger'"
                             class="btn btn-xs btn-danger">
                                <i class="fa fa-exclamation" aria-hidden="true"></i>
                                <i class="fa fa-exclamation" aria-hidden="true"></i>
                                <i class="fa fa-exclamation" aria-hidden="true"></i>
                                <i class="fa fa-exclamation" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div class="btn-group pull-right button-bar" role="group" aria-label="...">
                        <button
                             type="button"
                             class="btn btn-default btn-xs"
                             @click="editNote(note, index)">
                                <i class="fa fa-pencil"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-xs btn-danger"
                            @click="deleteNote(index)">
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
                editBoxHeight: 0,
            }
        },
        computed: mapState({
            notes: state => state.notes,
        }),
        methods: {
            ...mapMutations([
                'deleteNote',
            ]),
            addNote () {
                this.$store.commit('addNote', {
                    body: '',
                    severity: "alert-info"
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
                    this.$store.commit('deleteNote', index)
                }
            },
            cancelEdit (note) {
                this.editedNote = null
                note.body = this.beforeEditCache
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
