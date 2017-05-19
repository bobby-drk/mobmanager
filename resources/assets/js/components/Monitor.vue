<template>
    <div>
        <div class='admin-loader' v-if="adminLoader">
            <img src="/images/admin-loader.gif" />
        </div>
    </div>
</template>

<script>

    import { mapActions, mapGetters, mapState } from 'vuex'

    export default {
        data () {
            return { }
        },
        watch: {
            assembled: {
                handler: _.debounce(function (e) {
                    this.persist
                }, 5000),
                deep: true
            }
        },
        computed: {
            ...mapState({
                adminLoader: state => state.adminLoader,
            }),
            ...mapGetters([
                'assembled'
            ]),
            ...mapActions([
                'persist'
            ]),
        }
    }
</script>
