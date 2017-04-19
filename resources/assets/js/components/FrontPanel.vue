<template>
    <div>
        <div class="columns">
            <div class="column is-one-quarter">
                <participants></participants>
            </div>

            <div class="column">
                <count-down></count-down>

                <div> tasks</div>
            </div>

            <div class="column is-one-quarter">
                notes
            </div>
        </div>
        <div>
            <i class="fa fa-info-circle" @click="adminOn"></i>
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
