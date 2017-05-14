<template>
    <div>
        admin
        <button @click="persist">persist</button>
        <p >
            <button class="button is-primary" @click="adminOff">Close</button>
        </p>
    </div>
</template>

<script>

    import { mapMutations, mapActions } from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                adminOff : 'setAdminDisplayOff',
            }),
            ...mapActions([
                'persist'
            ]),
        }
    }
</script>
