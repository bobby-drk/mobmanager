<template>
    <div>
        <admin-panel v-if="showAdmin"></admin-panel>
        <front-panel v-else></front-panel>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState({
                showAdmin: state => state.adminDisplay,
        }),
    }
</script>
