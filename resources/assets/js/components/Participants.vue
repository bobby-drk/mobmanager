<template>

    <div class="panel panel-primary participantapp">
        <div class="panel-heading">
            <h3 class="panel-title">
                <span class="glyphicon glyphicon-user hidden-md" ></span>
                Crew
            </h3>
        </div>

        <ul class="list-group participants-list">
            <li
                v-for="(participant, index) in participants"
                class="list-group-item"
                :class="{
                    'list-group-item-warning': participant.active,
                    editing: participant == editedParticipant
                }"
                @dblclick="editParticipant(participant)">

                <div class="view">

                    <input-checkbox
                        v-model="participant.contributor">
                    </input-checkbox>

                    <span @click="participantsSetContributor(participant)">{{ participant.name }}</span>

                    <div class="btn-group pull-right button-bar" role="group" >
                        <button
                             type="button"
                             class="btn btn-default btn-xs"
                             v-if="!participant.active"
                             @click="setParticipantActive(participant)">
                                <i class="fa fa-fire"></i>
                        </button>
                        <button
                             type="button"
                             class="btn btn-default btn-xs"
                             @click="editParticipant(participant)">
                                <i class="fa fa-pencil"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-default btn-xs btn-danger"
                            @click="participantDelete(index)">
                                <i class="fa fa-close"></i>
                        </button>
                    </div>
                </div>

                <input class="edit" type="text"
                    v-model="participant.name"
                    v-participant-focus="participant == editedParticipant"
                    @blur="doneEdit(participant, index)"
                    @keyup.enter="doneEdit(participant, index)"
                    @keyup.esc="cancelEdit(participant)">

            </li>
        </ul>
        <div class="panel-footer" @click="addParticipant">
            <small><i class="fa fa-plus" ></i> Add to Crew</small>
        </div>
    </div>

</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
        data () {
            return {
                editedParticipant: null,
            }
        },
        watch: {
            participants: {
                handler: _.debounce(function (e) {
                    this.participantsSync(e)
                }, 500),
                deep: true
            }
        },
        computed: mapState({
                participants: state => state.participants,
        }),
        methods: {
            ...mapMutations([
                'participantAdd',
                'participantsSync',
                'participantsSetContributor',
                'setParticipantActive',
            ]),
            ...mapActions([
                'participantDelete'
            ]),
            addParticipant () {
                this.participantAdd({
                    name: '',
                    contributor: true,
                    active: false
                })

                this.$nextTick(() => this.editParticipant(this.participants[0]))
            },
            editParticipant (participant) {
                this.beforeEditCache = participant.name
                this.editedParticipant = participant
            },
            doneEdit (participant, index) {

                if (!this.editedParticipant) {
                    return
                }
                this.editedParticipant = null
                participant.name = participant.name.trim()

                if (!participant.name) {
                    this.participantDelete(index)
                }
            },
            cancelEdit (participant) {
                this.editedParticipant = null
                participant.name = this.beforeEditCache
            },
        },
        directives: {
            'participant-focus'  (el, value) {
                if (value) {
                    el.focus()
                }
            }
        },
    }
</script>
