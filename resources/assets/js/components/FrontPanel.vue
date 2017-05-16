<template>
    <div>
        <div class='row bottom-buffer '>
            <div class="col-md-11">
                Mob Boss
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

        <button @click="persist">persist</button>
    </div>
</template>

<script>

    import { mapActions, mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations({
            adminOn : 'setAdminDisplayOn',
            }),
            ...mapActions([
                'persist'
            ]),
        }
    }
</script>
