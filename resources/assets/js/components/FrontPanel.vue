<template>
    <div class='mob-board'>
        <div class='row bottom-buffer '>
            <div class="col-md-11">
                <h2 class="margin-manipulator-m" v-if="mobName || featureName">{{ mobName }} <span v-if="featureName"> <span v-if="mobName">:</span> {{ featureName }}</span></h2>
            </div>
            <div class="col-md-1">
                <span class="glyphicon glyphicon-cog pull-right btn-admin" @click="adminOn"></span>
            </div>
        </div>
        <div class='row'>
            <div class="col-md-2">
                <mob-timer></mob-timer>
                <participants></participants>
            </div>

            <div class="col-md-5">
                <mob-tasks> tasks</mob-tasks>
            </div>

            <div class="col-md-5">
                <mob-notes></mob-notes>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapMutations, mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                mobName: state => state.mobName,
                featureName: state => state.featureName,
            }),
        },
        methods: {
            ...mapMutations({
                adminOn : 'setAdminDisplayOn',
            })
        }
    }
</script>
