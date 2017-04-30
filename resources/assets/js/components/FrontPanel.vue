<template>
    <div>
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

        <div class='row'>
            <div class="col-md-12">
                <i class="fa fa-info-circle" @click="adminOn"></i>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapMutations } from 'vuex'

    export default {
        methods: mapMutations({
            adminOn : 'setAdminDisplayOn',
        }),

    }
</script>
