<template>


    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Participants</h3>
        </div>

        <div class="panel-body">
            <ul class="list-group">
                <li
                    class="list-group-item"
                    :class="{ 'active': participant.active }"
                    v-for="participant in participants">

                    <input
                        type="checkbox"
                        :checked="participant.contributor"
                        @change="setParticipantsContributor(participant)">

                    {{ participant.name }}

                </li>
            </ul>
        </div>
        <button
            type="button"
            class="btn btn-default"
            @click="advanceParticipant">
                Advance
        </button>

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
            ]),
            ...mapActions([
                'advanceParticipant'
            ])
        }
    }
</script>
