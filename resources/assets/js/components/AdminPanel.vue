<template>
    <div>
        admin

        <p >
            <button class="button is-primary" @click="adminOff">Close</button>
        </p>
    </div>
</template>

<script>

    import { mapMutations } from 'vuex'

    export default {
        methods: mapMutations({
            adminOff : 'setAdminDisplayOff',
        }),
    }
</script>
