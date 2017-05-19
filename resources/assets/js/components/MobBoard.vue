<template>
    <div>
        <admin-panel v-if="showAdmin"></admin-panel>
        <front-panel v-else></front-panel>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        props: ['slug'],
        computed: mapState({
                showAdmin: state => state.adminDisplay,
        }),
        methods: {
            ...mapMutations([
                'createdOn',
                'setSlug',
            ]),
            ...mapActions([
                'loadMob'
            ]),
        },
        mounted() {

            if (this.slug) {
                this.createdOn()
                this.setSlug(this.slug)
                this.loadMob()
            }
        }
    }
</script>
