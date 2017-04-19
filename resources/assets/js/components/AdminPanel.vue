<template>
    <section class="section">
        admin

        <p class="control">
            <button class="button is-primary" @click="adminOff">Close</button>
        </p>
    </section>
</template>

<script>

    import { mapMutations } from 'vuex'

    export default {
        methods: mapMutations({
            adminOff : 'setAdminDisplayOff',
        }),
    }
</script>
