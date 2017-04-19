<template>
    <div class="panel">
        <p class="panel-heading">Participants</p>

        <a
            class="panel-block"
            :class="{ 'is-active': participant.active }"
            v-for="participant in participants">

            <input
                type="checkbox"
                :checked="participant.contributor"
                @change="setParticipantsContributor(participant)">

            {{ participant.name }}


            <span class="panel-icon icon is-right">
                <i class="fa fa-user-circle"></i>
            </span>


            <!-- a class="delete is-small is-right"></a -->
        </a>
    </div>

</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        computed: mapState({
                participants: state => state.participants,
        }),
        methods: {
            ...mapMutations([
                'setParticipantsContributor',
            ]),
        }
    }
</script>
