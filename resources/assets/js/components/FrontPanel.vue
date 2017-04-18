<template>
    <div >
        <div class="columns">
            <div class="column is-one-quarter">
                participants
            </div>

            <div class="column">
                <count-down
                    :sessionLength="sessionLength">

                </count-down>

                <div> tasks</div>
            </div>

            <div class="column is-one-quarter">
                notes
            </div>
        </div>
        <div>
            <i class="fa fa-info-circle" @click="displayAdmin"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['sessionLength'],
        data () {
            return {

            };
        },
        methods: {
            displayAdmin () {
                this.$emit('openAdmin')
            }
        },
    }
</script>
