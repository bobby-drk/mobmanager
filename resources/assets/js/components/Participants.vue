<template>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Participants</h3>
        </div>

            <ul class="list-group participants-list">
                <li
                    class="list-group-item"
                    :class="{ 'active': participant.active }"
                    v-for="(participant, index) in participants">

                    <input
                        type="checkbox"
                        :checked="participant.contributor"
                        @change="setParticipantsContributor(participant)">

                    {{ participant.name }}

                    <div class="btn-group pull-right button-bar" role="group" aria-label="...">
                        <button
                             type="button"
                             class="btn btn-default btn-xs"
                             v-if="!participant.active"
                             @click="setParticipantActive(participant)">
                                <i class="fa fa-fire"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-default btn-xs btn-danger"
                            @click="removeParticipant(index)">
                                <i class="fa fa-close"></i>
                        </button>
                    </div>

                </li>
            </ul>
    </div>

</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
        computed: mapState({
                participants: state => state.participants,
        }),
        methods: {
            ...mapMutations([
                'setParticipantsContributor',
                'setParticipantActive',
            ]),
            ...mapActions([
                'removeParticipant'
            ])
        }
    }
</script>
